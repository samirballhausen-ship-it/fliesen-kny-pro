import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }

  const categories = [
    {
      title: 'Fliesen',
      description: 'Besondere Designs aus aller Welt',
      image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&h=1000&fit=crop'
    },
    {
      title: 'Naturstein',
      description: 'Marmor, Granit & edle Steinarten',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1000&fit=crop'
    },
    {
      title: 'Sanitär',
      description: 'Ausgefallene Objekte & Armaturen',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=1000&fit=crop'
    }
  ]

  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop"
            alt="Elegantes Badezimmer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            <motion.p
              {...fadeInUp}
              className="text-sm uppercase tracking-elegant text-stone-200 mb-6"
            >
              Seit über 40 Jahren
            </motion.p>

            <motion.h1
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight"
            >
              Der Geheimtip für Fliesen und Sanitär
            </motion.h1>

            <motion.p
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="text-lg md:text-xl text-stone-200 mb-12 max-w-xl leading-relaxed"
            >
              Eine der größten Ausstellungen im Rhein-Main-Gebiet.
              Entdecken Sie unser einzigartiges Sortiment namhafter Markenhersteller
              und spezialisierter Manufakturen aus der ganzen Welt.
            </motion.p>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/ausstellung" className="btn-primary">
                Ausstellung entdecken
              </Link>
              <Link to="/kontakt" className="btn-outline border-white text-white hover:bg-white hover:text-stone-900">
                Beratungstermin
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="divider mx-auto mb-8" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-stone-900 mb-8">
              Wo Qualität auf Inspiration trifft
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
              In unserer großzügigen Ausstellung präsentieren wir Ihnen eine
              sorgfältig kuratierte Auswahl an Fliesen, Natursteinen und
              Sanitärobjekten. Unsere spezialisierten Fachberater begleiten
              Sie von der ersten Idee bis zur perfekten Lösung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding-sm bg-stone-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden bg-stone-200"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-stone-300 text-sm">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="divider mb-8" />
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-stone-900 mb-6">
                Über 40 Jahre Erfahrung und Leidenschaft
              </h2>
              <p className="text-stone-600 leading-relaxed mb-8">
                Was als kleine Fliesenhandlung begann, ist heute eine der
                renommiertesten Adressen für exklusive Fliesen und Sanitär
                im Rhein-Main-Gebiet. Unser Erfolgsgeheimnis? Die persönliche
                Beratung, das geschulte Auge für Qualität und die Liebe zum Detail.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="font-display text-4xl text-stone-900 mb-1">40+</p>
                  <p className="text-sm text-stone-500 uppercase tracking-wide">Jahre Erfahrung</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-stone-900 mb-1">1000+</p>
                  <p className="text-sm text-stone-500 uppercase tracking-wide">m² Ausstellung</p>
                </div>
              </div>
              <Link
                to="/ueber-uns"
                className="inline-flex items-center text-stone-900 hover:text-stone-600 transition-colors group"
              >
                <span className="text-sm uppercase tracking-wide">Mehr erfahren</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=1000&fit=crop"
                  alt="Fliesen Ausstellung"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-warm-100 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-stone-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="divider bg-stone-700 mx-auto mb-8" />
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                Unser Service für Sie
              </h2>
              <p className="text-stone-400 max-w-2xl mx-auto">
                Von der ersten Beratung bis zur fertigen Gestaltung –
                wir begleiten Sie auf dem Weg zu Ihrem Traumraum.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                number: '01',
                title: 'Persönliche Beratung',
                description: 'Unsere Fachberater nehmen sich Zeit für Ihre Wünsche und Ideen.'
              },
              {
                number: '02',
                title: 'Große Ausstellung',
                description: 'Erleben Sie Materialien, Farben und Texturen hautnah in unserem Showroom.'
              },
              {
                number: '03',
                title: 'Gestaltungsplanung',
                description: 'Wir helfen Ihnen bei der Planung und Visualisierung Ihres Projekts.'
              }
            ].map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-t border-stone-700 pt-8"
              >
                <p className="text-stone-500 text-sm mb-4">{service.number}</p>
                <h3 className="font-display text-2xl mb-4">{service.title}</h3>
                <p className="text-stone-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-warm-50">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-stone-900 mb-6">
              Besuchen Sie unsere Ausstellung
            </h2>
            <p className="text-lg text-stone-600 mb-8 max-w-xl mx-auto">
              Lassen Sie sich inspirieren und erleben Sie Qualität, die man sehen und fühlen kann.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/kontakt" className="btn-primary">
                Termin vereinbaren
              </Link>
              <a href="tel:0610533067" className="btn-outline">
                06105 – 330 67
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Opening Hours Bar */}
      <section className="bg-stone-100 py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-sm text-stone-600">
            <span className="uppercase tracking-wide text-stone-400">Öffnungszeiten</span>
            <span>Mo – Fr: 9:00 – 12:30 & 14:00 – 18:00</span>
            <span>Sa: 9:00 – 12:30</span>
          </div>
        </div>
      </section>
    </div>
  )
}
