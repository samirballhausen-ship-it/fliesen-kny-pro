import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Award, Users, Clock, Star } from 'lucide-react'
import { ServiceCard } from '../components/ServiceCard'
import { TestimonialSlider } from '../components/TestimonialSlider'
import { 
  Hammer, 
  Mountain, 
  Grid3X3, 
  ShowerHead, 
  Lightbulb,
  Phone
} from 'lucide-react'

export const Home = () => {
  const heroStats = [
    { number: '40+', label: 'Jahre Erfahrung' },
    { number: '2000+', label: 'Zufriedene Kunden' },
    { number: '5000+', label: 'Projekte realisiert' },
    { number: '100%', label: 'Qualitätsgarantie' },
  ]

  const services = [
    {
      icon: Hammer,
      title: 'Fliesenverlegung',
      description: 'Professionelle Verlegung von Wand- und Bodenfliesen für Innen- und Außenbereiche.',
      features: [
        'Moderne Verlegetechniken',
        'Präzise Ausführung',
        'Hochwertige Materialien',
        'Schnelle Umsetzung'
      ],
      price: '45€',
      isHighlighted: true
    },
    {
      icon: Mountain,
      title: 'Naturstein',
      description: 'Elegante Natursteinverlegung für ein exklusives und nachhaltiges Ambiente.',
      features: [
        'Marmor, Granit & Schiefer',
        'Individuelle Beratung',
        'Fachgerechte Verlegung',
        'Nachhaltige Materialien'
      ],
      price: '65€'
    },
    {
      icon: Grid3X3,
      title: 'Mosaik',
      description: 'Kunstvolle Mosaikverlegung für besondere Akzente und kreative Gestaltung.',
      features: [
        'Kreative Designs',
        'Individuelle Muster',
        'Hochwertige Mosaiksteine',
        'Präzise Handarbeit'
      ],
      price: '85€'
    },
    {
      icon: ShowerHead,
      title: 'Badsanierung',
      description: 'Komplette Badezimmersanierung vom Konzept bis zur schlüsselfertigen Übergabe.',
      features: [
        'Komplettservice',
        'Moderne Badgestaltung',
        'Barrierefreie Lösungen',
        '3D-Planung inklusive'
      ],
      price: 'ab 8.500€'
    }
  ]

  const features = [
    {
      icon: Award,
      title: 'Über 40 Jahre Erfahrung',
      description: 'Traditioneller Handwerksbetrieb mit modernsten Techniken und höchsten Qualitätsstandards.'
    },
    {
      icon: Users,
      title: 'Große Ausstellung',
      description: 'Besuchen Sie unsere umfangreiche Ausstellung mit über 1000 m² Präsentationsfläche.'
    },
    {
      icon: Clock,
      title: 'Termingerechte Ausführung',
      description: 'Zuverlässige Projektplanung und pünktliche Fertigstellung aller Arbeiten.'
    },
    {
      icon: Star,
      title: '100% Kundenzufriedenheit',
      description: 'Über 2000 zufriedene Kunden sprechen für unsere Qualität und Zuverlässigkeit.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=1920&h=1080&fit=crop"
            alt="Moderne Fliesenverlegung"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Fliesen{' '}
                <span className="text-gradient bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
                  KNY
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                Ihr Experte für hochwertige Fliesenverlegung, Naturstein und Badsanierung 
                im Rhein-Main-Gebiet. Über 40 Jahre Erfahrung für Ihr Traumzuhause.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/contact"
                  className="btn-primary flex items-center justify-center space-x-2 text-lg"
                >
                  <span>Kostenlose Beratung</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/gallery"
                  className="btn-outline flex items-center justify-center space-x-2 text-lg"
                >
                  <span>Projekte ansehen</span>
                </Link>
              </div>

              {/* Hero Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-secondary-400 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Services Preview */}
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
              Unsere Leistungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von klassischer Fliesenverlegung bis zur kompletten Badsanierung - 
              wir bieten Ihnen professionelle Lösungen für jeden Anspruch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
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

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/services"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Alle Leistungen</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
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
                Warum Fliesen KNY?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Als traditioneller Handwerksbetrieb mit über 40 Jahren Erfahrung 
                stehen wir für Qualität, Zuverlässigkeit und handwerkliche Perfektion.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
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
                alt="Handwerker bei der Arbeit"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Garantie</p>
                    <p className="text-gray-600 text-sm">5 Jahre Gewährleistung</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-500">
        <div className="container-custom">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Bereit für Ihr nächstes Projekt?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Lassen Sie uns gemeinsam Ihre Räume verschönern. 
              Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot.
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
                <span>06105 / 123 456</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}