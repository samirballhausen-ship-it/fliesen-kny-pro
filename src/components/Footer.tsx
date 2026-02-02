import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-stone-950 text-stone-300">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Brand & Description */}
          <div className="lg:col-span-5 space-y-6">
            <div className="font-display text-2xl text-white">
              <span className="font-medium">Fliesen</span>
              <span className="font-semibold ml-2">KNY</span>
            </div>
            <p className="text-stone-400 leading-relaxed max-w-md">
              Premium-Fliesen, Naturstein und Sanitär für exklusive Wohn- und
              Gewerberäume. Persönliche Beratung, kuratierte Kollektionen und
              eine der größten Ausstellungen im Rhein-Main-Gebiet.
            </p>
            <div className="space-y-2 text-sm text-stone-400">
              <p>Seit 1982 · Familiengeführt · 1000 m² Ausstellung</p>
              <p>Montag – Freitag: 9:00 – 12:30 & 14:00 – 18:00</p>
              <p>Samstag: 9:00 – 12:30</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-6">
              Navigation
            </h3>
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-stone-300 hover:text-white transition-colors">
                Startseite
              </Link>
              <Link to="/ausstellung" className="text-stone-300 hover:text-white transition-colors">
                Ausstellung
              </Link>
              <Link to="/ueber-uns" className="text-stone-300 hover:text-white transition-colors">
                Über uns
              </Link>
              <Link to="/kontakt" className="text-stone-300 hover:text-white transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-6">
              Kontakt
            </h3>
            <div className="space-y-4 text-stone-300">
              <div>
                <p className="text-white">Fliesen KNY oHG</p>
                <p>Benzstraße 3</p>
                <p>64546 Mörfelden-Walldorf</p>
              </div>
              <div className="space-y-2">
                <a href="tel:0610533067" className="block hover:text-white transition-colors">
                  06105 – 330 67
                </a>
                <a href="mailto:info@fliesen-kny.de" className="block hover:text-white transition-colors">
                  info@fliesen-kny.de
                </a>
              </div>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center px-5 py-3 text-xs tracking-[0.2em] uppercase border border-stone-500 text-stone-200 hover:border-white hover:text-white transition-all duration-300"
              >
                Termin anfragen
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800/80">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
            <p>© {new Date().getFullYear()} Fliesen KNY. Alle Rechte vorbehalten.</p>
            <div className="flex items-center space-x-6">
              <Link to="/datenschutz" className="hover:text-stone-300 transition-colors">
                Datenschutz
              </Link>
              <Link to="/impressum" className="hover:text-stone-300 transition-colors">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
