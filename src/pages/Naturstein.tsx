import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Gem, Mountain, Layers, Shield } from 'lucide-react'

const categories = [
  {
    title: 'Marmor',
    description: 'Zeitlose Eleganz mit einzigartigen Adern und Strukturen. Der Klassiker für luxuriöse Räume.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
  },
  {
    title: 'Granit',
    description: 'Robust und vielseitig. Perfekt für stark beanspruchte Flächen in Küche und Außenbereich.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    title: 'Schiefer',
    description: 'Natürliche Schieferung mit charaktervoller Oberfläche. Ideal für rustikale und moderne Stile.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
  },
  {
    title: 'Travertin',
    description: 'Mediterraner Charme mit warmen Farbtönen. Schafft eine einladende, natürliche Atmosphäre.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    title: 'Sandstein',
    description: 'Weiche, warme Töne und samtige Haptik. Verleiht Räumen natürliche Wärme.',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
  },
  {
    title: 'Quarzit',
    description: 'Extreme Härte trifft auf edle Optik. Für anspruchsvolle Projekte mit hoher Beanspruchung.',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
  },
]

const applications = [
  {
    title: 'Böden',
    description: 'Langlebige Natursteinböden für Wohnräume, Eingangsbereiche und repräsentative Flächen.',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
    icon: Layers,
  },
  {
    title: 'Wände',
    description: 'Eindrucksvolle Wandverkleidungen als Statement oder dezenter Akzent.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    icon: Mountain,
  },
  {
    title: 'Treppen',
    description: 'Massiv und elegant. Natursteintreppen als architektonisches Highlight.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
    icon: Gem,
  },
  {
    title: 'Außenbereich',
    description: 'Witterungsbeständige Natursteine für Terrassen, Poolumrandungen und Gartenwege.',
    image: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80',
    icon: Shield,
  },
]

export const Naturstein = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <div className="bg-white" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80"
            alt="Edle Naturstein-Installation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-text/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 container-custom pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-4 px-4 py-2 border border-white/30 text-white text-xs uppercase tracking-[0.2em]"
            >
              Premium Naturstein
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-hero text-white mb-6"
            >
              Naturstein
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-xl italic"
            >
              Einzigartige Schönheit der Natur
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block font-medium">
              Von der Natur geformt
            </span>
            <h2 className="font-display text-h1 md:text-5xl text-neutral-text mb-6">
              Jedes Stück ein Unikat.
            </h2>
            <p className="text-body-lg text-neutral-muted max-w-2xl mx-auto leading-relaxed">
              Naturstein fasziniert durch seine Einzigartigkeit. Jede Platte erzählt ihre eigene
              Geschichte, geformt über Millionen von Jahren. Die natürlichen Maserungen, Farbnuancen
              und Strukturen machen jeden Raum zu etwas Besonderem.
            </p>
            <p className="text-body-lg text-neutral-muted max-w-2xl mx-auto leading-relaxed mt-4">
              Mit seiner unübertroffenen Langlebigkeit und zeitlosen Eleganz ist Naturstein eine
              Investition, die Generationen überdauert. Entdecken Sie bei uns eine exklusive Auswahl
              der schönsten Natursteine aus aller Welt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding bg-neutral-warm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block font-medium">
              Unsere Auswahl
            </span>
            <h2 className="font-display text-h1 md:text-5xl text-neutral-text">
              Naturstein-Kategorien
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/3] mb-4">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-neutral-text/20 group-hover:bg-neutral-text/10 transition-colors duration-500" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-10 h-10 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <ArrowRight className="w-5 h-5 text-neutral-text" />
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-h2 text-neutral-text mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-neutral-muted text-sm leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block font-medium">
              Vielfältige Einsatzmöglichkeiten
            </span>
            <h2 className="font-display text-h1 md:text-5xl text-neutral-text">
              Anwendungsbereiche
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-neutral-text/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div>
                    <div className="mb-4 inline-flex p-3 bg-neutral-warm text-neutral-text group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <app.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-h2 text-neutral-text mb-3 group-hover:text-primary transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-neutral-muted leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-text text-white">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block font-medium">
              Persönliche Beratung
            </span>
            <h2 className="font-display text-h1 md:text-5xl mb-6">
              Entdecken Sie die Vielfalt.
            </h2>
            <p className="text-body-lg text-white/70 mb-10 max-w-xl mx-auto">
              Erleben Sie unsere Naturstein-Kollektion in der Ausstellung. Unsere Experten
              beraten Sie gerne bei der Auswahl des perfekten Steins für Ihr Projekt.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/ausstellung" className="btn-primary">
                Ausstellung besuchen
              </Link>
              <Link to="/kontakt" className="btn-white">
                Termin vereinbaren
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
