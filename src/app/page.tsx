import Image from "next/image";
import Link from "next/link";
import { brands, categories, promotions } from "@/data/brands";
import BrandLogo from "@/components/BrandLogo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const navLinks = [
  { href: "/", label: "Naslovna" },
  { href: "/plocice", label: "Pločice" },
  { href: "/sanitarije", label: "Sanitarije" },
  { href: "/namjestaj", label: "Namještaj" },
  { href: "/kade-i-tus-kabine", label: "Kade i tuš-kabine" },
  { href: "/o-nama", label: "O nama" },
];

const categoryImages: Record<string, string> = {
  plocice: "/images/pages/cat-plocice.jpg",
  sanitarije: "/images/pages/cat-sanitarije.jpg",
  namjestaj: "/images/pages/cat-namjestaj.jpg",
  "kade-i-tus-kabine": "/images/pages/cat-kade.jpg",
};

export default function HomePage() {
  // Deduplicate brands by website URL for the logo grid
  const uniqueBrands = brands.filter(
    (brand, index, self) =>
      index === self.findIndex((b) => b.website === brand.website)
  );

  // Brands that need larger logo display
  const logoSizeOverrides: Record<string, string> = {
    simas: "max-h-20 max-w-[180px]",
    lineabeta: "max-h-20 max-w-[180px]",
    artesi: "max-h-20 max-w-[180px]",
    "cercom-ceramiche": "max-h-20 max-w-[180px]",
    cir: "max-h-20 max-w-[180px]",
    "deco-decking": "max-h-20 max-w-[180px]",
    giulini: "max-h-20 max-w-[180px]",
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative h-screen min-h-[550px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/pages/hero.jpg"
            alt="Luksuzni interijer s talijanskim pločicama"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 w-full">
          <p className="animate-fade-up font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-white/60 mb-4">
            Temi Commerce d.o.o. &mdash; Matulji
          </p>
          <h1 className="animate-fade-up delay-100 font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[0.95] mb-6">
            30 Godina
            <br />
            <span className="text-kerri-red font-medium italic">Kvalitete</span>
          </h1>
          <p className="animate-fade-up delay-200 font-sans text-base md:text-lg text-white/70 max-w-xl leading-relaxed mb-10">
            Ekskluzivni salon talijanskih keramičkih pločica, sanitarija i
            kupaonskog namještaja. Više od 20 vodećih brendova na jednom mjestu.
          </p>
          <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
            <Link
              href="/plocice"
              className="inline-flex items-center gap-3 bg-kerri-red hover:bg-kerri-red-dark text-white px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-medium tracking-widest uppercase transition-all duration-300"
            >
              Pogledajte ponudu
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
            <Link
              href="/o-nama"
              className="inline-flex items-center gap-3 border border-white/30 hover:border-white/60 text-white px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-medium tracking-widest uppercase transition-all duration-300"
            >
              O nama
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-700">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/40" />
        </div>
      </section>

      {/* ═══════════════ FLASH PROMO STRIP ═══════════════ */}
      <section className="relative bg-kerri-charcoal overflow-hidden">
        {/* Subtle diagonal texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 10px, white 10px, white 11px)" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-14">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-12">
            {promotions.map((promo, i) => (
              <div key={i} className="group flex gap-4 items-start">
                <span className="flex-shrink-0 font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-white bg-kerri-red px-2.5 py-1.5 sm:px-3 sm:py-2 mt-1">
                  {promo.badge}
                </span>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-white font-medium leading-tight mb-1.5">
                    {promo.title}
                  </h3>
                  <p className="font-sans text-sm text-white/50 leading-relaxed">
                    {promo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Red accent line at bottom */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-kerri-red/50 to-transparent" />
      </section>

      {/* ═══════════════ CATEGORIES ═══════════════ */}
      <section className="py-14 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10 sm:mb-16 lg:mb-20">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-kerri-red mb-3">
              Naš asortiman
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-kerri-charcoal leading-tight">
              Sve za savršenu
              <br />
              <span className="italic font-medium">kupaonicu</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {categories.map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="group relative aspect-[4/3] overflow-hidden bg-kerri-warm"
              >
                <Image
                  src={categoryImages[cat.slug] || cat.heroImage}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-kerri-red/0 group-hover:bg-kerri-red/10 transition-colors duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10">
                  <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/50 mb-2">
                    {(() => {
                      const count = brands.filter((b) => b.category === cat.slug).length;
                      if (count === 1) return `${count} brend`;
                      if (count >= 2 && count <= 4) return `${count} brenda`;
                      return `${count} brendova`;
                    })()}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-2">
                    {cat.name}
                  </h3>
                  <p className="font-sans text-sm text-white/60 max-w-sm leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="flex items-center gap-2 mt-4 text-white/0 group-hover:text-white/80 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="font-sans text-xs tracking-widest uppercase">
                      Pogledaj
                    </span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT STRIP ═══════════════ */}
      <section className="bg-kerri-charcoal py-14 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-kerri-red mb-4">
                O nama
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight mb-6">
                Tradicija i strast
                <br />
                <span className="italic font-medium">za ljepši dom</span>
              </h2>
              <p className="font-sans text-base text-white/50 leading-relaxed mb-8">
                Već tri desetljeća, Studio KERRI Design u Matuljima predstavlja sinonim za
                vrhunsku talijansku keramiku i kupaonsku opremu. Naš tim
                stručnjaka pomaže klijentima u odabiru savršenih materijala za
                svaki prostor — od manjih renovacija do velikih projekata.
              </p>
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                <div>
                  <p className="font-serif text-3xl sm:text-4xl font-light text-kerri-red">
                    30+
                  </p>
                  <p className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-white/40 mt-1">
                    Godina iskustva
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl sm:text-4xl font-light text-kerri-red">
                    20+
                  </p>
                  <p className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-white/40 mt-1">
                    Talijanskih brendova
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl sm:text-4xl font-light text-kerri-red">
                    1000+
                  </p>
                  <p className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-white/40 mt-1">
                    Zadovoljnih klijenata
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/pages/about.jpg"
                alt="Interijer s keramičkim pločicama"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border border-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ BRANDS ═══════════════ */}
      <section className="py-14 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10 sm:mb-16">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-kerri-red mb-3">
              Partneri
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-kerri-charcoal">
              Naši <span className="italic font-medium">brendovi</span>
            </h2>
          </div>

          {(() => {
            const cols = 5;
            const fullRows = uniqueBrands.slice(0, Math.floor(uniqueBrands.length / cols) * cols);
            const lastRow = uniqueBrands.slice(fullRows.length);
            return (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-t border-l border-black/[0.04]">
                  {fullRows.map((brand) => (
                    <BrandLogo
                      key={brand.slug}
                      name={brand.name}
                      logo={brand.logo}
                      website={brand.website}
                      sizeClass={logoSizeOverrides[brand.slug]}
                    />
                  ))}
                </div>
                {lastRow.length > 0 && (
                  <div className="flex justify-center border-l border-black/[0.04]">
                    {lastRow.map((brand) => (
                      <div key={brand.slug} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 [&>a]:min-h-[145px]">
                        <BrandLogo
                          name={brand.name}
                          logo={brand.logo}
                          website={brand.website}
                          sizeClass={logoSizeOverrides[brand.slug]}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </>
            );
          })()}
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative py-16 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/pages/cta.jpg"
            alt="Kupaonica s pločicama"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
            Posjetite naš
            <br />
            <span className="italic font-medium">salon u Matuljima</span>
          </h2>
          <p className="font-sans text-base text-white/60 mb-10 leading-relaxed">
            Dođite i uvjerite se u kvalitetu naših proizvoda. Naš stručni tim
            stoji vam na raspolaganju za savjete i pomoć pri odabiru.
          </p>
          <div className="flex flex-col items-center gap-3">
            <p className="font-sans text-sm tracking-widest uppercase text-white/50">
              Nazovite nas
            </p>
            <a
              href="tel:+385916621275"
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-white hover:text-kerri-red transition-colors duration-300"
            >
              091 662 1275
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
