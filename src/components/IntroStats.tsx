import React from 'react'
import { motion } from 'framer-motion'

const IntroStats: React.FC = () => {
  return (
    <section id="intro" className="py-32 bg-neutral-cream overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* Image Composition (Left) */}
          <div className="lg:w-1/2 relative min-h-[600px] w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-3/4 h-[500px] z-10"
            >
              <img
                src="/images/intro/intro-textur.png"
                alt="Feinsteinzeug Textur"
                className="w-full h-full object-cover shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-0 right-0 w-2/3 h-[400px] z-20 border-[10px] border-neutral-cream"
            >
              <img
                src="/images/intro/intro-showroom.png"
                alt="Showroom Detail"
                className="w-full h-full object-cover shadow-2xl"
              />
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -bottom-10 -left-10 text-[200px] font-serif text-neutral-200/50 -z-0 leading-none select-none">
              40
            </div>
          </div>

          {/* Editorial Content (Right) */}
          <div className="lg:w-1/2 lg:pl-10 relative z-10">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-brand-red font-medium tracking-[0.2em] text-sm uppercase mb-6 block"
            >
              Über Fliesen Kny
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-dark mb-10 leading-tight"
            >
              Ästhetik, die <br/>
              <span className="italic text-neutral-400">bleibt.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="prose prose-lg text-neutral-muted font-light"
            >
              <p className="mb-6">
                Ein Zuhause ist mehr als vier Wände. Es ist ein Ausdruck Ihrer Persönlichkeit.
                Als familiengeführtes Unternehmen in Mörfelden kuratieren wir seit über vier Jahrzehnten
                Materialien, die Räumen Seele verleihen.
              </p>
              <p>
                Unser Anspruch ist es, nicht nur Fliesen zu verkaufen, sondern Atmosphären zu schaffen.
                Von der kühlen Eleganz italienischen Marmors bis zur warmen Haptik von Naturstein –
                wir begleiten Sie auf dem Weg zu Ihrem persönlichen Unikat.
              </p>
            </motion.div>

            {/* Signature Block */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="h-[1px] w-12 bg-brand-red"></div>
              <div>
                <p className="font-cursive text-3xl text-neutral-dark">Familie Kny</p>
                <p className="text-xs uppercase tracking-widest text-neutral-400 mt-1">Inhaber</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroStats
