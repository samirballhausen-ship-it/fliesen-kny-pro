import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">KNY</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Fliesen KNY</h3>
                <p className="text-gray-400 text-sm">Seit über 40 Jahren</p>
              </div>
            </div>
            <p className="text-gray-400">
              Ihr Spezialist für Fliesenverlegung, Naturstein, Mosaik und Badsanierung 
              im Rhein-Main-Gebiet. Große Ausstellung und kompetente Beratung.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Schnelle Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">
                Leistungen
              </Link>
              <Link to="/gallery" className="block text-gray-400 hover:text-white transition-colors">
                Galerie
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                Über uns
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Unsere Leistungen</h3>
            <div className="space-y-2">
              <p className="text-gray-400">Fliesenverlegung</p>
              <p className="text-gray-400">Natursteinverlegung</p>
              <p className="text-gray-400">Mosaikverlegung</p>
              <p className="text-gray-400">Badsanierung</p>
              <p className="text-gray-400">Beratung & Planung</p>
              <p className="text-gray-400">Ausstellungsbesichtigung</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Benzstraße 3</p>
                  <p className="text-gray-300">64546 Mörfelden-Walldorf</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a href="tel:+4961051234567" className="text-gray-300 hover:text-white transition-colors">
                  06105 / 123 456
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a href="mailto:info@fliesen-kny.de" className="text-gray-300 hover:text-white transition-colors">
                  info@fliesen-kny.de
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-400 mt-0.5" />
                <div className="text-gray-300">
                  <p>Mo-Fr: 8:00-18:00</p>
                  <p>Sa: 9:00-14:00</p>
                  <p>So: Geschlossen</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Fliesen KNY. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Datenschutz
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Impressum
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}