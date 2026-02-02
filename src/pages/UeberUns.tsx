import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const UeberUns = () => {
  const values = [
    {
      title: 'Exzellenz',
      description: 'Jedes Material wird nach Haptik, Langlebigkeit und Designanspruch ausgewählt.'
    },
    {
      title: 'Partnerschaft',
      description: 'Wir arbeiten eng mit Architekten, Planern und Handwerkern zusammen.'
    },
    {
      title: 'Vertrauen',
      description: 'Verlässliche Beratung und transparente Abläufe seit vier Jahrzehnten.'
    },
    {
      title: 'Leidenschaft',
      description: 'Wir schaffen Räume mit Charakter und begleiten Projekte mit Herz.'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <img
            src="/images/about-team.jpg"
            alt="Team von Fliesen KNY"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/65" />
        </div>
        <div className="relative container-custom">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-stone-200 mb-4">
                Über uns
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Familiengeführt. Anspruchsvoll. Persönlich.
              </h1>
              <p className="text-lg text-stone-200 leading-relaxed">
                Seit über 40 Jahren stehen wir für hochwertige Fliesen- und Sanitärkonzepte,
                die Design, Funktion und Handwerk vereinen.
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
                  src="/images/gallery-modern-kitchen.jpg"
                  alt="Showroom-Inspiration"
                  className="w-full h-full object-cover"
                />
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
                Fliesen KNY steht seit 1982 für exklusive Oberflächen und anspruchsvolle
                Badkonzepte. Was als regionales Fachgeschäft begann, ist heute eine der
                ersten Adressen für hochwertige Fliesenwelten im Rhein-Main-Gebiet.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                Unser Anspruch ist es, Materialien so zu kombinieren, dass Räume
                Persönlichkeit gewinnen – mit klaren Linien, natürlichen Strukturen und
                einem Sinn für zeitlose Eleganz.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Das Ergebnis: langfristige Partnerschaften, zufriedene Kunden und
                Projekte, die bis ins Detail überzeugen.
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
                Werte, die man spürt
              </h2>
              <p className="text-stone-400 max-w-2xl mx-auto">
                Unsere Arbeit steht für Eleganz, Präzision und vertrauensvolle Zusammenarbeit.
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
                Ein Team, das Räume versteht
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                Unsere Berater kombinieren handwerkliche Expertise mit einem
                feinen Gespür für Material und Raumwirkung. Dadurch entstehen
                Konzepte, die sowohl ästhetisch als auch funktional überzeugen.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                Wir begleiten Ihr Projekt von der Idee bis zur finalen Verlegung
                und koordinieren alle Schnittstellen mit Ihren Fachbetrieben.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="font-display text-4xl text-stone-900 mb-1">40+</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Jahre Erfahrung</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-stone-900 mb-1">1000 m²</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Ausstellung</p>
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
                  src="/images/service-tile-installation.jpg"
                  alt="Beratung bei Fliesen KNY"
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
                title: 'Kuratiertes Portfolio',
                description: 'Marken und Manufakturen, die Design und Qualität vereinen.'
              },
              {
                number: '02',
                title: 'Persönliche Beratung',
                description: 'Zeit für Ihre Wünsche, klare Antworten und kreative Lösungen.'
              },
              {
                number: '03',
                title: 'Showroom-Erlebnis',
                description: 'Materialien fühlen, Oberflächen vergleichen, Ideen erleben.'
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
              Lernen Sie uns persönlich kennen
            </h2>
            <p className="text-lg text-stone-600 mb-8 max-w-xl mx-auto">
              Besuchen Sie unsere Ausstellung und lassen Sie sich individuell beraten.
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
