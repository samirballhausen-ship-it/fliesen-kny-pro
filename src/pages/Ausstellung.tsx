import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, MapPin } from 'lucide-react'

export const Ausstellung = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const collections = [
    {
      title: 'Keramik & Großformate',
      description: 'Feinsteinzeug, Steinoptik, Betonoptik und XXL-Formate für zeitlose architektonische Flächen. Wir zeigen Ihnen, wie Großformate Räume optisch weiten.',
      image: '/images/service-showroom.jpg',
      features: ['Großformate bis 300cm', 'Fugenloses Design', 'Indoor & Outdoor', 'Rutschhemmung R10/R11']
    },
    {
      title: 'Naturstein & Manufaktur',
      description: 'Jeder Stein ein Unikat: Marmor, Travertin und Schiefer, sorgfältig ausgewählt für exklusive Projekte mit Charakter und Patina.',
      image: '/images/gallery-outdoor-terrace.jpg',
      features: ['Italienischer Marmor', 'Solnhofener Platten', 'Maßanfertigungen', 'Fachgerechte Verlegung']
    },
    {
      title: 'Mosaik & Design',
      description: 'Detailverliebte Akzente für Nischen, Duschen oder als Statement-Wand. Entdecken Sie Glas-, Naturstein- und Metallmosaike.',
      image: '/images/service-mosaic-art.jpg',
      features: ['Glasmosaik', 'Metallische Akzente', 'Organische Formen', 'Sonderanfertigungen']
    },
    {
      title: 'Sanitär & Ausstattung',
      description: 'Design-Armaturen, Waschtische und Badmöbel, die Funktion und Ästhetik vereinen. Wir planen Ihr Bad als Gesamtkunstwerk.',
      image: '/images/hero-luxury-bathroom.jpg',
      features: ['Dornbracht & Vola', 'Freistehende Wannen', 'Maßmöbel', 'Lichtkonzepte']
    }
  ]

  const galleryImages = [
    { src: '/images/gallery-luxury-bathroom.jpg', alt: 'Luxusbad Ausstellung' },
    { src: '/images/gallery-modern-kitchen.jpg', alt: 'Kücheninsel' },
    { src: '/images/gallery-outdoor-terrace.jpg', alt: 'Terrassenplatten' },
    { src: '/images/service-tile-installation.jpg', alt: 'Verlegearbeiten' },
    { src: '/images/service-showroom.jpg', alt: 'Showroom Übersicht' },
    { src: '/images/about-team.jpg', alt: 'Beratungstermin' }
  ]

  return (
    <div className="bg-stone-50" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img
            src="/images/service-showroom.jpg"
            alt="Fliesen KNY Showroom"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-stone-900/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 container-custom pt-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-6 px-4 py-1 border border-white/30 backdrop-blur-md bg-white/10 text-white text-xs uppercase tracking-[0.3em]"
            >
              Showroom Mörfelden
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl text-white mb-8 leading-tight"
            >
              Inspiration auf <br className="hidden md:block" />
              <span className="text-stone-300 italic">über 1000 m².</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-stone-200 max-w-2xl leading-relaxed font-light"
            >
              Erleben Sie Materialien, Farben und Texturen in einer der größten
              Fliesen- und Sanitär-Ausstellungen im Rhein-Main-Gebiet.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-8 leading-tight">
                Räume erleben, <br />
                <span className="text-stone-400 italic">Materialien fühlen.</span>
              </h2>
              <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed">
                <p>
                  Unsere Ausstellung ist mehr als nur eine Präsentation von Produkten.
                  Sie ist ein kuratiertes Interior-Atelier, konzipiert, um Ihnen ein
                  Gefühl für Raumwirkung und Materialität zu vermitteln.
                </p>
                <p>
                  In verschiedenen Kojen und Anwendungsbeispielen zeigen wir Ihnen das
                  Zusammenspiel von Licht, Fuge und Oberfläche.
                </p>
              </div>
              <div className="mt-10">
                <Link to="/kontakt" className="btn-primary">
                  Beratungstermin vereinbaren
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative z-10 ml-12">
                <img
                  src="/images/gallery-modern-kitchen.jpg"
                  alt="Materialinszenierung"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-12 -left-12 w-2/3 aspect-square bg-stone-300 overflow-hidden border-8 border-stone-50 z-20 shadow-xl shadow-stone-200/50">
                <img
                  src="/images/service-tile-installation.jpg"
                  alt="Detailansicht"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections List */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
        <div className="container-custom">
          <div className="space-y-32">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center group"
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} relative`}>
                  <div className="aspect-[3/2] overflow-hidden bg-stone-100 relative z-10">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500" />
                  </div>
                  {/* Decorative element */}
                  <div className={`absolute -bottom-6 -right-6 w-full h-full border border-stone-200 z-0 hidden lg:block transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2 ${index % 2 === 1 ? 'left-6 items-end' : ''}`} />
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="text-xs uppercase tracking-[0.2em] text-warm-600 mb-4 block">
                    Kollektion 0{index + 1}
                  </span>
                  <h3 className="font-display text-4xl md:text-5xl text-stone-900 mb-6 group-hover:text-stone-700 transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed mb-8 text-lg font-light">
                    {collection.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                    {collection.features.map((feature) => (
                      <li key={feature} className="flex items-center text-stone-500 font-medium text-sm">
                        <Check size={16} className="text-warm-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-stone-900 text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl md:text-5xl mb-6">Impressionen</h2>
              <p className="text-stone-400 font-light text-lg">
                Ein kleiner Einblick in unsere Ausstellungswelt. Wir laden Sie herzlich ein,
                die Atmosphäre persönlich zu erleben.
              </p>
            </div>
            <div className="hidden md:block">
              <span className="text-xs uppercase tracking-[0.2em] text-warm-500 flex items-center gap-2">
                <MapPin size={16} /> Mörfelden-Walldorf
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-[4/3] overflow-hidden bg-stone-800"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="section-padding bg-warm-50">
        <div className="container-narrow text-center">
          <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-8">
            Besuchen Sie uns.
          </h2>
          <p className="text-lg text-stone-600 mb-10 max-w-xl mx-auto font-light">
            Wir nehmen uns Zeit für Sie. Vereinbaren Sie vorab einen Termin für eine
            ausführliche Beratung oder kommen Sie spontan zur Inspiration vorbei.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/kontakt" className="btn-primary">
              Termin vereinbaren
            </Link>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              Anfahrt planen
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
