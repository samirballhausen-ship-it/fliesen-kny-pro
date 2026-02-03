import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from './ui/Button'
import {
  textRevealContainer,
  textRevealWord,
  splitTextIntoWords,
  easings,
} from '../utils/animations'

interface HeroProps {
  animationsReady?: boolean
}

const Hero: React.FC<HeroProps> = ({ animationsReady = true }) => {
  // Removed useScroll/useTransform - causes Safari crashes in WebView

  // Split headline for word animation
  const headlineWords = splitTextIntoWords('Raum für Charakter.')

  return (
    // Using min-h-[100dvh] for iOS Safari compatibility (dvh = dynamic viewport height)
    // Falls back to 100vh on browsers that don't support dvh
    <section className="relative min-h-screen min-h-[100dvh] w-full overflow-hidden bg-luxury-charcoal">
      {/* Background Layer - static (removed parallax for Safari compatibility) */}
      <div className="absolute inset-0 z-0">
        {/* Cinematic Image - simplified animation (removed blur for Safari) */}
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={animationsReady ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
          transition={{ duration: 1.5, ease: easings.cinematic }}
          src="/images/hero/hero-homepage.png"
          alt="Premium Badezimmer mit eleganten Fliesen"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay - fade in with image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={animationsReady ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute inset-0 bg-gradient-to-b from-luxury-charcoal/40 via-luxury-charcoal/20 to-luxury-charcoal/80 z-10"
        />

        {/* Vignette Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={animationsReady ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(13, 13, 13, 0.4) 70%, rgba(13, 13, 13, 0.8) 100%)',
          }}
        />
      </div>

      {/* Gold Glow Accents - animate in (removed parallax) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={animationsReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-500/8 blur-[150px] rounded-full z-10 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={animationsReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute top-1/3 right-0 w-64 h-64 bg-brand-red/5 blur-[120px] rounded-full z-10 pointer-events-none"
      />

      {/* Editorial Layout Content */}
      <div className="relative z-30 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center pt-28 sm:pt-32 md:pt-0">
        <div className="max-w-4xl">
          {/* Decorative Line with Gold Gradient */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={animationsReady ? { width: 100, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: easings.premium }}
            className="h-[1px] bg-gradient-to-r from-gold-500 to-gold-600/50 mb-6 sm:mb-8"
          />

          {/* Headline with Word-by-Word Animation */}
          <div className="overflow-hidden">
            <motion.div
              variants={textRevealContainer}
              initial="hidden"
              animate={animationsReady ? "visible" : "hidden"}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-cream-100 leading-[0.9] tracking-tight mb-6 sm:mb-8"
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={textRevealWord}
                  className={`inline-block mr-4 ${
                    word === 'Charakter.'
                      ? 'italic text-brand-red ml-0 md:ml-8'
                      : ''
                  }`}
                  style={{ perspective: '1000px' }}
                >
                  {word === 'für' && <br className="hidden md:block" />}
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Subtext Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-10 md:mt-12 items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={animationsReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.2, ease: easings.smooth }}
              className="text-cream-300 text-lg font-light leading-relaxed border-l border-gold-500/30 pl-6"
            >
              Seit 1980 definieren wir Bäder und Wohnräume neu.
              Entdecken Sie kuratierte Fliesenkollektionen und
              Handwerkskunst auf höchstem Niveau.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={animationsReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.4, ease: easings.premium }}
              className="flex gap-4"
            >
              <Link to="/ausstellung">
                <Button variant="white" icon={true}>
                  Kollektion ansehen
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Badge with Gold Glow */}
      <motion.div
        initial={{ scale: 0, rotate: -10, opacity: 0 }}
        animate={animationsReady ? { scale: 1, rotate: 0, opacity: 1 } : { scale: 0, rotate: -10, opacity: 0 }}
        transition={{ delay: 1.6, type: "spring", stiffness: 200, damping: 20 }}
        className="absolute bottom-12 right-6 md:right-12 z-30 hidden md:block"
      >
        <div
          className="w-32 h-32 rounded-full border border-gold-500/30 backdrop-blur-md
                     flex items-center justify-center text-center p-4
                     bg-luxury-charcoal/30 shadow-glow-gold
                     hover:border-gold-500/50 hover:shadow-glow-gold-md
                     transition-all duration-500"
        >
          <span className="text-cream-100 font-serif text-xs leading-tight tracking-widest uppercase">
            Rhein-Main<br/>
            <span className="text-gold-500">Excellence</span><br/>
            Since 1980
          </span>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={animationsReady ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-cream-400 text-xs uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={animationsReady ? { y: [0, 8, 0] } : { y: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-gold-500 to-transparent"
        />
      </motion.div>
    </section>
  )
}

export default Hero
