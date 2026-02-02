import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'

export const Kontakt = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    nachricht: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', telefon: '', nachricht: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="bg-stone-50" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img
            src="/images/hero-luxury-bathroom.jpg"
            alt="Fliesen KNY Beratung"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply" />
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
              Kontakt
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl text-white mb-6 leading-tight"
            >
              Wir freuen uns <br />
              <span className="text-stone-300 italic">auf Ihr Projekt.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-stone-200 max-w-2xl leading-relaxed font-light"
            >
              Von der ersten Idee bis zur finalen Umsetzung. Vereinbaren Sie einen Termin
              oder senden Sie uns Ihre Anfrage.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl text-stone-900 mb-10">
                Kontakt & Anfahrt
              </h2>

              <div className="space-y-10">
                <div className="flex items-start bg-white p-6 border border-stone-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-stone-200">
                  <MapPin className="w-6 h-6 text-warm-600 mt-1 shrink-0" />
                  <div className="ml-6">
                    <h3 className="font-display text-xl text-stone-900 mb-2">Showroom</h3>
                    <p className="text-stone-600 font-light leading-relaxed">
                      Fliesen KNY oHG<br />
                      Benzstraße 3<br />
                      64546 Mörfelden-Walldorf
                    </p>
                    <a
                      href="https://maps.google.com/?q=Benzstraße+3,+64546+Mörfelden-Walldorf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 text-xs uppercase tracking-[0.2em] text-stone-900 hover:text-warm-600 transition-colors"
                    >
                      Route planen <ArrowRight size={14} className="ml-2" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 border border-stone-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-stone-200">
                  <Phone className="w-6 h-6 text-warm-600 mt-1 shrink-0" />
                  <div className="ml-6">
                    <h3 className="font-display text-xl text-stone-900 mb-2">Telefon</h3>
                    <p className="text-stone-600 font-light mb-2">
                      Rufen Sie uns an für Terminvereinbarungen oder kurze Rückfragen.
                    </p>
                    <a
                      href="tel:0610533067"
                      className="text-lg text-stone-900 hover:text-warm-600 transition-colors font-medium"
                    >
                      06105 – 330 67
                    </a>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 border border-stone-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-stone-200">
                  <Mail className="w-6 h-6 text-warm-600 mt-1 shrink-0" />
                  <div className="ml-6">
                    <h3 className="font-display text-xl text-stone-900 mb-2">E-Mail</h3>
                    <p className="text-stone-600 font-light mb-2">
                      Senden Sie uns Pläne oder Anfragen jederzeit per Mail.
                    </p>
                    <a
                      href="mailto:info@fliesen-kny.de"
                      className="text-lg text-stone-900 hover:text-warm-600 transition-colors font-medium"
                    >
                      info@fliesen-kny.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 border border-stone-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-stone-200">
                  <Clock className="w-6 h-6 text-warm-600 mt-1 shrink-0" />
                  <div className="ml-6">
                    <h3 className="font-display text-xl text-stone-900 mb-2">Öffnungszeiten</h3>
                    <div className="text-stone-600 font-light space-y-1">
                      <p><span className="w-24 inline-block font-medium text-stone-900">Mo – Fr</span> 9:00 – 12:30 & 14:00 – 18:00</p>
                      <p><span className="w-24 inline-block font-medium text-stone-900">Sa</span> 9:00 – 12:30</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 lg:p-12 border border-stone-100 shadow-xl shadow-stone-200/50">
                <h2 className="font-display text-3xl text-stone-900 mb-2">
                  Nachricht senden
                </h2>
                <p className="text-stone-500 font-light mb-8">
                  Erzählen Sie uns von Ihrem Vorhaben.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-warm-50 text-warm-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ArrowRight className="w-8 h-8 rotate-[-45deg]" />
                    </div>
                    <h3 className="font-display text-2xl text-stone-900 mb-2">
                      Vielen Dank!
                    </h3>
                    <p className="text-stone-600 font-light">
                      Wir haben Ihre Nachricht erhalten und melden uns in Kürze bei Ihnen.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-wider text-stone-500 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-3 bg-transparent border-b border-stone-300 focus:border-stone-900 focus:outline-none transition-colors placeholder-stone-300 text-stone-900"
                        placeholder="Ihr Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider text-stone-500 mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-3 bg-transparent border-b border-stone-300 focus:border-stone-900 focus:outline-none transition-colors placeholder-stone-300 text-stone-900"
                        placeholder="ihre.email@beispiel.de"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefon" className="block text-xs uppercase tracking-wider text-stone-500 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="telefon"
                        name="telefon"
                        value={formData.telefon}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-b border-stone-300 focus:border-stone-900 focus:outline-none transition-colors placeholder-stone-300 text-stone-900"
                        placeholder="Für Rückfragen"
                      />
                    </div>

                    <div>
                      <label htmlFor="nachricht" className="block text-xs uppercase tracking-wider text-stone-500 mb-2">
                        Nachricht *
                      </label>
                      <textarea
                        id="nachricht"
                        name="nachricht"
                        value={formData.nachricht}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-0 py-3 bg-transparent border-b border-stone-300 focus:border-stone-900 focus:outline-none transition-colors resize-none placeholder-stone-300 text-stone-900"
                        placeholder="Wie können wir Ihnen helfen?"
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                      </button>
                    </div>

                    <p className="text-xs text-stone-400 font-light text-center">
                      Mit dem Absenden erklären Sie sich mit unserer Datenschutzerklärung einverstanden.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Embed Section (Full Width) */}
      <section className="h-[500px] w-full bg-stone-200 grayscale contrast-[0.9] hover:grayscale-0 transition-all duration-700 ease-in-out">
        <iframe
          title="Fliesen KNY Standort"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Benzstraße+3,+64546+Mörfelden-Walldorf&output=embed"
        />
      </section>
    </div>
  )
}
