import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  staggerContainer,
  staggerItem,
  imageRevealUp,
  easings,
} from '../utils/animations'

const ProductTeaser: React.FC = () => {
  const products = [
    {
      title: 'Großformate & Marmor',
      subtitle: 'Premium',
      description: 'Fugenlose Eleganz für höchste Ansprüche. Entdecken Sie unsere exklusive Auswahl an italienischem Feinsteinzeug.',
      image: '/images/kategorien/kategorie-grossformat.png',
      link: '/sortiment/fliesen',
      size: 'large',
    },
    {
      title: 'Wellness & Bad',
      subtitle: 'Lifestyle',
      image: '/images/kategorien/kategorie-bad.png',
      link: '/sortiment/bad-sanitaer',
      size: 'medium',
    },
    {
      title: 'Naturstein',
      subtitle: 'Authentisch',
      image: '/images/kategorien/kategorie-naturstein.png',
      link: '/sortiment/naturstein',
      size: 'medium',
    },
  ]

  return (
    <section id="sortiment" className="py-32 bg-luxury-charcoal relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easings.premium }}
            className="max-w-xl"
          >
            <span className="text-gold-500 font-medium tracking-[0.2em] text-xs uppercase mb-4 block">
              Kollektionen
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-cream-100">
              Materialien für <br/>
              <span className="text-cream-300">Visionäre.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: easings.premium }}
          >
            <Link
              to="/sortiment"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-cream-300
                         border-b border-cream-300/30 pb-1
                         hover:text-gold-500 hover:border-gold-500 transition-all duration-300 group"
            >
              Alle Kollektionen ansehen
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Masonry Grid with Staggered Animation */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-12 gap-6 h-auto md:h-[800px]"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              variants={staggerItem}
              className={`relative group overflow-hidden cursor-pointer
                         ${product.size === 'large' ? 'md:col-span-8 md:row-span-2' : 'md:col-span-4'}
                         bg-luxury-anthracite`}
            >
              <Link to={product.link} className="block h-full">
                {/* Image with reveal animation */}
                <motion.div
                  variants={imageRevealUp}
                  className="absolute inset-0"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-smooth
                               group-hover:scale-105"
                  />
                </motion.div>

                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/90 via-luxury-charcoal/20 to-transparent
                                opacity-80 group-hover:opacity-90 transition-opacity duration-500 z-10" />

                {/* Gold glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10
                                bg-gradient-to-t from-gold-500/10 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full">
                  <span className="text-gold-500 text-xs uppercase tracking-widest mb-2 block">
                    {product.subtitle}
                  </span>
                  <h3 className={`text-cream-100 font-serif ${product.size === 'large' ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                    {product.title}
                  </h3>

                  {/* Description for large card */}
                  {product.description && (
                    <p className="text-cream-300/80 mt-4 max-w-md
                                  opacity-0 transform translate-y-4
                                  group-hover:opacity-100 group-hover:translate-y-0
                                  transition-all duration-500 delay-100">
                      {product.description}
                    </p>
                  )}

                  {/* Arrow indicator */}
                  <div className="mt-6 flex items-center gap-2 text-cream-300
                                  opacity-0 transform translate-x-[-10px]
                                  group-hover:opacity-100 group-hover:translate-x-0
                                  transition-all duration-500 delay-150">
                    <span className="text-xs uppercase tracking-wider">Entdecken</span>
                    <ArrowUpRight className="w-4 h-4 text-gold-500" />
                  </div>
                </div>

                {/* Border glow effect on hover */}
                <div className="absolute inset-0 border border-gold-500/0 group-hover:border-gold-500/20
                                transition-all duration-500 z-20 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 md:hidden text-center"
        >
          <Link
            to="/sortiment"
            className="inline-flex items-center gap-2 text-sm font-medium text-cream-300
                       border-b border-cream-300/30 pb-1
                       hover:text-gold-500 hover:border-gold-500 transition-all duration-300"
          >
            Alle Kollektionen ansehen
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductTeaser
