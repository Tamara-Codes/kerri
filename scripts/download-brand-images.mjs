#!/usr/bin/env node
// Downloads every remote image URL referenced from brands.ts into
// public/images/brands/<slug>/<n>.<ext>, then rewrites brands.ts to point
// at the local copies.
//
// Idempotent: re-running skips files that already exist on disk and only
// rewrites URLs that are still remote.
//
// Strategy: shell out to `curl` (more browser-like than Node fetch, dodges
// some TLS-fingerprint blocks). On non-200, retry through Wayback Machine.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BRANDS_FILE = path.join(ROOT, "src/data/brands.ts");
const BRANDS_DIR = path.join(ROOT, "public/images/brands");

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36";

// Parse out [{ slug, urls: [{ url, raw }] }] for every brand block.
// A "brand" block is a slug:"X" that has an `images:` array before the next slug.
function parseBrandImages(src) {
  const out = [];
  const slugRe = /slug:\s*"([^"]+)"/g;
  const matches = [];
  let m;
  while ((m = slugRe.exec(src))) matches.push({ slug: m[1], idx: m.index });

  for (let i = 0; i < matches.length; i++) {
    const { slug, idx } = matches[i];
    const end = i + 1 < matches.length ? matches[i + 1].idx : src.length;
    const block = src.slice(idx, end);
    const imgIdx = block.indexOf("images:");
    if (imgIdx === -1) continue;
    const open = block.indexOf("[", imgIdx);
    const close = block.indexOf("]", open);
    if (open === -1 || close === -1) continue;
    const arrBody = block.slice(open + 1, close);
    const urls = [];
    const strRe = /"([^"]+)"/g;
    let s;
    let pos = 0;
    while ((s = strRe.exec(arrBody))) {
      // Track 1-based original position so file numbering stays stable
      // across re-runs even after some URLs have already been replaced
      // with local paths.
      urls.push({ url: s[1], raw: `"${s[1]}"`, pos: ++pos });
    }
    out.push({ slug, urls });
  }
  return out;
}

function extFromUrl(url) {
  try {
    const u = new URL(url);
    const p = u.pathname;
    let ext = path.extname(p).toLowerCase();
    if (ext && /^\.(jpe?g|png|gif|webp|avif|svg)$/.test(ext)) {
      return ext === ".jpeg" ? ".jpg" : ext;
    }
    const src = u.searchParams.get("src");
    if (src) {
      const e = path.extname(src).toLowerCase();
      if (e) return e === ".jpeg" ? ".jpg" : e;
    }
  } catch {}
  return ".jpg";
}

function curlDownload(url, dest, referer) {
  const args = [
    "-sSL",
    "--max-time", "45",
    "-A", UA,
    "-H", "Accept: image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
    "-H", "Accept-Language: en-US,en;q=0.9",
  ];
  if (referer) args.push("-e", referer);
  args.push("-o", dest, "-w", "%{http_code}", url);
  const res = spawnSync("curl", args, { encoding: "utf8" });
  const cleanup = () => {
    try { fs.unlinkSync(dest); } catch {}
  };
  if (res.error) {
    cleanup();
    return { ok: false, status: 0, error: res.error.message };
  }
  const code = parseInt((res.stdout || "").trim(), 10) || 0;
  if (code !== 200) {
    cleanup();
    return { ok: false, status: code };
  }
  let buf;
  try { buf = fs.readFileSync(dest); } catch {
    return { ok: false, status: code };
  }
  if (buf.length < 200) {
    cleanup();
    return { ok: false, status: code, error: "tiny response" };
  }
  // Sanity-check that we got an image, not an HTML captcha / archive 404.
  const head = buf.slice(0, 256).toString("utf8");
  if (/<!?(html|HTML|doctype|DOCTYPE)/i.test(head)) {
    cleanup();
    return { ok: false, status: code, error: "html response" };
  }
  return { ok: true, status: code, size: buf.length };
}

function tryWayback(url, dest) {
  const wbUrl = `https://web.archive.org/web/2024/${url}`;
  return curlDownload(wbUrl, dest, null);
}

async function main() {
  let src = fs.readFileSync(BRANDS_FILE, "utf8");
  const brands = parseBrandImages(src);

  const failures = [];
  const replacements = [];

  for (const { slug, urls } of brands) {
    const remoteUrls = urls.filter((u) => /^https?:\/\//.test(u.url));
    if (remoteUrls.length === 0) continue;

    const dir = path.join(BRANDS_DIR, slug);
    fs.mkdirSync(dir, { recursive: true });

    for (const item of remoteUrls) {
      const { url, raw, pos } = item;
      const ext = extFromUrl(url);
      const filename = `${pos}${ext}`;
      const dest = path.join(dir, filename);
      const localPath = `/images/brands/${slug}/${filename}`;

      if (!fs.existsSync(dest)) {
        const referer = new URL(url).origin + "/";
        let r = curlDownload(url, dest, referer);
        if (!r.ok) {
          // Retry via Wayback Machine
          const r2 = tryWayback(url, dest);
          if (r2.ok) {
            console.log(`  ok+wb ${slug}/${filename} (${r2.size} B) <- ${url}`);
            r = r2;
          } else {
            console.warn(
              `  FAIL ${slug}/${filename}: direct=${r.status}${r.error ? " " + r.error : ""}, wb=${r2.status}${r2.error ? " " + r2.error : ""} <- ${url}`,
            );
            failures.push({ slug, url, error: `direct ${r.status}, wb ${r2.status}` });
            continue;
          }
        } else {
          console.log(`  ok ${slug}/${filename} (${r.size} B) <- ${url}`);
        }
      } else {
        console.log(`  skip ${slug}/${filename} (exists)`);
      }
      replacements.push({ raw, replacement: `"${localPath}"` });
    }
  }

  for (const { raw, replacement } of replacements) {
    src = src.split(raw).join(replacement);
  }
  fs.writeFileSync(BRANDS_FILE, src);

  console.log(`\nDone. ${replacements.length} URLs replaced. ${failures.length} failures.`);
  if (failures.length) {
    console.log("\nFailures:");
    for (const f of failures) console.log(`  ${f.slug}: ${f.url} (${f.error})`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
