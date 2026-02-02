import { motion } from 'framer-motion'
import { ContactForm } from '../components/ContactForm'
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Car,
  Train,
  Navigation,
  Award,
  Users,
  Lightbulb,
  MessageSquare
} from 'lucide-react'

export const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '06105 / 123 456',
      description: 'Mo-Fr: 8:00-18:00, Sa: 9:00-14:00',
      action: 'tel:+4961051234567',
      actionText: 'Anrufen'
    },
    {
      icon: Mail,
      title: 'E-Mail',
      content: 'info@fliesen-kny.de',
      description: 'Wir antworten innerhalb von 24h',
      action: 'mailto:info@fliesen-kny.de',
      actionText: 'E-Mail schreiben'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Benzstraße 3, 64546 Mörfelden-Walldorf',
      description: 'Große Ausstellung mit Parkplätzen',
      action: 'https://maps.google.com/maps?q=Benzstraße+3,+64546+Mörfelden-Walldorf',
      actionText: 'Route planen'
    }
  ]

  const openingHours = [
    { day: 'Montag', hours: '8:00 - 18:00' },
    { day: 'Dienstag', hours: '8:00 - 18:00' },
    { day: 'Mittwoch', hours: '8:00 - 18:00' },
    { day: 'Donnerstag', hours: '8:00 - 18:00' },
    { day: 'Freitag', hours: '8:00 - 18:00' },
    { day: 'Samstag', hours: '9:00 - 14:00' },
    { day: 'Sonntag', hours: 'Geschlossen' }
  ]

  const directions = [
    {
      icon: Car,
      title: 'Mit dem Auto',
      description: 'A5 Ausfahrt Mörfelden, dann 5 Min. bis zur Benzstraße. Kostenlose Parkplätze vorhanden.',
      details: ['A5 Ausfahrt Mörfelden', '5 Minuten Fahrtzeit', 'Kostenlose Parkplätze', 'Behindertengerecht']
    },
    {
      icon: Train,
      title: 'Mit der Bahn',
      description: 'S-Bahn S7 bis Mörfelden, dann 10 Min. Fußweg oder Bus 67 bis Haltestelle Benzstraße.',
      details: ['S-Bahn S7 bis Mörfelden', '10 Min. Fußweg', 'Bus 67 verfügbar', 'Barrierefrei erreichbar']
    }
  ]

  const services = [
    'Kostenlose Beratung vor Ort',
    'Unverbindliches Angebot',
    '3D-Visualisierung',
    'Materialberatung',
    'Ausstellungsführung',
    'Terminvereinbarung flexibel'
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
              Kontakt
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Wir freuen uns auf Ihr Projekt! Kontaktieren Sie uns für eine kostenlose 
              Beratung oder besuchen Sie unsere große Ausstellung in Mörfelden-Walldorf.
            </p>
          </motion.div>

          {/* Quick Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="font-medium text-gray-800 mb-2">
                  {method.content}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {method.description}
                </p>
                <a
                  href={method.action}
                  className="btn-primary inline-block"
                  target={method.title === 'Adresse' ? '_blank' : undefined}
                  rel={method.title === 'Adresse' ? 'noopener noreferrer' : undefined}
                >
                  {method.actionText}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              {/* Opening Hours */}
              <motion.div
                className="bg-gray-50 rounded-xl p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Öffnungszeiten
                  </h3>
                </div>
                <div className="space-y-3">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className={`font-medium ${
                        schedule.day === 'Sonntag' ? 'text-gray-500' : 'text-gray-900'
                      }`}>
                        {schedule.day}
                      </span>
                      <span className={`${
                        schedule.day === 'Sonntag' ? 'text-gray-500' : 'text-gray-700'
                      }`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-primary-600">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">Termine auch außerhalb der Öffnungszeiten</span>
                  </div>
                </div>
              </motion.div>

              {/* Services */}
              <motion.div
                className="bg-white border-2 border-primary-100 rounded-xl p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Lightbulb className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Unsere Services
                  </h3>
                </div>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Emergency Contact */}
              <motion.div
                className="bg-red-50 border-2 border-red-200 rounded-xl p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Notfall-Service
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Wasserschäden oder andere Notfälle? Wir sind auch außerhalb 
                  der Geschäftszeiten für Sie da.
                </p>
                <a
                  href="tel:+491721234567"
                  className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors inline-block"
                >
                  Notfall: 0172 / 123 4567
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
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
              So finden Sie uns
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unsere Ausstellung ist gut erreichbar und verfügt über 
              ausreichend kostenlose Parkplätze.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Directions */}
            <div className="space-y-8">
              {directions.map((direction, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <direction.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {direction.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {direction.description}
                      </p>
                      <ul className="space-y-2">
                        {direction.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                            <span className="text-gray-700 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Map Link */}
              <motion.div
                className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-xl p-6 text-white text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Navigation className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Navigation starten
                </h3>
                <p className="mb-4 opacity-90">
                  Lassen Sie sich direkt zu unserer Ausstellung navigieren.
                </p>
                <a
                  href="https://maps.google.com/maps?q=Benzstraße+3,+64546+Mörfelden-Walldorf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors inline-block"
                >
                  In Google Maps öffnen
                </a>
              </motion.div>
            </div>

            {/* Map Placeholder */}
            <motion.div
              className="bg-gray-200 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Map placeholder - in a real project, you'd integrate Google Maps or similar */}
              <div className="h-96 lg:h-full min-h-[400px] bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">
                    Fliesen KNY Ausstellung
                  </p>
                  <p>
                    Benzstraße 3<br />
                    64546 Mörfelden-Walldorf
                  </p>
                  <a
                    href="https://maps.google.com/maps?q=Benzstraße+3,+64546+Mörfelden-Walldorf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-primary-600 hover:text-primary-800 font-medium"
                  >
                    In Maps öffnen →
                  </a>
                </div>
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
              Besuchen Sie unsere Ausstellung
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Über 1000 m² Ausstellungsfläche mit allen aktuellen Trends und 
              klassischen Materialien. Lassen Sie sich inspirieren und beraten!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-6 h-6" />
                <span>40+ Jahre Erfahrung</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-6 h-6" />
                <span>Persönliche Beratung</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MessageSquare className="w-6 h-6" />
                <span>Kostenlose Beratung</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+4961051234567"
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Termin vereinbaren</span>
              </a>
              <a
                href="mailto:info@fliesen-kny.de"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>E-Mail schreiben</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}