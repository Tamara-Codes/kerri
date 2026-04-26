#!/usr/bin/env node
// Fetch the URLs that the curl-based downloader couldn't reach (sgcaptcha-
// protected hosts). Uses Playwright so a real browser solves the JS challenge,
// then re-uses the resulting cookies to download each image.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BRANDS_FILE = path.join(ROOT, "src/data/brands.ts");
const BRANDS_DIR = path.join(ROOT, "public/images/brands");

// Same parser as download-brand-images.mjs.
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
      urls.push({ url: s[1], raw: `"${s[1]}"`, pos: ++pos });
    }
    out.push({ slug, urls });
  }
  return out;
}

function extFromUrl(url) {
  try {
    const u = new URL(url);
    let ext = path.extname(u.pathname).toLowerCase();
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

async function main() {
  let src = fs.readFileSync(BRANDS_FILE, "utf8");
  const brands = parseBrandImages(src);

  // Collect remaining remote URLs by host, preserving original (slug, pos).
  const todoByHost = new Map();
  for (const { slug, urls } of brands) {
    for (const item of urls) {
      if (!/^https?:\/\//.test(item.url)) continue;
      const host = new URL(item.url).host;
      if (!todoByHost.has(host)) todoByHost.set(host, []);
      todoByHost.get(host).push({ ...item, slug });
    }
  }

  if (todoByHost.size === 0) {
    console.log("Nothing to do — no remote URLs left in brands.ts");
    return;
  }

  console.log(`Hosts to handle: ${[...todoByHost.keys()].join(", ")}`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
      "(KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    locale: "en-US",
  });

  const replacements = [];
  const failures = [];

  for (const [host, items] of todoByHost) {
    console.log(`\n=== ${host} (${items.length} URL${items.length === 1 ? "" : "s"}) ===`);
    const page = await context.newPage();

    // Visit the homepage first so the captcha JS runs and the clearance
    // cookie gets installed for this host.
    try {
      await page.goto(`https://${host}/`, { waitUntil: "domcontentloaded", timeout: 30000 });
      // Give the captcha JS up to 12s to run + redirect.
      await page.waitForTimeout(12000);
    } catch (err) {
      console.warn(`  homepage load issue (${err.message}) — continuing anyway`);
    }

    for (const { slug, url, raw, pos } of items) {
      const ext = extFromUrl(url);
      const filename = `${pos}${ext}`;
      const dir = path.join(BRANDS_DIR, slug);
      fs.mkdirSync(dir, { recursive: true });
      const dest = path.join(dir, filename);

      try {
        // First attempt: use the page's request context so cookies attach.
        let resp = await context.request.get(url, { timeout: 30000 });
        let buf = Buffer.from(await resp.body());
        let head = buf.slice(0, 256).toString("utf8");

        // If we got HTML (captcha), trigger the challenge once via page.goto
        // and retry the request.
        if (
          /<!?(html|HTML|doctype|DOCTYPE)/i.test(head) ||
          resp.status() !== 200
        ) {
          await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
          await page.waitForTimeout(12000);
          resp = await context.request.get(url, { timeout: 30000 });
          buf = Buffer.from(await resp.body());
          head = buf.slice(0, 256).toString("utf8");
        }

        if (resp.status() !== 200) throw new Error(`HTTP ${resp.status()}`);
        if (buf.length < 200) throw new Error(`tiny response (${buf.length}B)`);
        if (/<!?(html|HTML|doctype|DOCTYPE)/i.test(head)) {
          throw new Error("html response (captcha didn't clear)");
        }

        fs.writeFileSync(dest, buf);
        const localPath = `/images/brands/${slug}/${filename}`;
        replacements.push({ raw, replacement: `"${localPath}"` });
        console.log(`  ok ${slug}/${filename} (${buf.length} B) <- ${url}`);
      } catch (err) {
        console.warn(`  FAIL ${slug}/${filename}: ${err.message} <- ${url}`);
        failures.push({ slug, url, error: err.message });
      }
    }

    await page.close();
  }

  await browser.close();

  for (const { raw, replacement } of replacements) {
    src = src.split(raw).join(replacement);
  }
  fs.writeFileSync(BRANDS_FILE, src);

  console.log(
    `\nDone. ${replacements.length} URLs replaced, ${failures.length} still failing.`,
  );
  for (const f of failures) console.log(`  ${f.slug}: ${f.url} (${f.error})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
