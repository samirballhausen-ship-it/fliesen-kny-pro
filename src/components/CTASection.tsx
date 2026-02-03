import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'
import { easings } from '../utils/animations'

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-luxury-charcoal relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[600px] h-[600px] bg-gold-500/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Decorative Lines */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 200, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: easings.premium }}
        className="absolute top-20 left-10 md:left-20 h-px bg-gradient-to-r from-gold-500/50 to-transparent"
      />
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 150, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: easings.premium }}
        className="absolute bottom-20 right-10 md:right-20 h-px bg-gradient-to-l from-gold-500/50 to-transparent"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easings.smooth }}
        >
          {/* Subtitle */}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gold-500 text-xs uppercase tracking-[0.3em] mb-6 block"
          >
            Starten Sie Ihr Projekt
          </motion.span>

          {/* Headline */}
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream-100 mb-6">
            Bereit für Ihr <span className="italic text-gold-500">Projekt</span>?
          </h2>

          <p className="text-cream-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Lassen Sie uns gemeinsam Ihre Wohnträume verwirklichen.
            Vereinbaren Sie jetzt einen unverbindlichen Beratungstermin.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            {/* Primary Button with Glow */}
            <Link to="/kontakt">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-10 py-5 bg-brand-red text-white
                           font-medium text-sm uppercase tracking-widest
                           overflow-hidden transition-all duration-300
                           hover:shadow-glow-red-lg group"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Termin vereinbaren
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Shimmer effect */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6, ease: 'linear' }}
                />
              </motion.button>
            </Link>

            {/* Phone CTA */}
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-xs text-cream-500 uppercase tracking-widest mb-2">
                Oder anrufen
              </span>
              <a
                href="tel:0610533067"
                className="flex items-center gap-3 text-cream-100 hover:text-gold-500 transition-colors group"
              >
                <Phone className="w-5 h-5 text-gold-500" />
                <span className="font-serif text-2xl group-hover:underline decoration-gold-500/50">
                  06105 - 330 67
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 pt-10 border-t border-luxury-smoke/30"
        >
          <p className="text-cream-500 text-sm">
            <span className="text-gold-500">40+ Jahre</span> Erfahrung •
            <span className="text-gold-500 ml-2">1.000+</span> zufriedene Kunden •
            <span className="text-gold-500 ml-2">Persönliche</span> Beratung
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
