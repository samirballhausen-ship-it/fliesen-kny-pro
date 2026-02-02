import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const UeberUns = () => {
  const values = [
    {
      title: 'Qualität',
      description: 'Wir führen ausschließlich Produkte, die unseren hohen Qualitätsansprüchen genügen.'
    },
    {
      title: 'Beratung',
      description: 'Persönliche und kompetente Beratung steht bei uns an erster Stelle.'
    },
    {
      title: 'Erfahrung',
      description: 'Über 40 Jahre Expertise in der Welt der Fliesen und Natursteine.'
    },
    {
      title: 'Leidenschaft',
      description: 'Wir lieben was wir tun – und das spüren unsere Kunden.'
    }
  ]

  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-stone-100">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm uppercase tracking-elegant text-stone-500 mb-4">
                Über uns
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-6">
                Tradition trifft Leidenschaft
              </h1>
              <p className="text-lg text-stone-600 leading-relaxed">
                Seit über 40 Jahren sind wir Ihr verlässlicher Partner für
                exklusive Fliesen, Natursteine und Sanitärobjekte im Rhein-Main-Gebiet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-[4/5] overflow-hidden bg-stone-200 relative">
                <img
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=1000&fit=crop"
                  alt="Unser Showroom"
                  className="w-full h-full object-cover"
                />
                {/* Accent */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-warm-100 -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="divider mb-8" />
              <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-6">
                Unsere Geschichte
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                Was als kleine Fliesenhandlung begann, ist heute eine der
                angesehensten Adressen für hochwertige Fliesen und Sanitär
                im Rhein-Main-Gebiet. Der Grundstein für unseren Erfolg wurde
                vor über 40 Jahren gelegt – mit einer einfachen Vision:
                Unseren Kunden das Beste zu bieten.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                Heute präsentieren wir auf über 1000 m² Ausstellungsfläche
                ein einzigartiges Sortiment namhafter Markenhersteller und
                spezialisierter Manufakturen aus der ganzen Welt. Von klassischen
                Designs bis zu avantgardistischen Kreationen – bei uns finden
                Sie das Besondere.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Unser Team aus erfahrenen Fachberatern begleitet Sie mit
                Kompetenz und Leidenschaft von der ersten Idee bis zur
                perfekten Umsetzung Ihres Projekts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
                Unsere Werte
              </h2>
              <p className="text-stone-400 max-w-2xl mx-auto">
                Was uns antreibt und wofür wir stehen.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-t border-stone-700 pt-8"
              >
                <h3 className="font-display text-2xl mb-4">{value.title}</h3>
                <p className="text-stone-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
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
              <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-6">
                Unser Team
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                Hinter Fliesen KNY steht ein Team aus leidenschaftlichen Experten,
                die ihr Handwerk verstehen und lieben. Unsere spezialisierten
                Fachberater bringen jahrelange Erfahrung mit und sind stets auf
                dem neuesten Stand der Trends und Entwicklungen.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                Wir nehmen uns Zeit für Sie, hören Ihren Wünschen aufmerksam zu
                und entwickeln gemeinsam mit Ihnen die perfekte Lösung für
                Ihr Projekt – ob kleine Renovierung oder großes Bauvorhaben.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="font-display text-4xl text-stone-900 mb-1">40+</p>
                  <p className="text-sm text-stone-500 uppercase tracking-wide">Jahre Erfahrung</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-stone-900 mb-1">1000+</p>
                  <p className="text-sm text-stone-500 uppercase tracking-wide">m² Ausstellung</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                  alt="Unser Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-warm-50">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="divider mx-auto mb-8" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-stone-900 mb-8">
              Warum Fliesen KNY?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                number: '01',
                title: 'Einzigartiges Sortiment',
                description: 'Namhafte Markenhersteller und spezialisierte Manufakturen aus der ganzen Welt.'
              },
              {
                number: '02',
                title: 'Persönliche Beratung',
                description: 'Erfahrene Fachberater, die sich Zeit für Ihre Wünsche und Ideen nehmen.'
              },
              {
                number: '03',
                title: 'Große Ausstellung',
                description: 'Erleben Sie Materialien, Farben und Texturen auf über 1000 m² hautnah.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-sm text-stone-400 mb-4">{item.number}</p>
                <h3 className="font-display text-xl text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-stone-100">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-stone-900 mb-6">
              Lernen Sie uns kennen
            </h2>
            <p className="text-lg text-stone-600 mb-8 max-w-xl mx-auto">
              Besuchen Sie unsere Ausstellung und erleben Sie, was uns besonders macht.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/kontakt" className="btn-primary">
                Kontakt aufnehmen
              </Link>
              <Link to="/ausstellung" className="btn-outline">
                Ausstellung entdecken
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
