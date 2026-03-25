import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { brands, categories, type Category } from "@/data/brands";

interface CategoryPageProps {
  categorySlug: Category;
}

const categoryHeroImages: Record<Category, string> = {
  plocice: "/images/pages/cat-plocice.jpg",
  sanitarije: "/images/pages/cat-sanitarije.jpg",
  namjestaj: "/images/pages/cat-namjestaj.jpg",
  "kade-i-tus-kabine": "/images/pages/cat-kade.jpg",
};

export default function CategoryPage({ categorySlug }: CategoryPageProps) {
  const category = categories.find((c) => c.slug === categorySlug)!;
  const categoryBrands = brands.filter((b) => b.category === categorySlug);

  const heroImage = categoryHeroImages[categorySlug];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative h-[40vh] sm:h-[50vh] min-h-[320px] sm:min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={category.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12 lg:pb-16 w-full">
          <nav className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-white/40 mb-4">
            <Link href="/" className="hover:text-white/70 transition-colors">Naslovna</Link>
            <span>/</span>
            <span className="text-white/70">{category.name}</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[0.95]">
            {category.name}
          </h1>
          <p className="font-sans text-base text-white/60 max-w-xl mt-4 leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid gap-20 lg:gap-28">
            {categoryBrands.map((brand) => (
              <div key={brand.slug} id={brand.slug}>
                {/* Brand header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 lg:mb-10">
                  <div>
                    <p className="font-sans text-xs tracking-[0.3em] uppercase text-kerri-red mb-2">
                      {category.name}
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-medium text-kerri-charcoal">
                      {brand.name}
                    </h2>
                  </div>
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-sm tracking-wide text-kerri-charcoal/50 hover:text-kerri-red transition-colors"
                  >
                    Posjetite web stranicu
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>

                {/* Description + Price */}
                <p className="font-sans text-base text-kerri-charcoal/60 leading-relaxed max-w-2xl mb-3">
                  {brand.description}
                </p>
                <p className="font-sans text-sm text-kerri-charcoal/40 mb-8">
                  Cijene od <span className="font-medium text-kerri-charcoal/70">{brand.priceRange} {brand.priceUnit}</span>
                  {" "}<span className="text-kerri-charcoal/25">|</span>{" "}
                  <a href={`mailto:kerri@kerri.hr?subject=Upit – ${brand.name}`} className="text-kerri-red hover:text-kerri-red-dark transition-colors">Zatražite ponudu</a>
                </p>

                {/* Bento image grid */}
                {brand.images.length > 0 && (() => {
                  const imgs = brand.images.slice(0, 6);
                  const count = imgs.length;

                  // Different bento patterns based on image count
                  const bentoPatterns: Record<number, string[]> = {
                    1: ["col-span-2 md:col-span-4 row-span-2"],
                    2: ["col-span-2 row-span-2", "col-span-2 row-span-2"],
                    3: ["col-span-2 row-span-2", "col-span-2 row-span-1", "col-span-2 row-span-1"],
                    4: ["col-span-2 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-1", "col-span-2 row-span-1"],
                    5: ["col-span-2 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-1", "col-span-2 row-span-1", "col-span-2 row-span-1"],
                    6: ["col-span-2 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-1", "col-span-1 row-span-2", "col-span-1 row-span-1", "col-span-2 row-span-1"],
                  };
                  const pattern = bentoPatterns[count] || bentoPatterns[6]!;

                  return (
                    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[200px] gap-1.5 sm:gap-2.5">
                      {imgs.map((img, i) => (
                        <div
                          key={i}
                          className={`group relative overflow-hidden bg-kerri-warm ${pattern[i]}`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={img}
                            alt={`${brand.name} - ${i + 1}`}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                        </div>
                      ))}
                    </div>
                  );
                })()}

                {brand.images.length === 0 && (
                  <div className="bg-kerri-warm p-12 text-center">
                    <p className="font-sans text-sm text-kerri-charcoal/40">
                      Fotografije uskoro dostupne. Posjetite{" "}
                      <a href={brand.website} target="_blank" rel="noopener noreferrer" className="text-kerri-red hover:underline">
                        web stranicu proizvođača
                      </a>{" "}
                      za više informacija.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-kerri-charcoal py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-4">
            Zainteresirani za <span className="italic font-medium">{category.name.toLowerCase()}</span>?
          </h2>
          <p className="font-sans text-base text-white/50 mb-8 leading-relaxed">
            Posjetite naš salon ili nas kontaktirajte za stručno savjetovanje i posebne uvjete.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+385916621275" className="inline-flex items-center gap-3 bg-kerri-red hover:bg-kerri-red-dark text-white px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-medium tracking-widest uppercase transition-all duration-300">
              Nazovite nas
            </a>
            <a href="mailto:kerri@kerri.hr" className="inline-flex items-center gap-3 border border-white/30 hover:border-white/60 text-white px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-medium tracking-widest uppercase transition-all duration-300">
              Pošaljite upit
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
