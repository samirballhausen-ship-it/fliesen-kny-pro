import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, Droplets, Award, Calendar } from 'lucide-react'

const categories = [
  {
    title: 'Waschtische & Waschbecken',
    description: 'Von eleganten Aufsatzwaschtischen bis zu minimalistischen Einbauvarianten.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
  },
  {
    title: 'Duschen & Duschabtrennungen',
    description: 'Bodengleiche Duschen, Glasabtrennungen und Walk-In-Lösungen.',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&q=80',
  },
  {
    title: 'Badewannen',
    description: 'Freistehende Wannen, Eckwannen und Whirlpool-Systeme.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
  },
  {
    title: 'WCs & Bidets',
    description: 'Wand-WCs, bodenstehende Modelle und Dusch-WCs.',
    image: 'https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?w=600&q=80',
  },
  {
    title: 'Armaturen',
    description: 'Design-Armaturen für Waschtisch, Dusche und Wanne.',
    image: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=600&q=80',
  },
  {
    title: 'Badmöbel',
    description: 'Waschtischunterschränke, Spiegelschränke und Regalsysteme.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
  },
]

const brands = [
  'Villeroy & Boch',
  'Duravit',
  'Grohe',
  'Hansgrohe',
  'Keuco',
  'Geberit',
  'Kaldewei',
  'Dornbracht',
]

export const Sanitaer = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <div className="bg-white" ref={containerRef}>
      {/* Hero Section - 70vh */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=80"
            alt="Luxuriöses Badezimmer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-text/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 container-custom pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 border border-white/30 text-white text-xs uppercase tracking-[0.2em]"
            >
              <Droplets size={14} />
              Wellness & Design
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-hero text-white mb-6"
            >
              Bad & Sanitär
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 max-w-xl font-display italic"
            >
              Ihr Traumbad zum Anfassen
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block font-medium">
                Sanitär-Ausstellung
              </span>
              <h2 className="font-display text-h1 md:text-5xl text-neutral-text mb-8">
                Komplette Badplanung
                <br />
                <span className="text-neutral-muted italic">aus einer Hand.</span>
              </h2>
              <div className="space-y-4 text-body-lg text-neutral-muted leading-relaxed">
                <p>
                  In unserer großzügigen Sanitär-Ausstellung erleben Sie hochwertige Badausstattung
                  zum Anfassen und Ausprobieren. Von der ersten Idee bis zur fertigen Planung
                  begleiten wir Sie persönlich.
                </p>
                <p>
                  Unsere Fachberater unterstützen Sie bei der Auswahl der perfekten Kombination
                  aus Keramik, Armaturen und Möbeln – abgestimmt auf Ihren Stil und Ihre
                  räumlichen Gegebenheiten.
                </p>
              </div>
              <ul className="mt-8 space-y-3">
                {[
                  'Individuelle Badplanung',
                  'Premium-Marken vor Ort erleben',
                  '3D-Visualisierung möglich',
                  'Koordination mit Handwerkern',
                ].map((item) => (
                  <li key={item} className="flex items-center text-neutral-text">
                    <Check size={18} className="text-primary mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
                  alt="Badezimmer Showroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 shadow-primary-lg">
                <div className="font-display text-3xl mb-1">40+</div>
                <div className="text-sm text-white/80">Jahre Erfahrung</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding bg-neutral-warm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block font-medium">
              Sortiment
            </span>
            <h2 className="font-display text-h1 md:text-5xl text-neutral-text">
              Unsere Produktwelten
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white shadow-soft hover:shadow-elevated transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-h3 text-neutral-text mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-neutral-muted text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Brands Section */}
      <section className="section-padding bg-neutral-text text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Award size={20} className="text-primary" />
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
                Exklusive Partner
              </span>
            </div>
            <h2 className="font-display text-h1 md:text-5xl">
              Premium-Marken
            </h2>
            <p className="mt-4 text-white/60 max-w-xl mx-auto">
              Wir führen ausschließlich Produkte namhafter Hersteller,
              die für Qualität, Design und Langlebigkeit stehen.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center justify-center p-6 border border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all duration-300"
              >
                <span className="font-display text-lg text-white/80 hover:text-white transition-colors">
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beratungs-CTA Section */}
      <section className="section-padding bg-neutral-warm">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Calendar size={20} className="text-primary" />
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
                Persönliche Beratung
              </span>
            </div>
            <h2 className="font-display text-h1 md:text-5xl text-neutral-text mb-6">
              Planen Sie Ihr Traumbad
            </h2>
            <p className="text-body-lg text-neutral-muted mb-10 max-w-xl mx-auto">
              Vereinbaren Sie einen unverbindlichen Beratungstermin und lassen Sie sich
              von unseren Experten inspirieren. Wir nehmen uns Zeit für Ihre Wünsche.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/kontakt" className="btn-primary">
                Termin vereinbaren
              </Link>
              <a href="tel:0610533067" className="btn-outline">
                06105 – 330 67
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
