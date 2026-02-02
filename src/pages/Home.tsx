import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ChevronDown,
  MessageCircle,
  Shield,
  Layers,
  Headphones,
  Phone
} from 'lucide-react'

// USP Data
const usps = [
  {
    icon: MessageCircle,
    title: 'Persoenliche Beratung',
    description: 'Individuelle Fachberatung durch unsere Experten fuer Ihr Projekt.',
  },
  {
    icon: Shield,
    title: 'Premium Qualitaet',
    description: 'Nur ausgewaehlte Markenhersteller und hochwertige Materialien.',
  },
  {
    icon: Layers,
    title: 'Groesste Auswahl',
    description: 'Ueber 100 Marken und unzaehlige Designs in unserer Ausstellung.',
  },
  {
    icon: Headphones,
    title: 'Rundum Service',
    description: 'Von der Planung bis zur Lieferung - alles aus einer Hand.',
  },
]

// Sortiment Categories
const sortiment = [
  {
    title: 'Fliesen',
    description: 'Von klassisch elegant bis modern minimalistisch - Fliesen fuer jeden Stil und Raum.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    link: '/ausstellung',
  },
  {
    title: 'Bad & Sanitaer',
    description: 'Design-Armaturen, Waschtische und komplette Badkonzepte namhafter Hersteller.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    link: '/ausstellung',
  },
  {
    title: 'Naturstein',
    description: 'Edle Natursteine fuer zeitlose Eleganz - Marmor, Granit und mehr.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    link: '/ausstellung',
  },
]

export const Home = () => {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="bg-white">
      {/* ============================================
          HERO SECTION - 100vh Immersive
          ============================================ */}
      <section ref={heroRef} className="relative h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image with Parallax */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80"
            alt="Luxurioeses Badezimmer mit eleganten Fliesen"
            className="w-full h-full object-cover scale-110"
          />
          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-5 py-2.5 border border-white/30 text-white/90 text-xs uppercase tracking-[0.2em] backdrop-blur-sm bg-white/5">
                Der Geheimtipp im Rhein-Main-Gebiet
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
            >
              Gestalten Sie mit uns
              <br />
              <span className="text-white/80 italic">Ihr Zuhause.</span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed"
            >
              Entdecken Sie eine der groessten Ausstellungen fuer exklusive Fliesen,
              edle Sanitaerobjekte und hochwertige Natursteine im Rhein-Main-Gebiet.
            </motion.p>

            {/* Dual CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-medium transition-all duration-300 shadow-lg hover:shadow-primary-lg group"
              >
                Termin vereinbaren
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/ausstellung"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/70 text-white hover:bg-white hover:text-neutral-text font-medium transition-all duration-300 backdrop-blur-sm"
              >
                Ausstellung entdecken
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Mehr entdecken</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================
          INTRO SECTION - Warm Beige Background
          ============================================ */}
      <section className="py-24 lg:py-32 bg-neutral-beige">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Overline */}
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-6 block">
              Seit ueber 40 Jahren
            </span>

            {/* Headline */}
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-neutral-text mb-8 leading-tight">
              Ihr Partner fuer
              <br />
              <span className="text-neutral-muted italic">exklusive Raumgestaltung.</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-neutral-muted leading-relaxed mb-12 max-w-3xl mx-auto">
              Fliesen Kny steht fuer kompetente Beratung, erstklassige Qualitaet und ein
              einzigartiges Sortiment. Als Familienbetrieb begleiten wir Sie persoenlich
              von der ersten Idee bis zur perfekten Umsetzung Ihres Projekts.
            </p>

            {/* Stats Inline */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl text-primary mb-2">40+</div>
                <div className="text-sm uppercase tracking-[0.15em] text-neutral-muted">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl text-primary mb-2">1000m²</div>
                <div className="text-sm uppercase tracking-[0.15em] text-neutral-muted">Ausstellung</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl text-primary mb-2">100+</div>
                <div className="text-sm uppercase tracking-[0.15em] text-neutral-muted">Marken</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SORTIMENT TEASER - 3 Premium Cards
          ============================================ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-4 block">
              Unser Sortiment
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-neutral-text">
              Entdecken Sie unsere Welten
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sortiment.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link to={item.link} className="group block">
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[3/4] mb-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Arrow Icon on Hover */}
                    <div className="absolute bottom-6 right-6">
                      <div className="w-12 h-12 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                        <ArrowRight className="w-5 h-5 text-neutral-text" />
                      </div>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-6 left-6">
                      <h3 className="font-display text-2xl md:text-3xl text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-muted leading-relaxed group-hover:text-neutral-text transition-colors duration-300">
                    {item.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          USP SECTION - Clean White Grid
          ============================================ */}
      <section className="py-24 lg:py-32 bg-neutral-cream">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-4 block">
              Warum Fliesen Kny
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-neutral-text">
              Was uns auszeichnet
            </h2>
          </motion.div>

          {/* USP Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((usp, index) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white border border-neutral-border mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-soft">
                  <usp.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl text-neutral-text mb-3">
                  {usp.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-muted text-sm leading-relaxed">
                  {usp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          AUSSTELLUNG TEASER - Large Image + Text
          ============================================ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80"
                  alt="Fliesen Kny Ausstellung Showroom"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent Box */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 hidden lg:block">
                <div className="font-display text-4xl">1000m²</div>
                <div className="text-sm uppercase tracking-wider text-white/80">Ausstellung</div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-4 block">
                Unsere Ausstellung
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-neutral-text mb-6 leading-tight">
                1000m² Inspiration
                <br />
                <span className="text-neutral-muted italic">fuer Ihr Zuhause.</span>
              </h2>
              <p className="text-lg text-neutral-muted leading-relaxed mb-8">
                Besuchen Sie eine der groessten Fliesenausstellungen im Rhein-Main-Gebiet.
                Erleben Sie ueber 100 Marken live, lassen Sie sich von aktuellen Trends
                inspirieren und finden Sie genau das Richtige fuer Ihr Projekt.
              </p>
              <Link
                to="/ausstellung"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-medium transition-all duration-300 shadow-lg hover:shadow-primary-lg group"
              >
                Ausstellung besuchen
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA SECTION - Dark Background
          ============================================ */}
      <section className="py-24 lg:py-32 bg-neutral-text">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Lassen Sie sich beraten.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
              Vereinbaren Sie einen persoenlichen Beratungstermin und lassen Sie sich
              von unseren Experten Ihr Traumprojekt planen.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-light text-white font-medium transition-all duration-300 shadow-lg hover:shadow-primary-lg group"
              >
                Termin vereinbaren
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:0610533067"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-medium transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                06105 - 330 67
              </a>
            </div>

            {/* Additional Info */}
            <p className="text-white/50 text-sm">
              Mo - Fr: 9:00 - 18:00 Uhr | Sa: 9:00 - 14:00 Uhr
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
