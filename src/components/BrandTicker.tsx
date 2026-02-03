import React from 'react'
import { motion } from 'framer-motion'

const brands = [
  "Villeroy & Boch",
  "Marazzi",
  "Agrob Buchtal",
  "Jasba",
  "Schlüter Systems",
  "Bisazza",
  "Atlas Concorde",
  "Caesar",
  "Grohe",
  "Keuco",
  "Duravit",
  "Geberit"
]

const BrandTicker: React.FC = () => {
  return (
    <div className="bg-white border-b border-neutral-100 py-8 overflow-hidden relative z-30">
      <div className="container mx-auto px-6 mb-4">
        <p className="text-xs font-medium tracking-[0.2em] text-neutral-400 uppercase text-center md:text-left">
          Unsere Premium Partner
        </p>
      </div>

      <div className="flex relative">
        <motion.div
          className="flex gap-16 md:gap-32 whitespace-nowrap px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30
          }}
        >
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <span
              key={index}
              className="font-serif text-2xl md:text-3xl text-neutral-300 hover:text-brand-red transition-colors cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </motion.div>

        {/* Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </div>
  )
}

export default BrandTicker
