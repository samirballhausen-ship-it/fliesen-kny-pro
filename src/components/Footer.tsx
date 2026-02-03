import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react'
import { Logo } from './Logo'
import { staggerContainer, staggerItemLeft, easings } from '../utils/animations'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-luxury-charcoal pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 border-t border-gold-500/10 relative overflow-hidden">
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px
                      bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-500/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 xl:gap-24 mb-16 sm:mb-20"
        >
          {/* Brand Column (Larger) */}
          <motion.div variants={staggerItemLeft} className="lg:col-span-4 space-y-8">
            <Logo variant="light" showTagline={false} />
            <p className="text-cream-500 text-sm leading-relaxed max-w-sm">
              Seit 1980 Ihr vertrauensvoller Partner für hochwertige Fliesen, Naturstein und Baddesign
              in Mörfelden-Walldorf und dem gesamten Rhein-Main-Gebiet.
            </p>

            {/* Social Icons with Gold Hover */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-luxury-steel hover:border-gold-500
                           flex items-center justify-center text-cream-300 hover:text-gold-500
                           hover:bg-gold-500/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/fliesen.kny"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-luxury-steel hover:border-gold-500
                           flex items-center justify-center text-cream-300 hover:text-gold-500
                           hover:bg-gold-500/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItemLeft} className="lg:col-span-2">
            <h4 className="text-cream-100 font-serif text-xl mb-8">Menü</h4>
            <ul className="space-y-4">
              {[
                { name: 'Kollektionen', path: '/sortiment' },
                { name: 'Ausstellung', path: '/ausstellung' },
                { name: 'Über uns', path: '/ueber-uns' },
                { name: 'Kontakt', path: '/kontakt' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-cream-500 hover:text-gold-500 hover:translate-x-2
                               transition-all duration-300 inline-block text-sm tracking-wide"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={staggerItemLeft} className="lg:col-span-3">
            <h4 className="text-cream-100 font-serif text-xl mb-8">Kontakt</h4>
            <ul className="space-y-6 text-sm text-cream-400">
              <li className="flex items-start gap-4">
                <MapPin className="text-gold-500 mt-1 shrink-0" size={18} />
                <span className="leading-relaxed">
                  Fliesen Kny oHG<br />
                  Benzstraße 3<br />
                  64546 Mörfelden-Walldorf
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-gold-500 shrink-0" size={18} />
                <a
                  href="tel:0610533067"
                  className="hover:text-gold-500 transition-colors text-base"
                >
                  06105 - 330 67
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-gold-500 shrink-0" size={18} />
                <a
                  href="mailto:info@fliesen-kny.de"
                  className="hover:text-gold-500 transition-colors"
                >
                  info@fliesen-kny.de
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div variants={staggerItemLeft} className="lg:col-span-3">
            <h4 className="text-cream-100 font-serif text-xl mb-8">Öffnungszeiten</h4>
            <ul className="space-y-4 text-sm text-cream-400">
              <li className="flex gap-4 items-start">
                <Clock className="text-gold-500 mt-0.5 shrink-0" size={18} />
                <div className="w-full">
                  <div className="flex justify-between mb-2">
                    <span>Mo - Fr</span>
                    <span className="text-cream-200">09:00 - 12:30</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span></span>
                    <span className="text-cream-200">14:00 - 18:00</span>
                  </div>
                  <div className="h-px bg-luxury-smoke my-3"></div>
                  <div className="flex justify-between">
                    <span>Samstag</span>
                    <span className="text-cream-200">09:00 - 12:30</span>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-luxury-smoke/30 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-cream-400 gap-4">
          <p>&copy; {currentYear} Fliesen Kny oHG. Alle Rechte vorbehalten.</p>
          <div className="flex gap-8">
            <Link to="/impressum" className="hover:text-gold-500 transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-gold-500 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
export default Footer
