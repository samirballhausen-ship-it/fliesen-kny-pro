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
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  // Determine if we're on the home page for transparent header
  const isHomePage = location.pathname === '/'
  const headerBg = isScrolled || !isHomePage
    ? 'bg-stone-50/95 backdrop-blur-sm border-b border-stone-200'
    : 'bg-transparent'
  const textColor = isScrolled || !isHomePage ? 'text-stone-900' : 'text-white'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <div className={`font-display text-2xl lg:text-3xl tracking-wide ${textColor} transition-colors duration-300`}>
              <span className="font-medium">Fliesen</span>
              <span className="font-semibold ml-2">KNY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm tracking-wide uppercase transition-colors duration-300 ${
                  location.pathname === item.href
                    ? `${textColor} font-medium`
                    : `${textColor} opacity-70 hover:opacity-100`
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className={`hidden lg:block text-sm ${textColor} transition-colors duration-300`}>
            <a href="tel:0610533067" className="hover:opacity-70 transition-opacity">
              06105 – 330 67
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden relative z-10 p-2 ${isMobileMenuOpen ? 'text-stone-900' : textColor}`}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-stone-50 z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className={`text-2xl font-display ${
                      location.pathname === item.href
                        ? 'text-stone-900'
                        : 'text-stone-500 hover:text-stone-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-8 border-t border-stone-200"
              >
                <a
                  href="tel:0610533067"
                  className="text-lg text-stone-600 hover:text-stone-900"
                >
                  06105 – 330 67
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
