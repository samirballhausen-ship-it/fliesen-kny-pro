import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import Lightbox from './Lightbox'
import { staggerContainer, staggerItem, easings } from '../utils/animations'

const projects = [
  {
    title: "Penthouse Frankfurt",
    category: "Großformat & Bad",
    image: "/images/projekte/projekt-penthouse.png"
  },
  {
    title: "Villa Taunus",
    category: "Naturstein Terrasse",
    image: "/images/projekte/projekt-villa.png"
  },
  {
    title: "Modernes Bad Mainz",
    category: "Mosaik & Wellness",
    image: "/images/projekte/projekt-mainz.png"
  },
  {
    title: "Loft Darmstadt",
    category: "Betonoptik Boden",
    image: "/images/projekte/projekt-loft.png"
  },
  {
    title: "Spa Wiesbaden",
    category: "Wellness-Bereich",
    image: "/images/projekte/projekt-spa.png"
  },
  {
    title: "Altbau Bad Offenbach",
    category: "Fischgrät-Verlegung",
    image: "/images/projekte/projekt-altbau.png"
  }
]

const Realizations: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const lightboxImages = projects.map(p => ({
    src: p.image,
    alt: p.title,
    title: `${p.title} – ${p.category}`
  }))

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section className="py-32 bg-luxury-anthracite text-cream-100 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easings.premium }}
          >
            <span className="text-gold-500 font-medium tracking-[0.2em] text-xs uppercase mb-4 block">
              Referenzen
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Ausgewählte <span className="font-bold">Projekte</span>
              <span className="inline-block w-2 h-2 bg-gold-500 rounded-full ml-3 align-middle" />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: easings.premium }}
            className="text-cream-400 max-w-sm text-right md:text-left"
          >
            Lassen Sie sich von echten Kundenprojekten aus dem Rhein-Main-Gebiet inspirieren.
          </motion.p>
        </div>
      </div>

      {/* Masonry Grid - replacing horizontal scroll */}
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className={`relative group cursor-pointer overflow-hidden
                         ${index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-luxury-charcoal">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-smooth
                             group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/70 via-luxury-charcoal/10 to-transparent
                              opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Gold glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                              bg-gradient-to-t from-gold-500/20 to-transparent pointer-events-none" />

              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100
                              transition-all duration-500 z-20">
                <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-500/50
                                flex items-center justify-center transform scale-0 group-hover:scale-100
                                transition-transform duration-500 backdrop-blur-sm">
                  <Search className="w-6 h-6 text-gold-500" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="font-serif text-xl text-cream-100 mb-1 group-hover:text-gold-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-cream-500 uppercase tracking-widest">
                  {project.category}
                </p>

                {/* Animated underline */}
                <div className="mt-4 h-px w-0 group-hover:w-full bg-gradient-to-r from-gold-500 to-transparent
                                transition-all duration-500" />
              </div>

              {/* Border on hover */}
              <div className="absolute inset-0 border border-gold-500/0 group-hover:border-gold-500/20
                              transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* View All Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 md:px-12 mt-12 text-center"
      >
        <button className="text-cream-300 hover:text-gold-500 text-sm uppercase tracking-widest
                           border-b border-cream-300/30 hover:border-gold-500 pb-1 transition-all duration-300">
          Alle Projekte ansehen
        </button>
      </motion.div>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(index) => setCurrentImageIndex(index)}
      />
    </section>
  )
}

export default Realizations
