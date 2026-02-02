import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-5">
            <div className="font-display text-2xl text-white mb-6">
              <span className="font-medium">Fliesen</span>
              <span className="font-semibold ml-2">KNY</span>
            </div>
            <p className="text-stone-400 leading-relaxed max-w-md">
              Der Geheimtip für Fliesen und Sanitär im Rhein-Main-Gebiet.
              Seit über 40 Jahren bieten wir Ihnen ein einzigartiges Sortiment
              namhafter Markenhersteller und spezialisierter Manufakturen aus der ganzen Welt.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-elegant text-stone-500 mb-6">
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
            <h3 className="text-xs uppercase tracking-elegant text-stone-500 mb-6">
              Kontakt
            </h3>
            <div className="space-y-4 text-stone-300">
              <div>
                <p className="text-white">Fliesen KNY oHG</p>
                <p>Benzstraße 3</p>
                <p>64546 Mörfelden-Walldorf</p>
              </div>
              <div>
                <a href="tel:0610533067" className="hover:text-white transition-colors">
                  06105 – 330 67
                </a>
              </div>
              <div>
                <a href="mailto:info@fliesen-kny.de" className="hover:text-white transition-colors">
                  info@fliesen-kny.de
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-stone-500">
              © {new Date().getFullYear()} Fliesen KNY. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center space-x-6 text-sm text-stone-500">
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
