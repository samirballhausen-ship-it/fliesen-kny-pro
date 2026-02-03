import { useEffect, useState, Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import { pageTransition } from './utils/animations'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })))
const Ausstellung = lazy(() => import('./pages/Ausstellung').then(m => ({ default: m.Ausstellung })))
const Fliesen = lazy(() => import('./pages/Fliesen').then(m => ({ default: m.Fliesen })))
const Sanitaer = lazy(() => import('./pages/Sanitaer').then(m => ({ default: m.Sanitaer })))
const Naturstein = lazy(() => import('./pages/Naturstein').then(m => ({ default: m.Naturstein })))
const SortimentPage = lazy(() => import('./pages/SortimentPage').then(m => ({ default: m.SortimentPage })))
const UeberUns = lazy(() => import('./pages/UeberUns').then(m => ({ default: m.UeberUns })))
const Kontakt = lazy(() => import('./pages/Kontakt').then(m => ({ default: m.Kontakt })))
const Aktuell = lazy(() => import('./pages/Aktuell').then(m => ({ default: m.Aktuell })))
const Impressum = lazy(() => import('./pages/Impressum').then(m => ({ default: m.Impressum })))
const Datenschutz = lazy(() => import('./pages/Datenschutz').then(m => ({ default: m.Datenschutz })))

// Page wrapper for animations
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [animationsReady, setAnimationsReady] = useState(false)
  const location = useLocation()

  // Scroll to top on route change - instant, nicht smooth
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Shorter loading screen - then trigger animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Small delay after loading screen fades to start hero animations
      setTimeout(() => {
        setAnimationsReady(true)
      }, 400) // Wait for loading screen exit animation
    }, 1200) // Reduced from 2000ms to 1200ms

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-luxury-charcoal font-sans selection:bg-brand-red selection:text-white scrollbar-dark">
      {/* Loading Screen */}
      <LoadingScreen isLoading={isLoading} />

      {/* Custom Cursor (Desktop only) */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content with Page Transitions */}
      <main>
        <Suspense
          fallback={
            <div className="min-h-screen bg-luxury-charcoal flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home animationsReady={animationsReady} />
                  </PageWrapper>
                }
              />
              <Route
                path="/ausstellung"
                element={
                  <PageWrapper>
                    <Ausstellung />
                  </PageWrapper>
                }
              />

              {/* Sortiment Structure */}
              <Route
                path="/sortiment"
                element={
                  <PageWrapper>
                    <SortimentPage />
                  </PageWrapper>
                }
              />
              <Route
                path="/sortiment/fliesen"
                element={
                  <PageWrapper>
                    <Fliesen />
                  </PageWrapper>
                }
              />
              <Route
                path="/sortiment/bad-sanitaer"
                element={
                  <PageWrapper>
                    <Sanitaer />
                  </PageWrapper>
                }
              />
              <Route
                path="/sortiment/naturstein"
                element={
                  <PageWrapper>
                    <Naturstein />
                  </PageWrapper>
                }
              />

              {/* Legacy Redirects */}
              <Route
                path="/fliesen"
                element={
                  <PageWrapper>
                    <Fliesen />
                  </PageWrapper>
                }
              />
              <Route
                path="/sanitaer"
                element={
                  <PageWrapper>
                    <Sanitaer />
                  </PageWrapper>
                }
              />
              <Route
                path="/naturstein"
                element={
                  <PageWrapper>
                    <Naturstein />
                  </PageWrapper>
                }
              />

              <Route
                path="/ueber-uns"
                element={
                  <PageWrapper>
                    <UeberUns />
                  </PageWrapper>
                }
              />
              <Route
                path="/kontakt"
                element={
                  <PageWrapper>
                    <Kontakt />
                  </PageWrapper>
                }
              />
              <Route
                path="/aktuell"
                element={
                  <PageWrapper>
                    <Aktuell />
                  </PageWrapper>
                }
              />
              <Route
                path="/impressum"
                element={
                  <PageWrapper>
                    <Impressum />
                  </PageWrapper>
                }
              />
              <Route
                path="/datenschutz"
                element={
                  <PageWrapper>
                    <Datenschutz />
                  </PageWrapper>
                }
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
