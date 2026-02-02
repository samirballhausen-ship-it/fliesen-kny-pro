import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Award, Sparkles } from 'lucide-react'

const categories = [
  {
    title: 'Bodenfliesen',
    description:
      'Robuste und elegante Fliesen für jeden Boden. Von klassisch bis modern, in vielfältigen Formaten und Oberflächen.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    title: 'Wandfliesen',
    description:
      'Kreative Gestaltungsmöglichkeiten für Ihre Wände. Glänzend, matt oder strukturiert für jeden Raum.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
  },
  {
    title: 'Großformate',
    description:
      'XXL-Fliesen bis 300cm für großzügige, fugenreduzierte Flächen. Modern und architektonisch anspruchsvoll.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    title: 'Mosaik',
    description:
      'Filigrane Akzente für besondere Bereiche. Glas, Keramik oder Naturstein in kunstvollen Arrangements.',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80',
  },
  {
    title: 'Outdoor & Terrassenplatten',
    description:
      'Frostsichere und rutschhemmende Fliesen für Außenbereiche. Ideal für Terrassen, Balkone und Poolumrandungen.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  },
  {
    title: 'Design-Fliesen',
    description:
      'Außergewöhnliche Dekore, 3D-Strukturen und Sonderanfertigungen für individuelle Raumkonzepte.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
  },
]

const benefits = [
  'Riesige Auswahl an Formaten, Farben und Oberflächen',
  'Namhafte Hersteller und exklusive Manufakturen',
  'Fachkundige Beratung für Ihr Projekt',
  'Musterservice und Bemusterung vor Ort',
]

export const Fliesen = () => {
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
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="Elegante Fliesen-Installation"
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
              className="inline-block mb-4 px-4 py-2 border border-white/30 text-white text-xs uppercase tracking-[0.2em]"
            >
              Premium Fliesensortiment
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-hero text-white mb-6"
            >
              Fliesen für
              <br />
              <span className="text-white/80 italic">jeden Raum.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-xl"
            >
              Entdecken Sie unsere exklusive Auswahl an hochwertigen Fliesen.
              Von klassischer Eleganz bis zu modernem Design - für jeden Stil das Passende.
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
              <h2 className="font-display text-h1 md:text-5xl text-neutral-text mb-8">
                Qualität,
                <br />
                <span className="text-neutral-muted italic">die überzeugt.</span>
              </h2>
              <div className="space-y-4 text-body-lg text-neutral-muted leading-relaxed">
                <p>
                  Unser Fliesensortiment vereint Vielfalt mit höchsten Qualitätsansprüchen.
                  Von zeitlosen Klassikern bis zu aktuellen Trends bieten wir Ihnen eine
                  kuratierte Auswahl namhafter Hersteller und exklusiver Manufakturen.
                </p>
                <p>
                  Ob großzügige Bodenflächen, elegante Wandgestaltungen oder individuelle
                  Akzente mit Mosaik - unsere Fachberater unterstützen Sie bei der
                  Auswahl des perfekten Materials für Ihr Projekt.
                </p>
              </div>
              <ul className="mt-8 space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-neutral-muted"
                  >
                    <Check size={18} className="text-primary mr-3 shrink-0" />
                    {benefit}
                  </motion.li>
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
                  alt="Premium Fliesen Auswahl"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 hidden lg:block">
                <div className="text-3xl font-display mb-1">100+</div>
                <div className="text-xs uppercase tracking-wider text-white/80">Marken</div>
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
              Unser Sortiment
            </span>
            <h2 className="font-display text-h1 md:text-5xl text-neutral-text mb-6">
              Fliesen-Kategorien
            </h2>
            <p className="text-body-lg text-neutral-muted max-w-2xl mx-auto">
              Von klassischen Bodenfliesen bis zu exklusiven Design-Fliesen -
              entdecken Sie die Vielfalt unseres Sortiments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to="/ausstellung" className="block">
                  <div className="relative overflow-hidden aspect-[4/3] mb-5">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-neutral-text/20 group-hover:bg-neutral-text/10 transition-colors duration-500" />
                    <div className="absolute bottom-4 right-4">
                      <div className="w-10 h-10 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <ArrowRight className="w-5 h-5 text-neutral-text" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-neutral-text mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-neutral-muted leading-relaxed">
                    {category.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marken Section */}
      <section className="section-padding bg-neutral-text text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block font-medium">
                Markenvielfalt
              </span>
              <h2 className="font-display text-h1 md:text-5xl mb-6">
                Namhafte Hersteller.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Wir arbeiten mit den renommiertesten Fliesenherstellern Europas zusammen.
                Von italienischen Premiummarken bis zu deutschen Traditionsunternehmen -
                in unserem Sortiment finden Sie Qualität aus erster Hand.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-sm">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg mb-1">Premium Qualität</h4>
                    <p className="text-sm text-white/60">Nur geprüfte Markenware</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-sm">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg mb-1">Exklusiv</h4>
                    <p className="text-sm text-white/60">Einzigartige Kollektionen</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                'Villeroy & Boch',
                'Marazzi',
                'Agrob Buchtal',
                'Atlas Concorde',
                'Steuler',
                'Florim',
                'Casalgrande Padana',
                'Ceramiche Refin',
                'u.v.m.',
              ].map((brand, index) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white/5 border border-white/10 p-4 text-center hover:bg-white/10 transition-colors duration-300"
                >
                  <span className="text-sm text-white/80">{brand}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beratungs-CTA */}
      <section className="section-padding bg-neutral-warm">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block font-medium">
              Persönliche Beratung
            </span>
            <h2 className="font-display text-h1 md:text-5xl text-neutral-text mb-6">
              Individuelle Beratung
              <br />
              <span className="text-neutral-muted italic">für Ihr Projekt.</span>
            </h2>
            <p className="text-body-lg text-neutral-muted mb-10 max-w-xl mx-auto">
              Unsere Fachberater helfen Ihnen, die perfekte Fliese für Ihr Vorhaben zu finden.
              Vereinbaren Sie einen Termin in unserer Ausstellung.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/kontakt" className="btn-primary">
                Termin vereinbaren
              </Link>
              <a href="tel:0610533067" className="btn-outline">
                06105 - 330 67
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
