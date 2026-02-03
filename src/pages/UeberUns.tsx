import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { easings } from '../utils/animations'

export const UeberUns = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <div className="bg-luxury-charcoal" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero-ueber-uns.png"
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
              Familienunternehmen seit 1980
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-cream-100 mb-4 sm:mb-6 leading-tight">
              Über uns
            </h1>
            <p className="text-xl text-cream-400 max-w-xl leading-relaxed">
              Seit über vier Jahrzehnten sind wir Ihr vertrauensvoller Partner
              für exklusive Fliesen und Baddesign im Rhein-Main-Gebiet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Geschichte Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-luxury-anthracite">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
            {/* Bild */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/showroom/geschichte.png"
                  alt="Fliesen Kny Geschichte"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border border-gold-500/20 -z-10" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
                Unsere Geschichte
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-8">
                Tradition trifft <span className="text-cream-300">Leidenschaft</span>
              </h2>
              <div className="space-y-6 text-cream-400 leading-relaxed">
                <p>
                  Fliesen Kny steht seit 1980 für exklusive Oberflächen und anspruchsvolle
                  Badkonzepte. Was als kleines Familiengeschäft begann, ist heute eine der
                  ersten Adressen für hochwertige Fliesenwelten im Rhein-Main-Gebiet.
                </p>
                <p>
                  Unser Gründer legte den Grundstein mit einer einfachen Vision: Kunden nicht
                  nur Fliesen zu verkaufen, sondern ihnen zu helfen, ihre Traumräume zu
                  verwirklichen. Diese Philosophie leben wir bis heute.
                </p>
                <p>
                  Als Familienunternehmen in zweiter Generation verbinden wir traditionelles
                  Handwerkswissen mit modernem Design. Jeder Kunde ist für uns einzigartig,
                  jedes Projekt eine neue Herausforderung.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unser Weg - Bento Grid Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-luxury-charcoal relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/3 blur-[200px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
              Zahlen & Fakten
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-100">
              Was uns <span className="text-cream-300">ausmacht</span>
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

            {/* Large Card - 40+ Jahre */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-1 sm:col-span-2 row-span-2 relative group overflow-hidden
                         bg-gradient-to-br from-luxury-anthracite to-luxury-charcoal
                         border border-luxury-steel/20 hover:border-gold-500/30
                         transition-all duration-500 p-5 sm:p-6 md:p-8 lg:p-10"
            >
              <div className="absolute top-0 right-0 text-[12rem] md:text-[16rem] font-serif text-gold-500/5
                              leading-none -translate-y-8 translate-x-4 select-none pointer-events-none">
                40
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="text-gold-500 text-xs uppercase tracking-widest mb-2 block">
                    Seit 1980
                  </span>
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-cream-100 mb-2">
                    40<span className="text-gold-500">+</span>
                  </div>
                  <div className="text-sm text-cream-400 uppercase tracking-wider">
                    Jahre Familientradition
                  </div>
                </div>
                <p className="text-cream-500 text-sm leading-relaxed mt-6 max-w-xs">
                  Gegründet als kleines Familiengeschäft, heute eine Institution
                  für anspruchsvolles Fliesendesign.
                </p>
              </div>
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/5
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* 1.000m² Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-1 aspect-square md:aspect-auto
                         bg-luxury-anthracite border border-luxury-steel/20
                         hover:border-gold-500/30 transition-all duration-500
                         p-6 flex flex-col justify-between group"
            >
              <span className="text-gold-500/60 text-xs uppercase tracking-widest">
                Ausstellung
              </span>
              <div>
                <div className="text-3xl md:text-4xl font-serif text-cream-100 group-hover:text-gold-500 transition-colors">
                  1.000<span className="text-gold-500">m²</span>
                </div>
                <div className="text-xs text-cream-500 mt-1">
                  zum Erleben & Anfassen
                </div>
              </div>
            </motion.div>

            {/* 5.000+ Kunden Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-1 aspect-square md:aspect-auto
                         bg-luxury-anthracite border border-luxury-steel/20
                         hover:border-gold-500/30 transition-all duration-500
                         p-6 flex flex-col justify-between group"
            >
              <span className="text-gold-500/60 text-xs uppercase tracking-widest">
                Zufrieden
              </span>
              <div>
                <div className="text-3xl md:text-4xl font-serif text-cream-100 group-hover:text-gold-500 transition-colors">
                  5.000<span className="text-gold-500">+</span>
                </div>
                <div className="text-xs text-cream-500 mt-1">
                  Kunden im Rhein-Main
                </div>
              </div>
            </motion.div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="col-span-2 bg-gold-500/10 border border-gold-500/20
                         p-6 md:p-8 relative overflow-hidden"
            >
              <svg className="absolute top-4 left-4 w-8 h-8 text-gold-500/30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <div className="relative z-10 pl-6 md:pl-8">
                <p className="font-serif text-lg md:text-xl text-cream-100 italic leading-relaxed mb-4">
                  Wir verkaufen keine Fliesen — wir helfen Menschen,
                  ihre Räume zu verwirklichen.
                </p>
                <span className="text-gold-500 text-sm">— Familie Kny</span>
              </div>
            </motion.div>

            {/* 50+ Marken Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="col-span-2 bg-luxury-anthracite border border-luxury-steel/20
                         hover:border-gold-500/30 transition-all duration-500
                         p-6 md:p-8 flex items-center justify-between group"
            >
              <div>
                <div className="text-4xl md:text-5xl font-serif text-cream-100 group-hover:text-gold-500 transition-colors">
                  50<span className="text-gold-500">+</span>
                </div>
                <div className="text-sm text-cream-500 mt-1">
                  Premium Marken
                </div>
              </div>
              <div className="text-right">
                <span className="text-cream-400 text-xs block mb-1">darunter</span>
                <span className="text-cream-300 text-sm">
                  Villeroy & Boch · Marazzi · Agrob Buchtal
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Team Section - Teamfoto */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-luxury-anthracite relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gold-500/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] mb-4 block">
              Das Kny Team
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-100">
              Gemeinsam für <span className="text-cream-300">Ihre Räume</span>
            </h2>
          </motion.div>

          {/* Teamfoto Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Decorative corners */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-gold-500/40" />
            <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-gold-500/40" />
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-gold-500/40" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-gold-500/40" />

            {/* Placeholder Box */}
            <div className="aspect-[16/9] bg-luxury-charcoal border-2 border-dashed border-gold-500/30
                            flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-gold-500/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gold-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-cream-500 text-lg font-serif">Hier Teamfoto von Kny</span>
              </div>
            </div>
          </motion.div>

          {/* Kurzer Text unter dem Foto */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-cream-400 mt-8 max-w-xl mx-auto"
          >
            Unser engagiertes Team aus erfahrenen Beratern und Fliesenexperten
            freut sich darauf, Ihre Projekte zu verwirklichen.
          </motion.p>
        </div>
      </section>

      {/* Chef Section - Marlon Kny */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-luxury-charcoal relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold-500/3 blur-[200px] rounded-full pointer-events-none -translate-y-1/2" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-24 items-center"

            {/* Kreatives rundes Foto - Links */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center order-2 lg:order-1"
            >
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Äußerer Ring - animiert */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-gold-500/20"
                >
                  {/* Decorative dots auf dem äußeren Ring */}
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-gold-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-gold-500/60 rounded-full -translate-x-1/2 translate-y-1/2" />
                  <div className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-gold-500/40 rounded-full -translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute right-0 top-1/2 w-1.5 h-1.5 bg-gold-500/40 rounded-full translate-x-1/2 -translate-y-1/2" />
                </motion.div>

                {/* Zweiter Ring - gegenläufig */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-6 rounded-full border border-dashed border-gold-500/30"
                />

                {/* Glowing Ring */}
                <div className="absolute inset-10 rounded-full bg-gradient-to-br from-gold-500/10 via-transparent to-gold-500/5" />

                {/* Inner glow ring */}
                <div className="absolute inset-12 rounded-full shadow-[inset_0_0_30px_rgba(201,148,46,0.1)]" />

                {/* Foto-Container */}
                <div className="absolute inset-14 rounded-full overflow-hidden border-2 border-gold-500/50
                                shadow-[0_0_40px_rgba(201,148,46,0.15)]">
                  {/* Placeholder */}
                  <div className="w-full h-full bg-luxury-anthracite flex items-center justify-center
                                  bg-gradient-to-br from-luxury-anthracite to-luxury-charcoal">
                    <div className="text-center px-4">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full border border-gold-500/30 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gold-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="text-cream-400 text-sm font-serif leading-tight block">
                        Bild von<br/>Marlon Kny
                      </span>
                    </div>
                  </div>
                </div>

                {/* Accent elements */}
                <div className="absolute top-8 right-8 w-3 h-3 bg-brand-red/80 rounded-full" />
                <div className="absolute bottom-12 left-6 w-2 h-2 bg-gold-500/60 rounded-full" />
              </div>
            </motion.div>

            {/* Text - Rechts */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="text-gold-500 text-xs uppercase tracking-[0.3em] mb-3 block">
                Geschäftsführung
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream-100 mb-4 sm:mb-6">
                Marlon Kny
              </h3>

              <div className="w-16 h-px bg-gradient-to-r from-gold-500 to-transparent mb-8" />

              <div className="space-y-5 text-cream-400 leading-relaxed mb-10">
                <p>
                  Als Fliesenlegermeister in zweiter Generation verbinde ich
                  die handwerkliche Tradition meiner Familie mit innovativen
                  Designkonzepten und modernen Verlegetechniken.
                </p>
                <p>
                  Mein Ziel ist es, jedem Kunden nicht nur hochwertige Fliesen,
                  sondern ein Gesamtkonzept zu bieten, das seine Räume in
                  einzigartige Wohlfühloasen verwandelt.
                </p>
              </div>

              {/* Facts */}
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold-500 rounded-full" />
                  <span className="text-cream-300 text-sm">Fliesenlegermeister</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold-500 rounded-full" />
                  <span className="text-cream-300 text-sm">2. Generation</span>
                </div>
              </div>

              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 text-gold-500 uppercase tracking-widest text-xs font-bold
                           hover:gap-5 transition-all duration-300 group"
              >
                Persönlichen Termin vereinbaren
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-luxury-anthracite relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[600px] h-[600px] bg-gold-500/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
              Wir freuen uns auf Sie
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-6">
              Lernen Sie uns kennen
            </h2>
            <p className="text-cream-400 mb-10 leading-relaxed">
              Besuchen Sie unsere Ausstellung und erleben Sie unsere Fliesenwelten.
              Wir beraten Sie gerne persönlich und unverbindlich.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4
                           bg-brand-red hover:bg-brand-red-dark text-white
                           uppercase tracking-widest text-xs font-bold
                           transition-all duration-300"
              >
                Kontakt aufnehmen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ausstellung"
                className="inline-flex items-center justify-center gap-2 px-8 py-4
                           border border-cream-300/30 text-cream-100
                           hover:border-gold-500 hover:text-gold-500
                           uppercase tracking-widest text-xs font-bold
                           transition-all duration-300"
              >
                Ausstellung entdecken
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
