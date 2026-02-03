import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Clock, Phone, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { easings } from '../utils/animations'

export const Ausstellung = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Highlights Tab State
  const [activeHighlight, setActiveHighlight] = useState(0)

  const highlights = [
    {
      title: 'Fliesenträume',
      subtitle: 'Keramik & Feinsteinzeug',
      description:
        'Entdecken Sie unsere umfangreiche Kollektion an Fliesen in allen Formaten, Farben und Oberflächen. Von klassisch elegant bis modern minimalistisch.',
      image: '/images/highlights/highlight-fliesen.png',
    },
    {
      title: 'Sanitärwelten',
      subtitle: 'Design & Funktion',
      description:
        'Hochwertige Badausstattung, Design-Armaturen und funktionale Lösungen für Ihr Traumbad. Erleben Sie Markenqualität zum Anfassen.',
      image: '/images/highlights/highlight-sanitaer.png',
    },
    {
      title: 'Naturstein-Galerie',
      subtitle: 'Einzigartige Materialien',
      description:
        'Jeder Stein erzählt eine Geschichte. Entdecken Sie Marmor, Granit, Schiefer und Travertin in unserer exklusiven Naturstein-Ausstellung.',
      image: '/images/highlights/highlight-naturstein.png',
    },
    {
      title: 'Live-Musterbäder',
      subtitle: 'Räume erleben',
      description:
        'Betreten Sie komplett eingerichtete Musterbäder und erleben Sie, wie verschiedene Materialien und Stile in echten Räumen wirken.',
      image: '/images/highlights/highlight-musterbaeder.png',
    },
  ]

  const galleryImages = [
    { src: '/images/galerie/galerie-01.png', alt: 'Luxuriöses Badezimmer' },
    { src: '/images/galerie/galerie-02.png', alt: 'Moderne Fliesen Showroom' },
    { src: '/images/galerie/galerie-03.png', alt: 'Naturstein Detail' },
    { src: '/images/galerie/galerie-04.png', alt: 'Showroom Übersicht' },
    { src: '/images/galerie/galerie-05.png', alt: 'Designer Bad' },
    { src: '/images/galerie/galerie-06.png', alt: 'Mosaik Detail' },
    { src: '/images/galerie/galerie-07.png', alt: 'Wohnraum mit Fliesen' },
    { src: '/images/galerie/galerie-08.png', alt: 'Premium Materialien' },
  ]

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="bg-luxury-charcoal" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero-ausstellung.png"
            alt="Fliesen Kny Showroom"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-charcoal/60 via-luxury-charcoal/40 to-luxury-charcoal" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easings.premium }}
            className="max-w-3xl"
          >
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] mb-6 block">
              Showroom Mörfelden-Walldorf
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-cream-100 mb-4 sm:mb-6 leading-tight">
              1.000m² Inspiration
            </h1>
            <p className="text-xl text-cream-400 max-w-xl leading-relaxed mb-10">
              Räume erleben, Materialien fühlen. Eine der größten Fliesen- und
              Sanitär-Ausstellungen im Rhein-Main-Gebiet.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4
                         bg-brand-red hover:bg-brand-red-dark text-white
                         uppercase tracking-widest text-xs font-bold
                         transition-all duration-300"
            >
              Besuch planen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-cream-500 text-xs uppercase tracking-widest">Entdecken</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-px h-8 bg-gradient-to-b from-gold-500/60 to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-luxury-anthracite">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-24 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
                Willkommen
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-8">
                Welt der <span className="text-cream-300">Inspiration</span>
              </h2>
              <div className="space-y-6 text-cream-400 leading-relaxed">
                <p>
                  Unsere Ausstellung ist mehr als nur ein Showroom - sie ist ein Erlebnis für alle Sinne.
                  Auf über 1.000 Quadratmetern präsentieren wir Ihnen die neuesten Trends und zeitlose
                  Klassiker der Fliesen- und Sanitärwelt.
                </p>
                <p>
                  Hier können Sie Materialien anfassen, Farben vergleichen und sich von
                  komplett eingerichteten Räumen inspirieren lassen. Unsere Fachberater stehen
                  Ihnen dabei jederzeit zur Seite.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gold-500/10">
                {[
                  { number: '1.000+', label: 'Quadratmeter' },
                  { number: '50+', label: 'Marken' },
                  { number: '40+', label: 'Jahre Erfahrung' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="block font-serif text-2xl md:text-3xl text-gold-500 mb-1">{stat.number}</span>
                    <span className="text-xs text-cream-500 uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/galerie/galerie-01.png"
                  alt="Fliesen Kny Ausstellung"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border border-gold-500/20 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section - Interactive Tabs */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-luxury-charcoal">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
              Ausstellungs-Highlights
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-8">
              Was Sie <span className="text-cream-300">erwartet</span>
            </h2>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3">
              {highlights.map((highlight, index) => (
                <button
                  key={highlight.title}
                  onClick={() => setActiveHighlight(index)}
                  className={`px-4 md:px-6 py-3 text-xs uppercase tracking-widest
                              transition-all duration-300 border
                              ${activeHighlight === index
                                ? 'bg-gold-500 text-luxury-charcoal border-gold-500 font-bold'
                                : 'border-cream-300/20 text-cream-400 hover:border-gold-500/50 hover:text-cream-100'
                              }`}
                >
                  {highlight.title}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Active Highlight Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeHighlight}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: easings.premium }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Image */}
              <div className="relative group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    key={highlights[activeHighlight].image}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    src={highlights[activeHighlight].image}
                    alt={highlights[activeHighlight].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative corner */}
                <div className="absolute -bottom-4 -right-4 w-1/2 h-1/2 border border-gold-500/20 -z-10" />
                {/* Number badge */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-gold-500 flex items-center justify-center">
                  <span className="font-serif text-2xl text-luxury-charcoal">
                    0{activeHighlight + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:pl-8">
                <span className="text-gold-500 text-xs uppercase tracking-widest block mb-4">
                  {highlights[activeHighlight].subtitle}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-cream-100 mb-6">
                  {highlights[activeHighlight].title}
                </h3>
                <p className="text-cream-400 text-lg leading-relaxed mb-8">
                  {highlights[activeHighlight].description}
                </p>

                {/* Progress dots */}
                <div className="flex gap-2 mb-8">
                  {highlights.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveHighlight(index)}
                      className={`h-1 transition-all duration-300 ${
                        index === activeHighlight
                          ? 'w-8 bg-gold-500'
                          : 'w-4 bg-cream-500/30 hover:bg-cream-500/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation arrows */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setActiveHighlight((prev) => (prev - 1 + highlights.length) % highlights.length)}
                    className="w-12 h-12 border border-cream-300/30 text-cream-300
                               hover:border-gold-500 hover:text-gold-500
                               flex items-center justify-center transition-all duration-300"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => setActiveHighlight((prev) => (prev + 1) % highlights.length)}
                    className="w-12 h-12 border border-cream-300/30 text-cream-300
                               hover:border-gold-500 hover:text-gold-500
                               flex items-center justify-center transition-all duration-300"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-luxury-anthracite">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div>
              <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
                Impressionen
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-4">
                Einblicke in unsere Welt
              </h2>
              <p className="text-cream-500 max-w-md">
                Lassen Sie sich von unseren Ausstellungsräumen inspirieren.
              </p>
            </div>
            <div className="flex items-center gap-2 text-cream-500">
              <MapPin size={18} className="text-gold-500" />
              <span className="text-sm">Mörfelden-Walldorf</span>
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden cursor-pointer ${
                  index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`${index === 0 || index === 5 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-all duration-700 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                  />
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gold-500/0 transition-colors duration-300 group-hover:bg-gold-500/10 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gold-500/0 group-hover:bg-gold-500 flex items-center justify-center transition-all duration-300 transform scale-0 group-hover:scale-100">
                    <svg className="w-5 h-5 text-luxury-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-luxury-charcoal">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-24">
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
                Besuchen Sie uns
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-6">
                Erleben Sie unsere Ausstellung
              </h2>
              <p className="text-cream-400 mb-10 leading-relaxed">
                Vereinbaren Sie einen Beratungstermin oder kommen Sie spontan vorbei.
                Wir freuen uns auf Sie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4
                             bg-brand-red hover:bg-brand-red-dark text-white
                             uppercase tracking-widest text-xs font-bold
                             transition-all duration-300"
                >
                  Termin vereinbaren
                </Link>
                <a
                  href="https://maps.google.com/?q=Benzstraße+3,+64546+Mörfelden-Walldorf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4
                             border border-cream-300/30 text-cream-100
                             hover:border-gold-500 hover:text-gold-500
                             uppercase tracking-widest text-xs font-bold
                             transition-all duration-300"
                >
                  <MapPin size={16} />
                  Anfahrt planen
                </a>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-luxury-anthracite p-8 md:p-10 border border-luxury-steel/30"
            >
              {/* Address */}
              <div className="flex gap-4 mb-8 pb-8 border-b border-luxury-steel/30">
                <div className="w-12 h-12 bg-gold-500/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-gold-500" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-cream-100 mb-2">Adresse</h4>
                  <p className="text-cream-400">
                    Benzstraße 3<br />
                    64546 Mörfelden-Walldorf
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 mb-8 pb-8 border-b border-luxury-steel/30">
                <div className="w-12 h-12 bg-gold-500/10 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-gold-500" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-cream-100 mb-2">Öffnungszeiten</h4>
                  <div className="space-y-1 text-cream-400 text-sm">
                    <div className="flex justify-between gap-8">
                      <span>Montag - Freitag</span>
                      <span className="text-cream-200">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Samstag</span>
                      <span className="text-cream-200">09:00 - 12:30</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gold-500/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-gold-500" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-cream-100 mb-2">Telefon</h4>
                  <a
                    href="tel:0610533067"
                    className="text-xl font-serif text-gold-500 hover:text-gold-400 transition-colors"
                  >
                    06105 - 330 67
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-luxury-charcoal/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-luxury-smoke/50 hover:bg-brand-red/20 border border-luxury-steel/50 rounded-full flex items-center justify-center transition-colors"
            >
              <X size={20} className="text-cream-100" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 w-12 h-12 bg-luxury-smoke/50 hover:bg-gold-500/20 border border-luxury-steel/50 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={24} className="text-cream-100" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 w-12 h-12 bg-luxury-smoke/50 hover:bg-gold-500/20 border border-luxury-steel/50 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight size={24} className="text-cream-100" />
            </button>

            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[85vh] object-contain"
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-luxury-smoke/60 backdrop-blur-sm border border-luxury-steel/30 rounded-full">
              <span className="text-gold-500 font-medium">{currentImageIndex + 1}</span>
              <span className="text-cream-400 mx-2">/</span>
              <span className="text-cream-400">{galleryImages.length}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
