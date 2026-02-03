import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Check, Send, Car } from 'lucide-react'

export const Kontakt = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    betreff: '',
    nachricht: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', telefon: '', betreff: '', nachricht: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="bg-neutral-cream" ref={containerRef}>
      {/* Hero - 50vh */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Kontakt Fliesen Kny"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-text/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-cream via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 container-custom pt-16">
          <div className="max-w-3xl text-center mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4 px-5 py-2 border border-white/30 text-white text-xs uppercase tracking-[0.2em]"
            >
              Kontakt
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4"
            >
              Wir freuen uns auf Sie
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-white/80 max-w-xl mx-auto"
            >
              Besuchen Sie unsere Ausstellung oder kontaktieren Sie uns direkt.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Kontakt Section - 2 Spalten */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            {/* Linke Spalte - Kontaktinformationen */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-h2 text-neutral-text mb-8">So erreichen Sie uns</h2>

              <div className="space-y-5">
                {/* Adresse */}
                <div className="flex items-start p-5 bg-neutral-cream rounded-lg hover:shadow-soft transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-display text-lg text-neutral-text mb-1">Adresse</h3>
                    <p className="text-neutral-muted">
                      Fliesen Kny oHG
                      <br />
                      Benzstra&szlig;e 3<br />
                      64546 M&ouml;rfelden
                    </p>
                  </div>
                </div>

                {/* Telefon */}
                <div className="flex items-start p-5 bg-neutral-cream rounded-lg hover:shadow-soft transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-display text-lg text-neutral-text mb-1">Telefon</h3>
                    <a
                      href="tel:0610533067"
                      className="text-lg text-primary hover:text-primary-dark transition-colors font-medium"
                    >
                      06105-330 67
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start p-5 bg-neutral-cream rounded-lg hover:shadow-soft transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-display text-lg text-neutral-text mb-1">E-Mail</h3>
                    <a
                      href="mailto:info@fliesen-kny.de"
                      className="text-lg text-primary hover:text-primary-dark transition-colors font-medium"
                    >
                      info@fliesen-kny.de
                    </a>
                  </div>
                </div>

                {/* Öffnungszeiten */}
                <div className="flex items-start p-5 bg-neutral-cream rounded-lg hover:shadow-soft transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-display text-lg text-neutral-text mb-2">Öffnungszeiten</h3>
                    <div className="text-neutral-muted space-y-1">
                      <div className="flex justify-between">
                        <span className="font-medium text-neutral-text">Mo.-Fr.:</span>
                        <span>9:00-12:30 &amp; 14:00-18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-neutral-text">Samstag:</span>
                        <span>9:00-12:30</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Rechte Spalte - Kontaktformular */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-neutral-cream p-8 lg:p-10 rounded-xl">
                <h2 className="font-display text-h2 text-neutral-text mb-2">Schreiben Sie uns</h2>
                <p className="text-neutral-muted mb-8">
                  Wir melden uns schnellstmöglich bei Ihnen.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10" />
                    </div>
                    <h3 className="font-display text-2xl text-neutral-text mb-3">
                      Vielen Dank!
                    </h3>
                    <p className="text-neutral-muted max-w-sm mx-auto">
                      Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen
                      melden.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-primary hover:text-primary-dark transition-colors font-medium"
                    >
                      Neue Nachricht senden
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs uppercase tracking-wider text-neutral-muted mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-neutral-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-neutral-text"
                        placeholder="Ihr vollständiger Name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase tracking-wider text-neutral-muted mb-2"
                      >
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-neutral-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-neutral-text"
                        placeholder="ihre.email@beispiel.de"
                      />
                    </div>

                    {/* Telefon (optional) */}
                    <div>
                      <label
                        htmlFor="telefon"
                        className="block text-xs uppercase tracking-wider text-neutral-muted mb-2"
                      >
                        Telefon <span className="text-neutral-light">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="telefon"
                        name="telefon"
                        value={formData.telefon}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-neutral-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-neutral-text"
                        placeholder="Für Rückfragen"
                      />
                    </div>

                    {/* Betreff */}
                    <div>
                      <label
                        htmlFor="betreff"
                        className="block text-xs uppercase tracking-wider text-neutral-muted mb-2"
                      >
                        Betreff *
                      </label>
                      <select
                        id="betreff"
                        name="betreff"
                        value={formData.betreff}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-neutral-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-neutral-text"
                      >
                        <option value="">Bitte wählen...</option>
                        <option value="beratung">Beratungstermin</option>
                        <option value="angebot">Angebotsanfrage</option>
                        <option value="ausstellung">Ausstellungsbesuch</option>
                        <option value="reklamation">Reklamation</option>
                        <option value="sonstiges">Sonstiges</option>
                      </select>
                    </div>

                    {/* Nachricht */}
                    <div>
                      <label
                        htmlFor="nachricht"
                        className="block text-xs uppercase tracking-wider text-neutral-muted mb-2"
                      >
                        Nachricht *
                      </label>
                      <textarea
                        id="nachricht"
                        name="nachricht"
                        value={formData.nachricht}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white border border-neutral-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none text-neutral-text"
                        placeholder="Wie können wir Ihnen helfen?"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Nachricht absenden
                        </>
                      )}
                    </button>

                    <p className="text-xs text-neutral-muted text-center pt-2">
                      Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="relative">
        <div className="h-[300px] w-full">
          <iframe
            title="Fliesen Kny Standort"
            className="w-full h-full border-0 grayscale-[30%] hover:grayscale-0 transition-all duration-500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.5!2d8.5736!3d49.9836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd70a9c6f8c8d1%3A0x1234567890abcdef!2sBenzstra%C3%9Fe%203%2C%2064546%20M%C3%B6rfelden-Walldorf!5e0!3m2!1sde!2sde!4v1234567890"
            allowFullScreen
          />
        </div>
      </section>

      {/* Anfahrt-Hinweise */}
      <section className="py-12 sm:py-14 md:py-16 bg-neutral-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Car className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display text-h3 text-neutral-text mb-4">Anfahrt</h2>
            <p className="text-neutral-muted leading-relaxed mb-6">
              Unsere Ausstellung befindet sich im Gewerbegebiet Mörfelden, nur wenige Minuten von
              der A5 entfernt. Nehmen Sie die Ausfahrt Mörfelden-Walldorf und folgen Sie der
              Beschilderung Richtung Gewerbegebiet.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-soft text-neutral-text">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="font-medium">Kostenlose Parkplätze direkt vor dem Haus</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
