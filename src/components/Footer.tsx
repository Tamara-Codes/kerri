import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <div className="flex flex-col items-center gap-4">
          {/* Logo */}
          <Link href="/" className="leading-none">
            <span className="font-serif text-lg text-kerri-charcoal/50 tracking-tight">Studio</span>
            <span className="font-serif text-2xl font-bold text-kerri-red tracking-tight ml-1.5">KERRI</span>
            <span className="font-serif text-lg text-kerri-charcoal/50 ml-1.5 tracking-tight">Design</span>
          </Link>

          {/* Contact info + Facebook */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-5 gap-y-1.5 font-sans text-sm text-kerri-charcoal/50">
            <span>Trg Maršala Tita 13, 51211 Matulji</span>
            <a href="tel:+385916621275" className="hover:text-kerri-red transition-colors">091 662 1275</a>
            <a href="mailto:kerri@kerri.hr" className="hover:text-kerri-red transition-colors">kerri@kerri.hr</a>
            <a href="https://facebook.com/kerrisalonkeramike" target="_blank" rel="noopener noreferrer" className="text-kerri-charcoal/30 hover:text-kerri-red transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="font-sans text-xs text-kerri-charcoal/25 text-center mt-5">&copy; {new Date().getFullYear()} Temi commerce d.o.o. Sva prava pridržana.</p>
      </div>
    </footer>
  );
}
