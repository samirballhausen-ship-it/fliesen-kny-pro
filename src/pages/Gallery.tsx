import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GalleryGrid } from '../components/GalleryGrid'
import { 
  Award,
  Users,
  Calendar,
  Star,
  Phone,
  Lightbulb
} from 'lucide-react'

export const Gallery = () => {
  const projectStats = [
    {
      icon: Calendar,
      number: '40+',
      label: 'Jahre Erfahrung',
      description: 'Traditionelles Handwerk mit modernster Technik'
    },
    {
      icon: Users,
      number: '2000+',
      label: 'Zufriedene Kunden',
      description: 'Privat- und Gewerbekunden im Rhein-Main-Gebiet'
    },
    {
      icon: Award,
      number: '5000+',
      label: 'Projekte realisiert',
      description: 'Von kleinen Reparaturen bis zu Komplettbädern'
    },
    {
      icon: Star,
      number: '100%',
      label: 'Kundenzufriedenheit',
      description: '5 Jahre Gewährleistung auf alle Arbeiten'
    }
  ]

  const projectHighlights = [
    {
      title: 'Luxusbad Villa Kronberg',
      description: 'Komplettbad mit italienischem Marmor und maßgefertigten Mosaiken',
      details: ['180 m² Fliesenfläche', 'Carrara Marmor', 'Handgefertigte Mosaike', '6 Wochen Bauzeit']
    },
    {
      title: 'Restaurant "Bella Vista"',
      description: 'Gewerbliche Fliesenverlegung mit rutschfesten Steinzeugfliesen',
      details: ['450 m² Bodenfläche', 'Rutschfeste Oberflächen', 'Industriestandard', '3 Wochen Bauzeit']
    },
    {
      title: 'Penthouse Frankfurt',
      description: 'Moderne Großformatfliesen und Naturstein-Akzentwände',
      details: ['320 m² Gesamtfläche', '160x80cm Großformate', 'Schiefer-Akzente', '8 Wochen Bauzeit']
    }
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Unsere Projekte
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Entdecken Sie eine Auswahl unserer realisierten Projekte. Von modernen Badezimmern 
              bis zu exklusiven Natursteinarbeiten - lassen Sie sich von unserer Handwerkskunst inspirieren.
            </p>
          </motion.div>

          {/* Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="font-semibold text-gray-900 mb-2">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Bildergalerie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schauen Sie sich unsere Arbeiten in verschiedenen Bereichen an. 
              Klicken Sie auf ein Bild für eine detaillierte Ansicht.
            </p>
          </motion.div>

          <GalleryGrid />
        </div>
      </section>

      {/* Project Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Besondere Projekte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Einige unserer besonderen Referenzprojekte, die unsere Expertise 
              und handwerkliche Qualität demonstrieren.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectHighlights.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <ul className="space-y-2">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Qualität in jedem Detail
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Jedes Projekt beginnt mit einer sorgfältigen Planung und Beratung. 
                Unsere erfahrenen Fachkräfte setzen Ihre Wünsche mit präziser 
                Handwerkskunst und modernsten Techniken um.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Persönliche Beratung
                    </h3>
                    <p className="text-gray-600">
                      Kostenlose Beratung vor Ort mit detaillierter Aufmaß und Materialberatung
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      3D-Planung & Visualisierung
                    </h3>
                    <p className="text-gray-600">
                      Moderne 3D-Planung für die perfekte Visualisierung Ihres Projekts
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Präzise Ausführung
                    </h3>
                    <p className="text-gray-600">
                      Professionelle Umsetzung durch erfahrene Meister und Fachkräfte
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=800&fit=crop"
                alt="Handwerker bei präziser Fliesenverlegung"
                className="rounded-2xl shadow-2xl"
              />
              
              {/* Quality Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Meisterbetrieb</p>
                    <p className="text-gray-600 text-sm">Seit 1984</p>
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-xl shadow-lg p-4 text-white text-center">
                <div className="text-2xl font-bold">40+</div>
                <div className="text-sm">Jahre</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-500">
        <div className="container-custom">
          <motion.div
            className="text-center text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ihr Projekt wartet
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Lassen Sie sich von unseren Referenzen überzeugen und starten Sie 
              Ihr eigenes Projekt. Wir beraten Sie gerne kostenlos und unverbindlich.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Lightbulb className="w-5 h-5" />
                <span>Kostenlose Beratung</span>
              </Link>
              <a
                href="tel:+4961051234567"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Jetzt anrufen</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}