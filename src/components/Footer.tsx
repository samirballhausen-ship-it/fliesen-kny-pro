import { Link } from 'react-router-dom'
import { ArrowUpRight, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-900">
      {/* Main Footer Content */}
      <div className="container-custom py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="inline-block group">
              <div className="font-display text-3xl text-white tracking-wide">
                <span className="font-medium group-hover:text-stone-300 transition-colors">Fliesen</span>
                <span className="font-bold ml-2">KNY</span>
              </div>
            </Link>
            <p className="leading-relaxed text-sm max-w-xs font-light">
              Ihr Experte für exklusive Fliesen, Naturstein und Sanitärkonzepte im Rhein-Main-Gebiet.
              Wir verbinden Handwerk mit Designanspruch.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-stone-800 rounded-none hover:bg-white hover:text-stone-900 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-stone-800 rounded-none hover:bg-white hover:text-stone-900 transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-white mb-8 font-medium">Navigation</h3>
            <ul className="space-y-4 text-sm">
              {[
                { name: 'Startseite', path: '/' },
                { name: 'Ausstellung', path: '/ausstellung' },
                { name: 'Über uns', path: '/ueber-uns' },
                { name: 'Kontakt', path: '/kontakt' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="inline-flex items-center hover:text-white transition-colors duration-300 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-warm-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-white mb-8 font-medium">Kontakt</h3>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="mt-1 text-warm-600 shrink-0" />
                <div>
                  <p className="text-white font-medium">Fliesen KNY oHG</p>
                  <p>Benzstraße 3</p>
                  <p>64546 Mörfelden-Walldorf</p>
                </div>
              </li>
              <li>
                <a href="tel:0610533067" className="flex items-center gap-4 hover:text-white transition-colors group">
                  <Phone size={18} className="text-warm-600 group-hover:text-white transition-colors" />
                  <span>06105 – 330 67</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@fliesen-kny.de" className="flex items-center gap-4 hover:text-white transition-colors group">
                  <Mail size={18} className="text-warm-600 group-hover:text-white transition-colors" />
                  <span>info@fliesen-kny.de</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours Column */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-white mb-8 font-medium">Öffnungszeiten</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>Mo – Fr</span>
                <span className="text-white">09:00 – 18:00</span>
              </li>
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>Samstag</span>
                <span className="text-white">09:00 – 13:00</span>
              </li>
              <li className="pt-2 text-xs text-stone-500">
                Individuelle Termine nach Vereinbarung möglich.
              </li>
            </ul>

            <div className="mt-8">
              <Link
                to="/kontakt"
                className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-white border-b border-warm-500 pb-1 hover:text-warm-500 transition-colors"
              >
                Termin buchen <ArrowUpRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-stone-900 bg-black/20">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wide text-stone-600">
            <p>&copy; {currentYear} Fliesen KNY oHG. Alle Rechte vorbehalten.</p>
            <div className="flex gap-8">
              <Link to="/datenschutz" className="hover:text-stone-400 transition-colors">Datenschutz</Link>
              <Link to="/impressum" className="hover:text-stone-400 transition-colors">Impressum</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
