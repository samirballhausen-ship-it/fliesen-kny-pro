import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Sparkles, Ruler, ShieldCheck, ArrowUpRight } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
}

const highlights = [
  {
    title: 'Premium-Auswahl',
    description: 'Kuratierte Kollektionen internationaler Marken mit exklusiven Serien.',
    icon: Sparkles
  },
  {
    title: 'Planung & Umsetzung',
    description: 'Beratung, Materialkonzept und Detailplanung aus einer Hand.',
    icon: Ruler
  },
  {
    title: 'Qualität seit 1982',
    description: 'Familiengeführt, mit über 40 Jahren Erfahrung im Rhein-Main-Gebiet.',
    icon: Award
  },
  {
    title: 'Verlässliche Partner',
    description: 'Koordination mit Architekten, Handwerk und Bauleitung.',
    icon: ShieldCheck
  }
]

const services = [
  {
    title: 'Exklusive Fliesen',
    description: 'Großformate, Natursteinoptik und handveredelte Serien für Wand und Boden.',
    image: '/images/service-showroom.jpg',
    link: '/ausstellung'
  },
  {
    title: 'Sanitär & Bad',
    description: 'Design-Armaturen, Waschtische und komplette Badkonzepte aus einer Hand.',
    image: '/images/hero-luxury-bathroom.jpg',
    link: '/ausstellung'
  },
  {
    title: 'Mosaik & Details',
    description: 'Individuelle Akzente, Manufakturarbeiten und Sonderanfertigungen.',
    image: '/images/service-mosaic-art.jpg',
    link: '/ausstellung'
  }
]

const projectGallery = [
  {
    title: 'Penthouse Frankfurt',
    category: 'Bad & Wellness',
    image: '/images/gallery-luxury-bathroom.jpg'
  },
  {
    title: 'Villa Taunus',
    category: 'Living & Kitchen',
    image: '/images/gallery-modern-kitchen.jpg'
  },
  {
    title: 'Outdoor Lounge',
    category: 'Terrasse',
    image: '/images/gallery-outdoor-terrace.jpg'
  }
]

export const Home = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="bg-stone-50" ref={containerRef}>
      {/* Hero Section - Full Screen with Parallax */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img
            src="/images/hero-luxury-bathroom.jpg"
            alt="Luxuriöses Badezimmer"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-900/50 to-stone-950/60" />
        </motion.div>

        <div className="relative z-10 container-custom w-full">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 border border-white/20 backdrop-blur-sm bg-white/5"
            >
              <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-stone-200">
                Premium Showroom Rhein-Main
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-display text-5xl md:text-7xl lg:text-[5.5rem] text-white mb-8 leading-[1.1]"
            >
              Raumkultur <br className="hidden md:block" />
              <span className="text-stone-300 italic">neu definiert.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-xl text-stone-200 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Wir gestalten Räume mit Charakter. Entdecken Sie exklusive Fliesen,
              Naturstein und Sanitär in einer der führenden Ausstellungen der Region.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link to="/ausstellung" className="btn-primary min-w-[200px]">
                Kollektion ansehen
              </Link>
              <Link
                to="/kontakt"
                className="btn-outline border-white text-white hover:bg-white hover:text-stone-900 min-w-[200px]"
              >
                Beratungstermin
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* Highlights - Floating Grid */}
      <section className="relative z-20 -mt-24 pb-20 lg:pb-32 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 shadow-xl shadow-stone-200/20 hover:-translate-y-2 transition-transform duration-500 ease-out border-b-2 border-transparent hover:border-warm-500 group"
              >
                <div className="mb-6 inline-flex p-3 bg-stone-50 text-stone-900 rounded-none group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl text-stone-900 mb-3">{item.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="section-padding overflow-hidden">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-warm-600 mb-6 block font-medium">
              Seit 1982
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-8 leading-tight">
              Beratung, Auswahl und Gestaltung <br />
              <span className="text-stone-400 italic">mit höchstem Anspruch.</span>
            </h2>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-light">
              Ob private Wohnräume oder anspruchsvolle Gewerbeprojekte – wir kuratieren
              Materialien, die Architektur und Interior verbinden. Unsere Experten begleiten
              Sie von der ersten Skizze bis zur finalen Ausführung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-stone-100/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/5] mb-6">
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors duration-500 z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-12 h-12 bg-white flex items-center justify-center text-stone-900 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-3xl text-stone-900 mb-3 group-hover:text-warm-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-500 leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Banner */}
      <section className="py-32 relative overflow-hidden bg-stone-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/gallery-modern-kitchen.jpg"
            alt="Background"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-5xl md:text-6xl mb-6">
                Ihr Projekt <br />
                <span className="text-stone-400 italic">in guten Händen.</span>
              </h2>
              <p className="text-xl text-stone-300 font-light max-w-lg mb-8">
                Von der Materialauswahl bis zur logistischen Koordination – wir sorgen für
                einen reibungslosen Ablauf und Ergebnisse, die begeistern.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 text-stone-300">
                <div>
                  <div className="font-display text-4xl text-white mb-2">40+</div>
                  <div className="text-xs uppercase tracking-[0.2em] opacity-60">Jahre Erfahrung</div>
                </div>
                <div>
                  <div className="font-display text-4xl text-white mb-2">1000m²</div>
                  <div className="text-xs uppercase tracking-[0.2em] opacity-60">Showroom</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-md p-8 md:p-12 border border-white/10"
            >
              <h3 className="font-display text-2xl mb-6">Unser Prozess</h3>
              <ul className="space-y-6">
                {[
                  'Erstgespräch & Bedarfsanalyse',
                  'Materialauswahl & Moodboard',
                  'Entwurfsplanung & Visualisierung',
                  'Koordination & Lieferung'
                ].map((step, i) => (
                  <li key={i} className="flex items-center gap-4 text-stone-300">
                    <span className="w-8 h-8 flex items-center justify-center border border-white/20 text-xs rounded-full">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-warm-600 mb-4 block">Portfolio</span>
              <h2 className="font-display text-4xl md:text-5xl text-stone-900">Ausgewählte Projekte</h2>
            </div>
            <Link
              to="/ausstellung"
              className="inline-flex items-center text-sm uppercase tracking-[0.2em] text-stone-900 hover:text-warm-600 transition-colors"
            >
              Alle Projekte <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {projectGallery.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-8 w-full group-hover:translate-x-2 transition-transform duration-500">
                  <p className="text-xs uppercase tracking-[0.2em] text-warm-200 mb-2">{project.category}</p>
                  <h3 className="font-display text-2xl text-white flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-500" />
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-warm-50/50">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-8">
              Starten Sie Ihr Projekt.
            </h2>
            <p className="text-lg text-stone-600 mb-10 max-w-xl mx-auto font-light">
              Vereinbaren Sie einen kostenlosen Beratungstermin in unserem Showroom und
              lassen Sie sich von unseren Experten inspirieren.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/kontakt" className="btn-primary shadow-xl shadow-warm-900/10">
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
