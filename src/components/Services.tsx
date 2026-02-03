import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { staggerContainer, staggerItem, imageRevealUp, easings } from '../utils/animations'

const services = [
  {
    title: "Persönliche Fachberatung",
    description: "Über 40 Jahre Erfahrung in einem Gespräch. Unsere spezialisierten Verkäufer nehmen sich Zeit für Ihre Wünsche und entwickeln gemeinsam mit Ihnen das perfekte Konzept für Ihr Zuhause.",
    image: "/images/services/service-beratung.png",
    align: "left"
  },
  {
    title: "3D-Badplanung",
    description: "Vorstellungskraft trifft Präzision. Unsere Experten erstellen fotorealistische 3D-Entwürfe Ihres neuen Bades. So sehen Sie genau, wie Fliesen, Licht und Sanitärkeramik in Ihrem Raum wirken, bevor die erste Fliese verlegt wird.",
    image: "/images/services/service-3d-planung.png",
    align: "right"
  },
  {
    title: "Handwerker-Netzwerk",
    description: "Die beste Fliese ist nur so gut wie ihre Verlegung. Wir vermitteln Ihnen erfahrene, zertifizierte Fliesenleger aus der Region Rhein-Main, mit denen wir seit Jahren vertrauensvoll zusammenarbeiten. Pünktlich, sauber, perfekt.",
    image: "/images/services/service-handwerker.png",
    align: "left"
  }
]

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-luxury-charcoal overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/3 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-brand-red/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easings.premium }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="text-gold-500 font-medium tracking-[0.2em] text-xs uppercase mb-4 block">
            Service Excellence
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream-100">
            Mehr als nur <span className="text-cream-300">Fliesen.</span>
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: easings.smooth }}
              className={`flex flex-col ${service.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden group">
                  {/* Gold glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gold-500/10 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: easings.smooth }}
                    className="w-full h-full"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-smooth
                                 group-hover:scale-105"
                    />
                  </motion.div>

                  {/* Decorative Frame with gold accent */}
                  <div className={`absolute top-6 ${service.align === 'left' ? 'right-6' : 'left-6'}
                                   w-full h-full border border-gold-500/20 -z-10 hidden md:block`} />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: service.align === 'left' ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: easings.smooth }}
                >
                  {/* Service number */}
                  <span className="text-gold-500/30 font-serif text-6xl block mb-4">
                    0{index + 1}
                  </span>

                  <h3 className="font-serif text-3xl md:text-4xl text-cream-100 mb-6">
                    {service.title}
                  </h3>

                  <p className="text-cream-400 text-lg font-light leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <Link
                    to="/kontakt"
                    className="inline-flex items-center gap-2 text-gold-500 uppercase tracking-widest text-xs font-bold
                               hover:gap-4 transition-all duration-300 group"
                  >
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
