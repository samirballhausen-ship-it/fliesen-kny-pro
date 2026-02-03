import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'

const categories = [
  {
    id: 'fliesen',
    title: 'Fliesen',
    subtitle: 'Keramik & Feinsteinzeug',
    image: '/images/kategorien/kategorie-grossformat.png',
    link: '/sortiment/fliesen',
    textAlign: 'left' as const,
  },
  {
    id: 'bad-sanitaer',
    title: 'Bad & Sanitär',
    subtitle: 'Design & Funktion',
    image: '/images/kategorien/kategorie-bad.png',
    link: '/sortiment/bad-sanitaer',
    textAlign: 'right' as const,
  },
  {
    id: 'naturstein',
    title: 'Naturstein',
    subtitle: 'Einzigartige Materialien',
    image: '/images/kategorien/kategorie-naturstein.png',
    link: '/sortiment/naturstein',
    textAlign: 'left' as const,
  },
]

// Category Section Component with Parallax
const CategorySection = ({
  category,
  index,
}: {
  category: (typeof categories)[0]
  index: number
}) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.5 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.1])
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  const isLeft = category.textAlign === 'left'

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen min-h-[100dvh] h-screen h-[100dvh] w-full snap-start snap-always overflow-hidden"
    >
      {/* Fullscreen Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ scale: imageScale, y: imageY }}
      >
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover"
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 ${
          isLeft
            ? 'bg-gradient-to-r from-luxury-charcoal/90 via-luxury-charcoal/50 to-transparent'
            : 'bg-gradient-to-l from-luxury-charcoal/90 via-luxury-charcoal/50 to-transparent'
        }`}
      />

      {/* Additional dark overlay for readability */}
      <div className="absolute inset-0 bg-luxury-charcoal/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div
          className={`container mx-auto px-8 md:px-16 lg:px-24 ${
            isLeft ? '' : 'flex justify-end'
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -80 : 80 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`max-w-lg ${isLeft ? '' : 'text-right'}`}
          >
            {/* Category Number */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="block font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] text-gold-500/20 leading-none mb-[-1.5rem] sm:mb-[-2rem] md:mb-[-3rem]"
            >
              0{index + 1}
            </motion.span>

            {/* Subtitle */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block text-gold-500 text-xs md:text-sm uppercase tracking-[0.3em] mb-4"
            >
              {category.subtitle}
            </motion.span>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-cream-100 mb-6 sm:mb-8"
            >
              {category.title}
            </motion.h2>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                to={category.link}
                className={`group inline-flex items-center gap-4 ${
                  isLeft ? '' : 'flex-row-reverse'
                }`}
              >
                <span className="text-cream-100 text-sm uppercase tracking-[0.2em] font-medium group-hover:text-gold-500 transition-colors duration-300">
                  Entdecken
                </span>
                <span
                  className={`w-12 h-12 border border-cream-300/30 rounded-full flex items-center justify-center
                             group-hover:border-gold-500 group-hover:bg-gold-500/10 transition-all duration-300
                             ${isLeft ? '' : 'rotate-180'}`}
                >
                  <ArrowRight
                    size={20}
                    className="text-cream-300 group-hover:text-gold-500 transition-colors duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </motion.div>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className={`mt-12 h-px bg-gradient-to-r from-gold-500/50 to-transparent w-32 ${
                isLeft ? 'origin-left' : 'origin-right ml-auto'
              }`}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export const SortimentPage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef(null)
  const [activeSection, setActiveSection] = useState(-1)

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0])
  const heroScale = useTransform(heroProgress, [0, 0.8], [1, 0.95])

  // Track active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const sections = containerRef.current.querySelectorAll('[data-section]')
      const viewportHeight = window.innerHeight

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
          setActiveSection(index)
        }
      })

      // Check if we're in hero section
      const heroRect = heroRef.current
        ? (heroRef.current as HTMLElement).getBoundingClientRect()
        : null
      if (heroRect && heroRect.bottom > viewportHeight / 2) {
        setActiveSection(-1)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="bg-luxury-charcoal snap-y snap-mandatory h-screen h-[100dvh] overflow-y-auto"
      style={{ scrollBehavior: 'smooth' }}
    >
      {/* Fixed Progress Indicator */}
      <div className="fixed right-3 sm:right-4 md:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 sm:gap-4">
        {categories.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => {
              const sections = containerRef.current?.querySelectorAll('[data-section]')
              if (sections && sections[i]) {
                sections[i].scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="group relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeSection === i
                  ? 'bg-gold-500 scale-125'
                  : 'bg-cream-300/30 group-hover:bg-cream-300/50'
              }`}
            />
            {activeSection === i && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 w-2.5 h-2.5 rounded-full border border-gold-500"
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 2, opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative h-screen h-[100dvh] w-full snap-start snap-always flex items-center justify-center overflow-hidden"
      >
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-anthracite to-luxury-charcoal" />

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-500/3 rounded-full blur-[100px]" />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block text-gold-500 text-xs uppercase tracking-[0.4em] mb-6"
          >
            Entdecken Sie
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-cream-100 mb-4"
          >
            Unsere Kollektionen
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-cream-400 text-lg md:text-xl max-w-md mx-auto mb-16"
          >
            Drei Welten, eine Leidenschaft
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-cream-500 text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown size={24} className="text-gold-500" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-luxury-charcoal to-transparent" />
      </motion.section>

      {/* Category Sections */}
      {categories.map((category, index) => (
        <div key={category.id} data-section={index}>
          <CategorySection category={category} index={index} />
        </div>
      ))}

      {/* Footer CTA Section */}
      <section className="relative h-screen h-[100dvh] w-full snap-start snap-always flex items-center justify-center bg-luxury-charcoal">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-charcoal via-luxury-anthracite to-luxury-charcoal" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <span className="text-gold-500 text-xs uppercase tracking-[0.3em] mb-6 block">
            Erleben Sie mehr
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream-100 mb-6 sm:mb-8">
            Besuchen Sie unsere Ausstellung
          </h2>

          <p className="text-cream-400 text-lg max-w-lg mx-auto mb-12">
            Auf über 1.000m² präsentieren wir Ihnen die schönsten Fliesen und Natursteine.
          </p>

          <Link
            to="/ausstellung"
            className="group inline-flex items-center gap-4 px-8 py-4 border border-gold-500 text-gold-500
                       hover:bg-gold-500 hover:text-luxury-charcoal transition-all duration-300"
          >
            <span className="text-sm uppercase tracking-widest font-medium">Zur Ausstellung</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
