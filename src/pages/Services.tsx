import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ServiceCard } from '../components/ServiceCard'
import { 
  Hammer, 
  Mountain, 
  Grid3X3, 
  ShowerHead, 
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Clock,
  Award,
  Users,
  Phone
} from 'lucide-react'

export const Services = () => {
  const mainServices = [
    {
      icon: Hammer,
      title: 'Fliesenverlegung',
      description: 'Professionelle Verlegung von hochwertigen Wand- und Bodenfliesen für Innen- und Außenbereiche mit modernsten Techniken.',
      features: [
        'Keramische Fliesen aller Art',
        'Feinsteinzeug in verschiedenen Formaten',
        'Großformatige Fliesen bis 160x320cm',
        'Rektifizierte und kalibrierte Fliesen',
        'Rutschfeste Bodenfliesen',
        'Frostbeständige Außenfliesen',
        'Moderne Verlegetechniken',
        'Präzise Fugenarbeit'
      ],
      price: '45€',
      isHighlighted: true
    },
    {
      icon: Mountain,
      title: 'Natursteinverlegung',
      description: 'Exklusive Natursteinarbeiten mit Marmor, Granit, Travertin und Schiefer für ein einzigartiges und nachhaltiges Ambiente.',
      features: [
        'Marmor in allen Varianten',
        'Granit für höchste Beanspruchung',
        'Travertin für mediterrane Optik',
        'Schiefer für moderne Akzente',
        'Sandstein für natürliche Wärme',
        'Quarzit für besondere Härte',
        'Fachgerechte Oberflächenbehandlung',
        'Professionelle Imprägnierung'
      ],
      price: '65€'
    },
    {
      icon: Grid3X3,
      title: 'Mosaikverlegung',
      description: 'Kunstvolle Mosaikarbeiten für besondere Akzente. Von klassischen Mustern bis zu individuellen Designs.',
      features: [
        'Glasmosaik in allen Farben',
        'Keramikmosaik verschiedener Größen',
        'Natursteinmosaik',
        'Metallmosaik für moderne Akzente',
        'Individuelle Mustergestaltung',
        'Bordüren und Einlegearbeiten',
        'Kunstvolle Wandgestaltung',
        'Präzise Handverlegung'
      ],
      price: '85€'
    },
    {
      icon: ShowerHead,
      title: 'Komplette Badsanierung',
      description: 'Vom ersten Konzept bis zur schlüsselfertigen Übergabe - wir realisieren Ihr Traumbad mit modernster Ausstattung.',
      features: [
        'Komplette Badplanung',
        '3D-Visualisierung',
        'Barrierefreie Umgestaltung',
        'Moderne Sanitärinstallation',
        'LED-Beleuchtungskonzepte',
        'Fußbodenheizung',
        'Dampfduschen und Wellness',
        'Schlüsselfertige Übergabe'
      ],
      price: 'ab 8.500€'
    }
  ]

  const additionalServices = [
    {
      icon: Lightbulb,
      title: 'Beratung & Planung',
      description: 'Umfassende Beratung mit 3D-Planung und Materialauswahl in unserer großen Ausstellung.',
      features: [
        'Kostenlose Erstberatung',
        '3D-Planung und Visualisierung',
        'Materialberatung vor Ort',
        'Ausstellungsbesichtigung',
        'Farbkonzepte und Stilberatung'
      ]
    },
    {
      icon: Award,
      title: 'Restaurierung',
      description: 'Fachgerechte Restaurierung historischer Fliesen und Natursteinarbeiten.',
      features: [
        'Historische Fliesensanierung',
        'Naturstein-Restaurierung',
        'Fugenerneuerung',
        'Oberflächenbehandlung',
        'Denkmalschutz-konforme Arbeiten'
      ]
    }
  ]

  const workflowSteps = [
    {
      step: '01',
      title: 'Beratung',
      description: 'Kostenlose Beratung und Besichtigung vor Ort. Wir erfassen Ihre Wünsche und Anforderungen.'
    },
    {
      step: '02',
      title: 'Planung',
      description: '3D-Visualisierung und detaillierte Planung mit Materialauswahl in unserer Ausstellung.'
    },
    {
      step: '03',
      title: 'Angebot',
      description: 'Transparentes und detailliertes Angebot mit allen Leistungen und Materialkosten.'
    },
    {
      step: '04',
      title: 'Ausführung',
      description: 'Professionelle Umsetzung durch unsere erfahrenen Fachkräfte in höchster Qualität.'
    },
    {
      step: '05',
      title: 'Übergabe',
      description: 'Gründliche Endkontrolle und Übergabe mit 5 Jahren Gewährleistung.'
    }
  ]

  const qualityFeatures = [
    {
      icon: Award,
      title: 'Meisterbetrieb',
      description: 'Traditioneller Handwerksmeisterbetrieb mit über 40 Jahren Erfahrung'
    },
    {
      icon: Users,
      title: 'Fachkräfte',
      description: 'Ausgebildete Fliesenleger und Natursteinspezialisten'
    },
    {
      icon: Clock,
      title: 'Pünktlichkeit',
      description: 'Termingerechte Ausführung und zuverlässige Projektabwicklung'
    },
    {
      icon: CheckCircle,
      title: 'Garantie',
      description: '5 Jahre Gewährleistung auf alle unsere Arbeiten'
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
              Unsere Leistungen
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Als Meisterbetrieb mit über 40 Jahren Erfahrung bieten wir Ihnen das komplette Spektrum 
              der Fliesenlegerarbeiten - von der klassischen Verlegung bis zur kompletten Badsanierung.
            </p>
          </motion.div>

          {/* Quality Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
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
              Hauptleistungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professionelle Fliesenlegerarbeiten für jeden Bereich - 
              von Wohnräumen bis zu gewerblichen Objekten.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
              Weitere Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ergänzende Dienstleistungen für die perfekte Umsetzung Ihrer Projekte.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
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
              So arbeiten wir
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der ersten Beratung bis zur finalen Übergabe - 
              unser strukturierter Ablauf garantiert höchste Qualität.
            </p>
          </motion.div>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-12 left-0 w-full h-0.5 bg-gray-200 hidden lg:block">
              <div className="h-full bg-gradient-to-r from-primary-600 to-secondary-500 w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Step Number */}
                  <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>

                  {/* Step Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
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
              Bereit für Ihr Projekt?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Ob Neubau, Renovierung oder Sanierung - wir beraten Sie gerne kostenlos 
              und erstellen Ihnen ein individuelles Angebot. Besuchen Sie unsere 
              Ausstellung oder vereinbaren Sie einen Termin vor Ort.
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
                <span>Sofort anrufen</span>
              </a>
              <Link
                to="/gallery"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Referenzen ansehen</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}