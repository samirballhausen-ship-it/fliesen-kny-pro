import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Clock, ArrowUpRight, Facebook, Instagram } from 'lucide-react'
import { Logo } from './Logo'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { name: 'Fliesen', path: '/sortiment/fliesen' },
    { name: 'Bad & Sanitär', path: '/sortiment/bad-sanitaer' },
    { name: 'Naturstein', path: '/sortiment/naturstein' },
    { name: 'Ausstellung', path: '/ausstellung' },
    { name: 'Über uns', path: '/ueber-uns' },
    { name: 'Kontakt', path: '/kontakt' },
  ]

  return (
    <footer className="bg-[#1A1A1A] text-white/70">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1: Logo & Tagline */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <Logo className="h-14 w-auto" variant="light" showTagline={false} />
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Ihr Experte für exklusive Fliesen, Naturstein und Sanitärkonzepte
              im Rhein-Main-Gebiet. Seit über 40 Jahren Qualität und Beratung
              auf höchstem Niveau.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C41E3A] hover:bg-[#C41E3A]/10 hover:text-[#C41E3A] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C41E3A] hover:bg-[#C41E3A]/10 hover:text-[#C41E3A] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-white font-semibold mb-6">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              {navigationLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-white hover:pl-2 transition-all duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-[#C41E3A] mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Kontakt */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-white font-semibold mb-6">
              Kontakt
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-[#C41E3A] shrink-0" />
                <div>
                  <p className="text-white font-medium">Fliesen Kny oHG</p>
                  <p>Benzstraße 3</p>
                  <p>64546 Mörfelden</p>
                </div>
              </li>
              <li>
                <a
                  href="tel:0610533067"
                  className="flex items-center gap-3 hover:text-white transition-colors duration-300 group"
                >
                  <Phone size={18} className="text-[#C41E3A]" />
                  <span>06105 - 330 67</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@fliesen-kny.de"
                  className="flex items-center gap-3 hover:text-white transition-colors duration-300 group"
                >
                  <Mail size={18} className="text-[#C41E3A]" />
                  <span>info@fliesen-kny.de</span>
                </a>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="mt-6">
              <Link
                to="/kontakt"
                className="inline-flex items-center text-xs uppercase tracking-[0.12em] text-white border-b border-[#C41E3A] pb-1 hover:text-[#C41E3A] transition-colors duration-300"
              >
                Beratungstermin <ArrowUpRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Column 4: Öffnungszeiten */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-white font-semibold mb-6 flex items-center gap-2">
              <Clock size={14} className="text-[#C41E3A]" />
              Öffnungszeiten
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span>Mo. - Fr.</span>
                <div className="text-right">
                  <p className="text-white">9:00 - 12:30 Uhr</p>
                  <p className="text-white">14:00 - 18:00 Uhr</p>
                </div>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span>Samstag</span>
                <span className="text-white">9:00 - 12:30 Uhr</span>
              </li>
              <li className="text-xs text-white/40 pt-2 italic">
                Termine nach Vereinbarung auch außerhalb der Öffnungszeiten möglich
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>&copy; {currentYear} Fliesen Kny oHG. Alle Rechte vorbehalten.</p>

            <div className="flex items-center gap-6">
              <Link
                to="/impressum"
                className="hover:text-white/70 transition-colors duration-300"
              >
                Impressum
              </Link>
              <span className="text-white/20">|</span>
              <Link
                to="/datenschutz"
                className="hover:text-white/70 transition-colors duration-300"
              >
                Datenschutz
              </Link>
            </div>

            <p className="text-white/30 hidden lg:block">
              Made with <span className="text-[#C41E3A]">&hearts;</span> in Mörfelden
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
