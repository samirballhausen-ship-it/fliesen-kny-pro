import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Award, Sparkles, Ruler, ShieldCheck } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

const highlights = [
  {
    title: 'Premium-Auswahl',
    description: 'Kuratierte Kollektionen internationaler Marken mit exklusiven Serien.',
    icon: Sparkles
  },
  {
    title: 'Planung & Umsetzung',
    description: 'Beratung, Materialkonzept und Detailplanung aus einer Hand.',
    icon: Ruler
  },
  {
    title: 'Qualität seit 1982',
    description: 'Familiengeführt, mit über 40 Jahren Erfahrung im Rhein-Main-Gebiet.',
    icon: Award
  },
  {
    title: 'Verlässliche Partner',
    description: 'Koordination mit Architekten, Handwerk und Bauleitung.',
    icon: ShieldCheck
  }
]

const services = [
  {
    title: 'Exklusive Fliesenwelten',
    description: 'Großformate, Natursteinoptik, handveredelte Serien.',
    image: '/images/service-showroom.jpg'
  },
  {
    title: 'Sanitär & Badplanung',
    description: 'Design-Armaturen, Waschtische und komplette Badkonzepte.',
    image: '/images/hero-luxury-bathroom.jpg'
  },
  {
    title: 'Mosaik & Detailarbeit',
    description: 'Individuelle Akzente, Manufakturarbeiten und Sonderanfertigungen.',
    image: '/images/service-mosaic-art.jpg'
  }
]

const projectGallery = [
  {
    title: 'Luxusbad',
    image: '/images/gallery-luxury-bathroom.jpg'
  },
  {
    title: 'Moderne Küche',
    image: '/images/gallery-modern-kitchen.jpg'
  },
  {
    title: 'Terrasse & Outdoor',
    image: '/images/gallery-outdoor-terrace.jpg'
  }
]

const processSteps = [
  {
    title: 'Erstgespräch & Bedarf',
    description: 'Wir hören zu, verstehen Ihre Ziele und definieren den Stilrahmen.'
  },
  {
    title: 'Materialauswahl & Moodboard',
    description: 'Auswahl von Fliesen, Naturstein und Sanitär im perfekten Zusammenspiel.'
  },
  {
    title: 'Planung & Visualisierung',
    description: 'Raumkonzept, Verlegebild und technische Abstimmung für die Umsetzung.'
  },
  {
    title: 'Koordination & Lieferung',
    description: 'Terminsichere Abläufe und Partnerschaft mit Ihren Gewerken.'
  }
]

export const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/hero-luxury-bathroom.jpg"
            alt="Luxuriöses Badezimmer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-900/60 to-stone-900/30" />
        </div>

        <div className="relative z-10 container-custom pt-24">
          <div className="max-w-3xl">
            <motion.p
              {...fadeInUp}
              className="text-xs uppercase tracking-[0.3em] text-stone-200 mb-6"
            >
              Fliesen KNY · Premium Showroom Rhein-Main
            </motion.p>

            <motion.h1
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight"
            >
              Hochwertige Fliesenwelten
              <span className="block text-stone-200">für Architektur und Interior.</span>
            </motion.h1>

            <motion.p
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="text-lg md:text-xl text-stone-200 mb-12 max-w-xl leading-relaxed"
            >
              Wir gestalten Räume mit Charakter: exklusive Fliesen, Naturstein und Sanitär
              in einer der größten Ausstellungen der Region – begleitet von echter Beratungskompetenz.
            </motion.p>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/ausstellung" className="btn-primary">
                Ausstellung erleben
              </Link>
              <Link to="/kontakt" className="btn-outline border-white text-white hover:bg-white hover:text-stone-900">
                Beratung anfragen
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding-sm bg-stone-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-stone-200/80 p-6"
              >
                <item.icon className="w-6 h-6 text-stone-700 mb-4" />
                <h3 className="font-display text-xl text-stone-900 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="divider mb-6" />
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-stone-900 mb-6">
                Beratung, Auswahl und Gestaltung mit höchstem Anspruch.
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                Ob private Wohnräume oder anspruchsvolle Gewerbeprojekte – wir kuratieren
                Materialien, die Architektur und Interior verbinden. Unsere Experten begleiten
                Sie von der Auswahl bis zur finalen Ausführung.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="font-display text-4xl text-stone-900 mb-2">40+</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                    Jahre Erfahrung
                  </p>
                </div>
                <div>
                  <p className="font-display text-4xl text-stone-900 mb-2">1000 m²</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                    Ausstellung
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group border border-stone-200/70 bg-stone-50/60"
                >
                  <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] items-center">
                    <div className="h-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-2xl text-stone-900 mb-2">{service.title}</h3>
                      <p className="text-stone-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
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
                Ihr Projekt in klaren Schritten
              </h2>
              <p className="text-stone-400 max-w-2xl mx-auto">
                Präzise Prozesse, transparente Kommunikation und hochwertige Ergebnisse.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-stone-700/60 p-6 md:p-8"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-4">
                  Schritt {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display text-2xl mb-4">{step.title}</h3>
                <p className="text-stone-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="divider mb-6" />
              <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-4">
                Aktuelle Projekte & Referenzen
              </h2>
              <p className="text-stone-600 max-w-2xl">
                Eindrucksvolle Oberflächen, stimmige Materialien, präzise Details.
              </p>
            </motion.div>
            <Link
              to="/ausstellung"
              className="inline-flex items-center text-sm uppercase tracking-[0.2em] text-stone-900 hover:text-stone-600"
            >
              Ausstellung besuchen <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectGallery.map((project) => (
              <div key={project.title} className="group">
                <div className="image-container aspect-[4/3]">
                  <img src={project.image} alt={project.title} />
                </div>
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-stone-500">
                  {project.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-warm-50">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-stone-900 mb-6">
              Lassen Sie uns Ihr Projekt gestalten
            </h2>
            <p className="text-lg text-stone-600 mb-8 max-w-xl mx-auto">
              Vereinbaren Sie einen persönlichen Termin in unserem Showroom oder sprechen Sie
              mit unseren Experten über Ihr Vorhaben.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/kontakt" className="btn-primary">
                Termin anfragen
              </Link>
              <a href="tel:0610533067" className="btn-outline">
                06105 – 330 67
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
