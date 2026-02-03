import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from './Logo'

// Navigation mit Sortiment-Dropdown
const sortimentItems = [
  { name: 'Fliesen', href: '/sortiment/fliesen' },
  { name: 'Bad & Sanitär', href: '/sortiment/bad-sanitaer' },
  { name: 'Naturstein', href: '/sortiment/naturstein' },
]

const navigation = [
  { name: 'Sortiment', href: '/sortiment', hasDropdown: true, children: sortimentItems },
  { name: 'Ausstellung', href: '/ausstellung' },
  { name: 'Über uns', href: '/ueber-uns' },
]

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  // Scroll-Handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
    setMobileDropdownOpen(null)
  }, [location])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isHomePage = location.pathname === '/'
  const showDarkHeader = isScrolled || !isHomePage

  // Check if current path is in sortiment
  const isSortimentActive = ['/fliesen', '/sanitaer', '/naturstein'].includes(location.pathname)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${showDarkHeader
          ? 'bg-white/98 backdrop-blur-md shadow-lg shadow-black/5'
          : 'bg-gradient-to-b from-black/30 to-transparent'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="relative z-10 group">
            <Logo
              className="h-12 lg:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              variant={showDarkHeader ? 'dark' : 'light'}
              showTagline={false}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12" ref={dropdownRef}>
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.hasDropdown ? (
                  <>
                    <button
                      className={`flex items-center gap-1.5 text-sm uppercase tracking-[0.12em] font-medium transition-all duration-300 py-2
                        ${showDarkHeader ? 'text-neutral-600 hover:text-neutral-900' : 'text-white/90 hover:text-white'}
                        ${isSortimentActive ? 'font-semibold' : ''}
                      `}
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                        >
                          <div className="bg-white rounded-lg shadow-2xl shadow-black/10 border border-neutral-100 overflow-hidden min-w-[220px]">
                            <div className="py-2">
                              {item.children?.map((child) => {
                                const IconComponent = (child as any).icon
                                const isExternal = (child as any).isExternal

                                if (isExternal) {
                                  return (
                                    <a
                                      key={child.name}
                                      href={child.href}
                                      className="flex items-center gap-3 px-6 py-3.5 text-sm text-neutral-600 hover:text-primary hover:bg-neutral-50 transition-all duration-200"
                                    >
                                      {IconComponent && <IconComponent size={16} className="text-primary/60" />}
                                      <span>{child.name}</span>
                                    </a>
                                  )
                                }

                                return (
                                  <Link
                                    key={child.name}
                                    to={child.href}
                                    className={`flex items-center gap-3 px-6 py-3.5 text-sm text-neutral-600 hover:text-primary hover:bg-neutral-50 transition-all duration-200 relative group/item
                                      ${location.pathname === child.href ? 'text-primary bg-primary/5 font-medium' : ''}
                                    `}
                                  >
                                    {IconComponent && <IconComponent size={16} className="text-primary/60" />}
                                    <span className="relative z-10">{child.name}</span>
                                    {!(item as any).isContactDropdown && (
                                      <motion.div
                                        className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                                        initial={{ scaleY: 0 }}
                                        whileHover={{ scaleY: 1 }}
                                        transition={{ duration: 0.2 }}
                                      />
                                    )}
                                  </Link>
                                )
                              })}
                            </div>
                            {/* Dropdown Footer - only for Sortiment */}
                            {!(item as any).isContactDropdown && (
                              <div className="border-t border-neutral-100 px-6 py-4 bg-neutral-50/50">
                                <Link
                                  to="/ausstellung"
                                  className="text-xs uppercase tracking-wider text-neutral-500 hover:text-primary transition-colors flex items-center gap-2"
                                >
                                  <span className="w-4 h-px bg-current" />
                                  Alle in unserer Ausstellung
                                </Link>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`relative text-sm uppercase tracking-[0.12em] font-medium transition-all duration-300 py-2
                      ${showDarkHeader ? 'text-neutral-600 hover:text-neutral-900' : 'text-white/90 hover:text-white'}
                      ${location.pathname === item.href ? 'font-semibold' : ''}
                      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary
                      after:transition-all after:duration-300 after:ease-out
                      ${location.pathname === item.href ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                    `}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button (rechts) - Auffälliger roter Kontakt-Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/kontakt"
              className="group flex items-center gap-3 text-sm font-bold tracking-wide uppercase
                         px-7 py-4 bg-brand-red hover:bg-brand-red-dark text-white
                         shadow-lg shadow-brand-red/30 hover:shadow-brand-red/40
                         transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Kontakt</span>
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden relative z-50 p-2.5 rounded-lg transition-all duration-300 ${isMobileMenuOpen
                ? 'text-neutral-800 bg-neutral-100'
                : showDarkHeader
                  ? 'text-neutral-800 hover:bg-neutral-100'
                  : 'text-white hover:bg-white/10'
              }`}
            aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-40 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
                {/* Mobile Navigation Items */}
                <nav className="flex-1 space-y-1">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                    >
                      {item.hasDropdown ? (
                        <div className="border-b border-neutral-100">
                          <button
                            onClick={() => setMobileDropdownOpen(mobileDropdownOpen === item.name ? null : item.name)}
                            className={`w-full flex items-center justify-between py-4 text-lg font-medium transition-colors ${
                              (item.name === 'Sortiment' && isSortimentActive) || location.pathname === item.href
                                ? 'text-primary'
                                : 'text-neutral-800'
                              }`}
                          >
                            {item.name}
                            <ChevronDown
                              size={20}
                              className={`transition-transform duration-300 ${mobileDropdownOpen === item.name ? 'rotate-180' : ''}`}
                            />
                          </button>

                          <AnimatePresence>
                            {mobileDropdownOpen === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pb-4 pl-4 space-y-1">
                                  {item.children?.map((child) => (
                                    <Link
                                      key={child.name}
                                      to={child.href}
                                      className={`block py-3 px-4 text-base rounded-lg transition-all ${location.pathname === child.href
                                          ? 'text-primary bg-primary/5 font-medium'
                                          : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                                        }`}
                                    >
                                      {child.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className={`block py-4 text-lg font-medium border-b border-neutral-100 transition-colors ${location.pathname === item.href
                              ? 'text-primary'
                              : 'text-neutral-800 hover:text-primary'
                            }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Footer with Contact CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="mt-8 space-y-4 pt-6 border-t border-neutral-200"
                >
                  <a
                    href="tel:0610533067"
                    className="flex items-center gap-3 py-3 text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                      <Phone size={18} />
                    </div>
                    <span className="text-base font-medium">06105 – 330 67</span>
                  </a>

                  <Link
                    to="/kontakt"
                    className="flex items-center justify-center gap-3 w-full py-4
                               bg-brand-red text-white text-base font-bold
                               hover:bg-brand-red-dark transition-all
                               shadow-lg shadow-brand-red/30"
                  >
                    <span>Kontakt</span>
                    <ArrowRight size={18} />
                  </Link>

                  {/* Opening Hours Hint */}
                  <p className="text-center text-sm text-neutral-500 pt-2">
                    Mo-Fr 9-18 Uhr · Sa 9-14 Uhr
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
