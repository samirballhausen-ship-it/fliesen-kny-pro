import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from './Logo'
import {
  mobileMenuOverlay,
  mobileMenuContent,
  mobileNavItem,
  easings,
} from '../utils/animations'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  // Prevent body scroll when mobile menu is open - iOS Safari compatible
  useEffect(() => {
    if (mobileMenuOpen) {
      // iOS Safari requires both overflow and position fixed to prevent scroll
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.top = `-${window.scrollY}px`
    } else {
      const scrollY = document.body.style.top
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { name: 'Kollektionen', href: '/sortiment' },
    { name: 'Ausstellung', href: '/ausstellung' },
    { name: 'Über uns', href: '/ueber-uns' },
  ]

  const isHomePage = location.pathname === '/'
  const isDarkMode = isHomePage && !isScrolled

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: easings.premium }}
        className={`fixed w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-luxury-charcoal/95 backdrop-blur-xl py-3 border-luxury-smoke/30 shadow-xl'
            : isHomePage
              ? 'bg-transparent py-6 border-transparent'
              : 'bg-luxury-charcoal/95 backdrop-blur-xl py-3 border-luxury-smoke/30 shadow-xl'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="z-50 relative group">
            <motion.div
              animate={{ scale: isScrolled ? 0.9 : 1 }}
              transition={{ duration: 0.3, ease: easings.smooth }}
            >
              <Logo
                variant="light"
                showTagline={!isScrolled}
                className="transition-all duration-300 drop-shadow-lg"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="relative font-sans text-xs font-medium uppercase tracking-[0.15em]
                           text-cream-300 hover:text-cream-100 transition-all duration-300 group"
              >
                {link.name}
                {/* Gold gradient underline */}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-[1px]
                             bg-gradient-to-r from-gold-500 to-brand-red
                             transition-all duration-500 ease-expo-out group-hover:w-full"
                />
              </Link>
            ))}

            {/* CTA Button with Glow */}
            <Link to="/kontakt">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-5 sm:px-6 py-3.5 bg-brand-red text-white
                           font-medium text-xs uppercase tracking-widest
                           overflow-hidden transition-all duration-300
                           hover:shadow-glow-red min-h-[44px] flex items-center justify-center"
              >
                <span className="relative z-10">Kontakt</span>
                {/* Shimmer effect */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6, ease: 'linear' }}
                />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 text-cream-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              variants={mobileMenuOverlay}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-luxury-charcoal/60 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu content - using dvh for iOS Safari compatibility */}
            <motion.div
              variants={mobileMenuContent}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full h-[100dvh] w-full max-w-[85vw] sm:max-w-sm md:max-w-md bg-luxury-charcoal z-40
                         flex flex-col border-l border-luxury-smoke/30 overflow-y-auto"
            >
              {/* Close button area padding for navbar */}
              <div className="h-20" />

              {/* Nav Links */}
              <div className="flex-1 flex flex-col justify-center px-8 space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={mobileNavItem}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-2xl sm:text-3xl font-serif text-cream-100 hover:text-gold-500
                                 transition-colors duration-300 py-3 min-h-[44px]"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom section with contact info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-luxury-anthracite p-8 border-t border-luxury-smoke/30"
              >
                <div className="space-y-4 mb-6">
                  <a
                    href="tel:0610533067"
                    className="flex items-center gap-3 text-cream-300 hover:text-gold-500 transition-colors"
                  >
                    <Phone size={18} className="text-gold-500" />
                    <span>06105 - 330 67</span>
                  </a>
                  <div className="flex items-center gap-3 text-cream-400 text-sm">
                    <MapPin size={18} className="text-gold-500" />
                    <span>Mörfelden-Walldorf</span>
                  </div>
                </div>

                <Link
                  to="/kontakt"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-4 bg-brand-red text-white text-center
                             text-sm font-bold uppercase tracking-widest
                             hover:bg-brand-dark transition-colors min-h-[48px]"
                >
                  Termin vereinbaren
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
