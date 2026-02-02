import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const Kontakt = () => {
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

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', telefon: '', nachricht: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-stone-100">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm uppercase tracking-elegant text-stone-500 mb-4">
                Kontakt
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-6">
                Wir freuen uns auf Sie
              </h1>
              <p className="text-lg text-stone-600 leading-relaxed">
                Besuchen Sie uns in unserer Ausstellung oder kontaktieren Sie
                uns für eine persönliche Beratung.
              </p>
            </motion.div>
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
              <div className="divider mb-8" />
              <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-8">
                So erreichen Sie uns
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-stone-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900 mb-1">Adresse</h3>
                    <p className="text-stone-600">
                      Fliesen KNY oHG<br />
                      Benzstraße 3<br />
                      64546 Mörfelden-Walldorf
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-stone-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900 mb-1">Telefon</h3>
                    <a
                      href="tel:0610533067"
                      className="text-stone-600 hover:text-stone-900 transition-colors"
                    >
                      06105 – 330 67
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-stone-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900 mb-1">E-Mail</h3>
                    <a
                      href="mailto:info@fliesen-kny.de"
                      className="text-stone-600 hover:text-stone-900 transition-colors"
                    >
                      info@fliesen-kny.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-stone-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900 mb-1">Öffnungszeiten</h3>
                    <div className="text-stone-600 space-y-1">
                      <p>Mo – Fr: 9:00 – 12:30 & 14:00 – 18:00</p>
                      <p>Sa: 9:00 – 12:30</p>
                      <p className="text-stone-400 text-sm mt-2">
                        Termine auch außerhalb der Öffnungszeiten nach Vereinbarung möglich.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Link */}
              <div className="mt-12 p-6 bg-stone-100">
                <h3 className="font-medium text-stone-900 mb-3">Anfahrt</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Wir befinden uns im Gewerbegebiet Mörfelden-Walldorf,
                  nur wenige Minuten von der A5 entfernt.
                  Kostenlose Parkplätze direkt vor dem Haus.
                </p>
                <a
                  href="https://maps.google.com/?q=Benzstraße+3,+64546+Mörfelden-Walldorf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-wide text-stone-900 hover:text-stone-600 transition-colors"
                >
                  Route planen →
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-stone-100 p-8 lg:p-12">
                <h2 className="font-display text-2xl md:text-3xl text-stone-900 mb-2">
                  Schreiben Sie uns
                </h2>
                <p className="text-stone-600 mb-8">
                  Wir melden uns schnellstmöglich bei Ihnen.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-stone-900 text-white flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl text-stone-900 mb-2">
                      Vielen Dank!
                    </h3>
                    <p className="text-stone-600">
                      Wir haben Ihre Nachricht erhalten und melden uns in Kürze bei Ihnen.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-stone-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-stone-200 focus:border-stone-900 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm text-stone-700 mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-stone-200 focus:border-stone-900 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefon" className="block text-sm text-stone-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="telefon"
                        name="telefon"
                        value={formData.telefon}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-stone-200 focus:border-stone-900 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="nachricht" className="block text-sm text-stone-700 mb-2">
                        Nachricht *
                      </label>
                      <textarea
                        id="nachricht"
                        name="nachricht"
                        value={formData.nachricht}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white border border-stone-200 focus:border-stone-900 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                    </button>

                    <p className="text-xs text-stone-500">
                      Mit dem Absenden erklären Sie sich mit unserer Datenschutzerklärung einverstanden.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-stone-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-stone-500 mb-4">Interaktive Karte</p>
            <a
              href="https://maps.google.com/?q=Benzstraße+3,+64546+Mörfelden-Walldorf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              In Google Maps öffnen
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
