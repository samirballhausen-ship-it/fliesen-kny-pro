import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Clock, Phone, X, ChevronLeft, ChevronRight } from 'lucide-react'

export const Ausstellung = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const highlights = [
    {
      title: 'Fliesentraeume',
      subtitle: 'Keramik & Feinsteinzeug',
      description:
        'Entdecken Sie unsere umfangreiche Kollektion an Fliesen in allen Formaten, Farben und Oberflaechen. Von klassisch elegant bis modern minimalistisch.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    },
    {
      title: 'Sanitaerwelten',
      subtitle: 'Design & Funktion',
      description:
        'Hochwertige Badausstattung, Design-Armaturen und funktionale Loesungen fuer Ihr Traumbad. Erleben Sie Markenqualitaet zum Anfassen.',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    },
    {
      title: 'Naturstein-Galerie',
      subtitle: 'Einzigartige Materialien',
      description:
        'Jeder Stein erzaehlt eine Geschichte. Entdecken Sie Marmor, Granit, Schiefer und Travertin in unserer exklusiven Naturstein-Ausstellung.',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    },
    {
      title: 'Live-Musterbaeder',
      subtitle: 'Raeume erleben',
      description:
        'Betreten Sie komplett eingerichtete Musterbaeder und erleben Sie, wie verschiedene Materialien und Stile in echten Raeumen wirken.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    },
  ]

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', alt: 'Luxurioeses Badezimmer' },
    { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', alt: 'Moderne Fliesen Showroom' },
    { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80', alt: 'Naturstein Detail' },
    { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80', alt: 'Showroom Uebersicht' },
    { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80', alt: 'Designer Bad' },
    { src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80', alt: 'Mosaik Detail' },
    { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Wohnraum mit Fliesen' },
    { src: 'https://images.unsplash.com/photo-1600573472591-ee6981cf35b6?w=800&q=80', alt: 'Premium Materialien' },
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
    <div className="bg-white" ref={containerRef}>
      {/* ========== HERO SECTION (80vh) ========== */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="FliesenKny Showroom - 1000m2 Ausstellung"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-text/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-text/60 via-transparent to-neutral-text/20" />
        </motion.div>

        <div className="relative z-10 container-custom pt-20">
          <div className="max-w-4xl">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="px-5 py-2.5 border border-white/30 text-white text-xs uppercase tracking-[0.2em] font-medium">
                Showroom Moerfelden-Walldorf
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-5xl md:text-6xl lg:text-hero text-white mb-6"
            >
              1000m<sup className="text-3xl md:text-4xl">2</sup> Inspiration
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-2xl md:text-3xl text-white/85 italic mb-8"
            >
              Raeume erleben, Materialien fuehlen.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-lg md:text-xl text-white/70 max-w-2xl mb-10"
            >
              Eine der groessten Fliesen- und Sanitaer-Ausstellungen im Rhein-Main-Gebiet.
              Lassen Sie sich inspirieren.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/kontakt" className="btn-primary">
                Besuch planen
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/50 text-xs uppercase tracking-widest">Entdecken</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* ========== INTRO SECTION ========== */}
      <section className="section-padding bg-neutral-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="accent-line mb-8" />
              <h2 className="font-display text-h1 md:text-5xl text-neutral-text mb-8">
                Willkommen in unserer
                <br />
                <span className="text-neutral-muted italic">Welt der Inspiration.</span>
              </h2>
              <div className="space-y-5 text-body-lg text-neutral-muted leading-relaxed">
                <p>
                  Unsere Ausstellung ist mehr als nur ein Showroom - sie ist ein Erlebnis fuer alle Sinne.
                  Auf ueber 1000 Quadratmetern praesentieren wir Ihnen die neuesten Trends und zeitlose
                  Klassiker der Fliesen- und Sanitaerwelt.
                </p>
                <p>
                  Hier koennen Sie Materialien anfassen, Farben vergleichen und sich von
                  komplett eingerichteten Raeumen inspirieren lassen. Unsere Fachberater stehen
                  Ihnen dabei jederzeit zur Seite.
                </p>
              </div>

              {/* Key Facts */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-neutral-divider">
                <div>
                  <span className="block font-display text-3xl md:text-4xl text-primary mb-1">1000+</span>
                  <span className="text-sm text-neutral-muted">Quadratmeter</span>
                </div>
                <div>
                  <span className="block font-display text-3xl md:text-4xl text-primary mb-1">50+</span>
                  <span className="text-sm text-neutral-muted">Marken</span>
                </div>
                <div>
                  <span className="block font-display text-3xl md:text-4xl text-primary mb-1">30+</span>
                  <span className="text-sm text-neutral-muted">Jahre Erfahrung</span>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80"
                  alt="FliesenKny Ausstellung Innenansicht"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary/20 rounded-sm -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== HIGHLIGHTS SECTION ========== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-22"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-xs uppercase tracking-[0.15em] font-medium mb-6 rounded-sm">
              Ausstellungs-Highlights
            </span>
            <h2 className="font-display text-h1 md:text-5xl text-neutral-text mb-6">
              Was Sie erwartet
            </h2>
            <p className="text-body-lg text-neutral-muted max-w-2xl mx-auto">
              Entdecken Sie vier einzigartige Erlebniswelten unter einem Dach.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="space-y-16 lg:space-y-24">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-sm">
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/10" />
                    {/* Number Badge */}
                    <div className="absolute top-6 left-6 w-12 h-12 bg-white flex items-center justify-center rounded-sm shadow-medium">
                      <span className="font-display text-xl text-primary font-semibold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="text-xs uppercase tracking-[0.15em] text-primary mb-3 block font-medium">
                    {highlight.subtitle}
                  </span>
                  <h3 className="font-display text-h2 md:text-h1 text-neutral-text mb-5">
                    {highlight.title}
                  </h3>
                  <p className="text-body-lg text-neutral-muted leading-relaxed mb-6">
                    {highlight.description}
                  </p>
                  <div className="h-px bg-neutral-divider" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GALLERY SECTION ========== */}
      <section className="section-padding bg-neutral-text">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div>
              <span className="inline-block text-primary text-xs uppercase tracking-[0.15em] font-medium mb-4">
                Impressionen
              </span>
              <h2 className="font-display text-h1 md:text-5xl text-white mb-4">
                Einblicke in unsere Welt
              </h2>
              <p className="text-white/60 max-w-md">
                Lassen Sie sich von unseren Ausstellungsraeumen inspirieren.
                Ein Besuch vor Ort lohnt sich.
              </p>
            </div>
            <div className="flex items-center gap-2 text-white/50">
              <MapPin size={18} className="text-primary" />
              <span className="text-sm">Moerfelden-Walldorf</span>
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
                className={`group relative overflow-hidden rounded-sm cursor-pointer ${
                  index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`${index === 0 || index === 5 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-all duration-700 ease-smooth opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  />
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/20 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center transition-all duration-300 transform scale-0 group-hover:scale-100">
                    <svg className="w-5 h-5 text-neutral-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== VISIT CTA SECTION ========== */}
      <section className="section-padding bg-neutral-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: CTA Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="accent-line mb-8" />
              <h2 className="font-display text-h1 md:text-5xl text-neutral-text mb-6">
                Besuchen Sie uns.
              </h2>
              <p className="text-body-lg text-neutral-muted mb-10 max-w-lg">
                Erleben Sie unsere Ausstellung persoenlich. Vereinbaren Sie einen Beratungstermin
                oder kommen Sie spontan vorbei - wir freuen uns auf Sie.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/kontakt" className="btn-primary">
                  Termin vereinbaren
                </Link>
                <a
                  href="https://maps.google.com/?q=Benzstra%C3%9Fe+3,+64546+M%C3%B6rfelden-Walldorf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  <MapPin size={18} className="mr-2" />
                  Anfahrt planen
                </a>
              </div>
            </motion.div>

            {/* Right: Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg p-8 lg:p-10 shadow-soft"
            >
              {/* Address */}
              <div className="flex gap-4 mb-8 pb-8 border-b border-neutral-divider">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-neutral-text mb-1">Adresse</h4>
                  <p className="text-neutral-muted">
                    Benzstrasse 3<br />
                    64546 Moerfelden-Walldorf
                  </p>
                  <a
                    href="https://maps.google.com/?q=Benzstra%C3%9Fe+3,+64546+M%C3%B6rfelden-Walldorf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-2 hover:text-primary-dark transition-colors"
                  >
                    Auf Google Maps anzeigen
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex gap-4 mb-8 pb-8 border-b border-neutral-divider">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center shrink-0">
                  <Clock size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-neutral-text mb-2">Oeffnungszeiten</h4>
                  <div className="space-y-1 text-neutral-muted text-sm">
                    <div className="flex justify-between gap-8">
                      <span>Montag - Freitag</span>
                      <span className="font-medium text-neutral-text">08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Samstag</span>
                      <span className="font-medium text-neutral-text">09:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sonntag</span>
                      <span className="text-neutral-light">Geschlossen</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center shrink-0">
                  <Phone size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-neutral-text mb-1">Telefon</h4>
                  <a
                    href="tel:+496105921920"
                    className="text-xl font-display text-primary hover:text-primary-dark transition-colors"
                  >
                    06105 / 92 19 20
                  </a>
                  <p className="text-neutral-muted text-sm mt-1">
                    Wir beraten Sie gerne persoenlich.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== LIGHTBOX ========== */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-neutral-text/95 flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={28} className="text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight size={28} className="text-white" />
            </button>

            {/* Image */}
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[currentImageIndex].src.replace('w=800', 'w=1400')}
              alt={galleryImages[currentImageIndex].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
            />

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
