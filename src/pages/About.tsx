import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Award,
  Users,
  Heart,
  Shield,
  Clock,
  Star,
  Phone,
  MapPin,
  Calendar,
  Lightbulb,
  CheckCircle
} from 'lucide-react'

export const About = () => {
  const companyValues = [
    {
      icon: Award,
      title: 'Qualität',
      description: 'Höchste handwerkliche Standards und sorgfältige Materialauswahl für langlebige Ergebnisse.'
    },
    {
      icon: Users,
      title: 'Erfahrung',
      description: 'Über 40 Jahre Expertise in allen Bereichen der Fliesenleger- und Natursteinarbeiten.'
    },
    {
      icon: Heart,
      title: 'Leidenschaft',
      description: 'Mit Herzblut und Hingabe verwirklichen wir Ihre Wünsche und Träume.'
    },
    {
      icon: Shield,
      title: 'Zuverlässigkeit',
      description: 'Termingerechte Ausführung und verlässliche Projektabwicklung seit Jahrzehnten.'
    },
    {
      icon: Clock,
      title: 'Pünktlichkeit',
      description: 'Respekt vor Ihrer Zeit - wir halten vereinbarte Termine und Fristen ein.'
    },
    {
      icon: Star,
      title: 'Kundenzufriedenheit',
      description: 'Ihr Lächeln ist unser Erfolg - 100% Zufriedenheitsgarantie auf alle Arbeiten.'
    }
  ]

  const teamMembers = [
    {
      name: 'Karl-Heinz Kny',
      role: 'Geschäftsführer & Fliesenlegermeister',
      experience: '45 Jahre Erfahrung',
      speciality: 'Naturstein & Restaurierung',
      description: 'Gründer und Herz des Unternehmens. Meister seines Fachs mit einer Leidenschaft für perfekte Details.'
    },
    {
      name: 'Stefan Kny',
      role: 'Betriebsleiter & Fliesenlegermeister',
      experience: '22 Jahre Erfahrung',
      speciality: 'Badsanierung & Großformate',
      description: 'Führt das Unternehmen in die Zukunft mit modernsten Techniken und innovativen Lösungen.'
    },
    {
      name: 'Michael Weber',
      role: 'Projektleiter & Fliesenleger',
      experience: '18 Jahre Erfahrung',
      speciality: 'Mosaik & Spezialarbeiten',
      description: 'Experte für komplexe Projekte und kunstvolle Mosaikarbeiten mit höchster Präzision.'
    },
    {
      name: 'Thomas Müller',
      role: 'Ausstellungsleiter & Berater',
      experience: '15 Jahre Erfahrung',
      speciality: 'Beratung & Planung',
      description: 'Ihr kompetenter Ansprechpartner für Materialauswahl und individuelle Projektplanung.'
    }
  ]

  const milestones = [
    {
      year: '1984',
      title: 'Firmengründung',
      description: 'Karl-Heinz Kny gründet den Fliesenlegerbetriebt in Mörfelden-Walldorf'
    },
    {
      year: '1992',
      title: 'Erste Ausstellung',
      description: 'Eröffnung der ersten Fliesenausstellung auf 300 m²'
    },
    {
      year: '2001',
      title: 'Betriebserweiterung',
      description: 'Umzug in die heutigen Räumlichkeiten mit 1000 m² Ausstellungsfläche'
    },
    {
      year: '2010',
      title: 'Zweite Generation',
      description: 'Stefan Kny übernimmt die Betriebsleitung und bringt moderne Techniken ein'
    },
    {
      year: '2018',
      title: 'Digitalisierung',
      description: 'Einführung von 3D-Planung und digitaler Projektvisualisierung'
    },
    {
      year: '2024',
      title: 'Heute',
      description: 'Moderner Meisterbetrieb mit über 40 Jahren Erfahrung und 12 Mitarbeitern'
    }
  ]

  const achievements = [
    '2000+ zufriedene Kunden',
    '5000+ realisierte Projekte',
    '1000+ m² Ausstellungsfläche',
    '12 qualifizierte Mitarbeiter',
    '5 Jahre Gewährleistung',
    '100% Kundenzufriedenheit'
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
              Über uns
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Seit über 40 Jahren steht Fliesen KNY für handwerkliche Qualität, 
              Zuverlässigkeit und Kundenzufriedenheit im Rhein-Main-Gebiet. 
              Lernen Sie uns und unsere Geschichte kennen.
            </p>
          </motion.div>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">40+</div>
              <div className="text-gray-600">Jahre Erfahrung</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">12</div>
              <div className="text-gray-600">Mitarbeiter</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">2000+</div>
              <div className="text-gray-600">Zufriedene Kunden</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-gray-600">m² Ausstellung</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
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
                Unsere Geschichte
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  1984 gründete Karl-Heinz Kny seinen Fliesenlegerbetriebt in 
                  Mörfelden-Walldorf mit einer klaren Vision: Höchste Qualität 
                  und persönlichen Service zu verbinden. Was als kleiner Handwerksbetrieb 
                  begann, entwickelte sich über die Jahre zu einem der führenden 
                  Fliesenlegerunternehmen im Rhein-Main-Gebiet.
                </p>
                <p>
                  Mit der Übernahme der Betriebsleitung durch Stefan Kny im Jahr 2010 
                  wurde das Unternehmen modernisiert, ohne dabei die traditionellen 
                  Handwerkswerte zu verlieren. Heute verbinden wir jahrzehntelange 
                  Erfahrung mit modernsten Techniken und Materialien.
                </p>
                <p>
                  Unser Erfolgsgeheimnis liegt in der perfekten Balance zwischen 
                  Tradition und Innovation, gepaart mit der Leidenschaft für 
                  handwerkliche Perfektion und dem Bestreben, jeden Kunden 
                  zu 100% zufriedenzustellen.
                </p>
              </div>

              {/* Achievements List */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Unsere Erfolge
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </motion.div>
                  ))}
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
                src="https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?w=600&h=800&fit=crop"
                alt="Fliesen KNY Ausstellung"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-primary-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Standort</p>
                    <p className="text-gray-600 text-sm">Mörfelden-Walldorf</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Meilensteine
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der Gründung bis heute - die wichtigsten Stationen 
              unserer Unternehmensgeschichte.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Unser Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lernen Sie die Menschen kennen, die mit Leidenschaft und 
              Expertise Ihre Projekte verwirklichen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-64 bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-1">
                    {member.role}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{member.experience}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{member.speciality}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Unsere Werte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diese Grundsätze leiten uns seit über 40 Jahren und 
              prägen unser tägliches Handeln.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
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
              Werden Sie Teil unserer Geschichte
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Lassen Sie uns gemeinsam Ihr nächstes Projekt verwirklichen. 
              Mit über 40 Jahren Erfahrung und der Leidenschaft für perfekte 
              Ergebnisse sind wir Ihr idealer Partner.
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
                <span>Direkt anrufen</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}