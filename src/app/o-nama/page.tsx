import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "O nama | Studio KERRI Design",
  description: "Studio KERRI Design - 30 godina kvalitete u Matuljima. Vaš partner za pločice, sanitarije, kupaonski namještaj i opremu.",
};

export default function ONamaPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative h-[40vh] sm:h-[50vh] min-h-[320px] sm:min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/pages/onama-hero.jpg"
            alt="Studio KERRI Design"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12 lg:pb-16 w-full">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/50 mb-4">
            Temi Commerce d.o.o.
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[0.95]">
            O nama
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">
            <div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-kerri-red mb-4">
                Naša priča
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-kerri-charcoal leading-tight mb-8">
                30 godina strasti
                <br />
                <span className="italic font-medium">za ljepši dom</span>
              </h2>
              <div className="space-y-5 font-sans text-base text-kerri-charcoal/60 leading-relaxed">
                <p>
                  Studio KERRI Design djeluje u Matuljima već tri desetljeća, nudeći
                  ekskluzivan izbor talijanskih keramičkih pločica, sanitarija,
                  kupaonskog namještaja te kada i tuš-kabina. Naša dugogodišnja
                  suradnja s vodećim talijanskim proizvođačima omogućuje nam da
                  klijentima ponudimo vrhunsku kvalitetu po konkurentnim cijenama.
                </p>
                <p>
                  Naš stručni tim s višegodišnjim iskustvom u industriji keramike
                  stoji vam na raspolaganju za savjetovanje pri odabiru
                  materijala, bilo da se radi o manjoj renovaciji kupaonice ili
                  velikom projektu opremanja stambenog ili poslovnog prostora.
                </p>
                <p>
                  Vjerujemo da svaki prostor zaslužuje materijale koji spajaju
                  estetiku, funkcionalnost i trajnost. Zato surađujemo isključivo
                  s provjerenim talijanskim brendovima koji dijele našu strast
                  prema kvaliteti i dizajnu.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative aspect-[4/3] overflow-hidden bg-kerri-warm">
                <Image
                  src="/images/pages/about.jpg"
                  alt="Interijer s keramičkim pločicama"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center">
                <div>
                  <p className="font-serif text-3xl sm:text-4xl font-light text-kerri-red">30+</p>
                  <p className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-kerri-charcoal/40 mt-1">Godina iskustva</p>
                </div>
                <div>
                  <p className="font-serif text-3xl sm:text-4xl font-light text-kerri-red">20+</p>
                  <p className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-kerri-charcoal/40 mt-1">Talijanskih brendova</p>
                </div>
                <div>
                  <p className="font-serif text-3xl sm:text-4xl font-light text-kerri-red">1000+</p>
                  <p className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-kerri-charcoal/40 mt-1">Zadovoljnih klijenata</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-kerri-warm py-14 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-kerri-red mb-4">
              Zašto KERRI
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-kerri-charcoal">
              Naše <span className="italic font-medium">prednosti</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Iskustvo", text: "Više od 30 godina u industriji keramike i kupaonske opreme." },
              { title: "Kvaliteta", text: "Surađujemo isključivo s provjerenim talijanskim proizvođačima." },
              { title: "Savjetovanje", text: "Stručni tim za pomoć pri odabiru materijala za svaki projekt." },
              { title: "Posebni uvjeti", text: "Konkurentne cijene i posebni uvjeti za veće projekte." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 border border-black/5">
                <p className="font-serif text-5xl font-light text-kerri-red/20 mb-4">
                  0{i + 1}
                </p>
                <h3 className="font-serif text-xl font-medium text-kerri-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-kerri-charcoal/50 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-14 sm:py-20 lg:py-28 bg-kerri-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-kerri-red mb-4">
                Kontakt
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight mb-8">
                Posjetite nas
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-white/40 mb-2">Adresa</p>
                  <p className="font-sans text-base text-white/70">
                    Temi commerce d.o.o.<br />
                    Trg Maršala Tita 13<br />
                    51211 Matulji
                  </p>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-white/40 mb-2">Telefon</p>
                  <p className="font-sans text-base text-white/70">
                    <a href="tel:+385916621275" className="hover:text-kerri-red transition-colors">Salon: 091 662 1275</a><br />
                    <a href="tel:+385912276100" className="hover:text-kerri-red transition-colors">Komercijala: 091 227 6100</a>
                  </p>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-white/40 mb-2">Email</p>
                  <p className="font-sans text-base text-white/70">
                    <a href="mailto:temi@kerri.hr" className="hover:text-kerri-red transition-colors">temi@kerri.hr</a><br />
                    <a href="mailto:kerri@kerri.hr" className="hover:text-kerri-red transition-colors">kerri@kerri.hr</a>
                  </p>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-white/40 mb-2">Društvene mreže</p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://facebook.com/kerrisalonkeramike"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-sans text-base text-white/70 hover:text-kerri-red transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Facebook
                    </a>
                    <a
                      href="https://instagram.com/kerrisalon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-sans text-base text-white/70 hover:text-kerri-red transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative aspect-square lg:aspect-auto overflow-hidden bg-kerri-warm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.5!2d14.2944!3d45.4589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764a1c5d6f7e8b3%3A0x1234567890abcdef!2sTrg+Mar%C5%A1ala+Tita+13%2C+51211+Matulji!5e0!3m2!1shr!2shr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio KERRI Design - lokacija"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
