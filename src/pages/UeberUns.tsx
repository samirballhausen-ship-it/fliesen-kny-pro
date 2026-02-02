import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Users, Heart, ShieldCheck, Clock, MapPin, Star, Sparkles } from 'lucide-react'

export const UeberUns = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const values = [
    {
      title: 'Exzellenz',
      description: 'Jedes Material wird nach Haptik, Langlebigkeit und Designanspruch ausgewaehlt.',
      icon: Award,
    },
    {
      title: 'Partnerschaft',
      description: 'Wir arbeiten eng mit Architekten, Planern und Handwerkern zusammen.',
      icon: Users,
    },
    {
      title: 'Vertrauen',
      description: 'Verlaessliche Beratung und transparente Ablaeufe seit vier Jahrzehnten.',
      icon: ShieldCheck,
    },
    {
      title: 'Leidenschaft',
      description: 'Wir schaffen Raeume mit Charakter und begleiten Projekte mit Herz.',
      icon: Heart,
    },
  ]

  const stats = [
    {
      number: '40+',
      label: 'Jahre Erfahrung',
      icon: Clock,
    },
    {
      number: '1000m²',
      label: 'Ausstellungsflaeche',
      icon: MapPin,
    },
    {
      number: '5000+',
      label: 'Zufriedene Kunden',
      icon: Star,
    },
    {
      number: '50+',
      label: 'Premium Marken',
      icon: Sparkles,
    },
  ]

  return (
    <div className="bg-white" ref={containerRef}>
      {/* Hero Section - 60vh */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Team von Fliesen Kny"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-text/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 container-custom pt-16">
          <div className="max-w-3xl text-center mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 px-5 py-2 border border-white/30 rounded-sm text-white text-xs uppercase tracking-[0.2em]"
            >
              Familienunternehmen
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-hero text-white mb-6"
            >
              Ueber uns
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 font-display italic"
            >
              Der Geheimtipp seit ueber 40 Jahren
            </motion.p>
          </div>
        </div>
      </section>

      {/* Geschichte Section */}
      <section className="section-padding bg-neutral-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="mb-6">
                <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
                  Unsere Geschichte
                </span>
              </div>
              <h2 className="font-display text-h1 md:text-5xl text-neutral-text mb-8">
                Tradition trifft <span className="italic text-primary">Leidenschaft</span>
              </h2>
              <div className="space-y-5 text-body-lg text-neutral-muted leading-relaxed">
                <p>
                  Fliesen Kny steht seit 1982 fuer exklusive Oberflaechen und anspruchsvolle
                  Badkonzepte. Was als kleines Familiengeschaeft begann, ist heute eine der
                  ersten Adressen fuer hochwertige Fliesenwelten im Rhein-Main-Gebiet.
                </p>
                <p>
                  Unser Gruender legte den Grundstein mit einer einfachen Vision: Kunden nicht
                  nur Fliesen zu verkaufen, sondern ihnen zu helfen, ihre Traumraeume zu
                  verwirklichen. Diese Philosophie leben wir bis heute.
                </p>
                <p>
                  Als Familienunternehmen in zweiter Generation verbinden wir traditionelles
                  Handwerkswissen mit modernem Design. Jeder Kunde ist fuer uns einzigartig,
                  jedes Projekt eine neue Herausforderung.
                </p>
              </div>
            </motion.div>

            {/* Bild */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Fliesen Kny Geschichte"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Werte Section */}
      <section className="section-padding bg-neutral-text text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium mb-4 block">
                Was uns ausmacht
              </span>
              <h2 className="font-display text-h1 md:text-5xl mb-4">
                Unsere <span className="italic">Werte</span>
              </h2>
              <p className="text-white/60 max-w-xl mx-auto text-body-lg">
                Diese Grundsaetze leiten uns bei jedem Projekt und jeder Beratung.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center p-8 border border-white/10 rounded-lg hover:border-primary/50 transition-all duration-300 hover:bg-white/5"
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary/40 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <value.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl mb-3">{value.title}</h3>
                <p className="text-white/60 leading-relaxed text-body-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Erfahrung Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Bild */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
                  alt="Beratung bei Fliesen Kny"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
                  Unser Team
                </span>
              </div>
              <h2 className="font-display text-h1 md:text-5xl text-neutral-text mb-6">
                Kompetente <span className="italic text-primary">Beratung</span>
              </h2>
              <div className="space-y-4 text-body-lg text-neutral-muted leading-relaxed mb-10">
                <p>
                  Unsere Berater kombinieren handwerkliche Expertise mit einem feinen Gespuer
                  fuer Material und Raumwirkung. Wir nehmen uns Zeit fuer Sie.
                </p>
                <p>
                  Von der ersten Idee bis zur finalen Verlegung begleiten wir Ihr Projekt
                  und koordinieren alle Schnittstellen mit Ihren Fachbetrieben.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-5 bg-neutral-cream rounded-lg border border-neutral-divider"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <stat.icon size={20} className="text-primary" strokeWidth={1.5} />
                      <span className="font-display text-3xl text-neutral-text">{stat.number}</span>
                    </div>
                    <p className="text-xs uppercase tracking-[0.15em] text-neutral-muted">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-warm to-neutral-cream">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium mb-4 block">
              Wir freuen uns auf Sie
            </span>
            <h2 className="font-display text-h1 md:text-5xl text-neutral-text mb-6">
              Lernen Sie uns <span className="italic">kennen</span>
            </h2>
            <p className="text-body-lg text-neutral-muted mb-10 max-w-xl mx-auto">
              Besuchen Sie unsere Ausstellung und erleben Sie unsere Fliesenwelten.
              Wir beraten Sie gerne persoenlich und unverbindlich.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/kontakt" className="btn-primary">
                Kontakt aufnehmen
              </Link>
              <Link to="/ausstellung" className="btn-outline">
                Ausstellung entdecken
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
