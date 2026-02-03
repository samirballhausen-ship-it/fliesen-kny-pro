import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Button from './ui/Button'

const ShowroomTeaser: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0.5, 1], ["0%", "-10%"])

  const handleRoutePlanen = () => {
    window.open('https://www.google.com/maps/dir//Fliesen+Kny+oHG,+Benzstra%C3%9Fe+3,+64546+M%C3%B6rfelden-Walldorf', '_blank')
  }

  return (
    <section id="ausstellung" className="relative py-32 bg-neutral-beige overflow-hidden">

      {/* Background Text Decor */}
      <div className="absolute top-10 left-0 w-full overflow-hidden opacity-5 pointer-events-none">
        <motion.div style={{ x }} className="whitespace-nowrap font-serif text-[15vw] leading-none text-neutral-dark">
          SHOWROOM MÖRFELDEN INSPIRATION
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-0 shadow-2xl">

          {/* Image Side */}
          <div className="md:w-3/5 h-[400px] md:h-[600px] relative overflow-hidden">
            <img
              src="/images/showroom/showroom-interior.png"
              alt="Showroom Interior"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="md:w-2/5 bg-white p-12 md:p-16 flex flex-col justify-center relative">
            {/* Red Line Accent */}
            <div className="absolute top-0 left-0 md:left-0 md:top-12 w-full md:w-1 h-1 md:h-24 bg-brand-red"></div>

            <h2 className="font-serif text-4xl text-neutral-dark mb-6">
              Haptik <br/>erleben.
            </h2>
            <p className="text-neutral-muted text-lg font-light leading-relaxed mb-8">
              Auf 1000m² Ausstellungsfläche laden wir Sie ein, die Wirkung von Materialien im echten Licht zu entdecken.
              Fühlen Sie die Strukturen, sehen Sie die Farben und lassen Sie sich inspirieren.
            </p>

            <div className="space-y-6">
              <div className="flex justify-between border-b border-neutral-100 pb-2 text-sm text-neutral-dark">
                <span>Mo - Fr</span>
                <span className="font-medium">09:00 - 12:30 & 14:00 - 18:00</span>
              </div>
              <div className="flex justify-between border-b border-neutral-100 pb-2 text-sm text-neutral-dark">
                <span>Samstag</span>
                <span className="font-medium">09:00 - 12:30</span>
              </div>
            </div>

            <div className="mt-10">
              <Button variant="outline" className="!w-full" onClick={handleRoutePlanen}>Route planen</Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ShowroomTeaser
