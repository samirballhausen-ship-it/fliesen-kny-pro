import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Startseite', href: '/' },
  { name: 'Ausstellung', href: '/ausstellung' },
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Kontakt', href: '/kontakt' },
]

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  // Determine if we're on the home page for transparent header logic
  const isHomePage = location.pathname === '/'

  // Header background state
  const headerClasses = isScrolled || !isHomePage
    ? 'bg-white/80 backdrop-blur-xl border-b border-stone-200/50 shadow-sm'
    : 'bg-transparent border-b border-transparent'

  // Text color state
  const textColor = isScrolled || !isHomePage ? 'text-stone-900' : 'text-white'

  // Button style state
  const buttonClass = isScrolled || !isHomePage
    ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'
    : 'border-white text-white hover:bg-white hover:text-stone-900'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${headerClasses}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="relative z-10 group">
            <div className={`font-display text-2xl lg:text-3xl tracking-wide ${textColor} transition-colors duration-300`}>
              <span className="font-medium group-hover:opacity-80 transition-opacity">Fliesen</span>
              <span className="font-bold ml-2">KNY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 relative py-2 
                  ${textColor} 
                  ${location.pathname === item.href ? 'font-semibold opacity-100' : 'opacity-80 hover:opacity-100'}
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-current 
                  after:transition-all after:duration-300 
                  ${location.pathname === item.href ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact + CTA - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="tel:0610533067"
              className={`text-sm tracking-wide ${textColor} transition-all duration-300 hover:opacity-70`}
            >
              06105 – 330 67
            </a>
            <Link
              to="/kontakt"
              className={`text-xs tracking-[0.2em] uppercase px-6 py-3 border transition-all duration-300 ${buttonClass}`}
            >
              Termin buchen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden relative z-10 p-2 transition-colors duration-300 ${isMobileMenuOpen ? 'text-stone-900' : textColor}`}
            aria-label="Menü öffnen"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white/95 z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  <Link
                    to={item.href}
                    className={`text-3xl font-display ${location.pathname === item.href
                        ? 'text-stone-900 font-medium'
                        : 'text-stone-400 hover:text-stone-900'
                      } transition-colors duration-300`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="pt-12 border-t border-stone-200 w-full max-w-xs text-center flex flex-col items-center gap-6"
              >
                <a
                  href="tel:0610533067"
                  className="text-xl font-display text-stone-600 hover:text-stone-900 transition-colors"
                >
                  06105 – 330 67
                </a>
                <Link
                  to="/kontakt"
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-xs tracking-[0.2em] uppercase border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
                >
                  Termin buchen
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
