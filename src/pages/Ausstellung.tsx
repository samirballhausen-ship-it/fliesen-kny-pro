import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Ausstellung = () => {
  const collections = [
    {
      title: 'Keramik & Großformate',
      description: 'Feinsteinzeug, Steinoptik, Betonoptik und XXL-Formate für architektonische Flächen.',
      image: '/images/service-showroom.jpg',
      features: ['Großformate', 'Feinsteinzeug', 'Wand & Boden', 'Indoor/Outdoor']
    },
    {
      title: 'Naturstein & Manufaktur',
      description: 'Marmor, Travertin und Schiefer – sorgfältig ausgewählt für exklusive Projekte.',
      image: '/images/gallery-outdoor-terrace.jpg',
      features: ['Marmor', 'Travertin', 'Schiefer', 'Natursteinpflege']
    },
    {
      title: 'Mosaik & Design',
      description: 'Detailverliebte Akzente, individuelle Muster und handveredelte Oberflächen.',
      image: '/images/service-mosaic-art.jpg',
      features: ['Glas & Metall', 'Sonderformate', 'Bordüren', 'Akzentflächen']
    },
    {
      title: 'Sanitär & Ausstattung',
      description: 'Design-Armaturen, Waschtische und komplette Badwelten mit stimmigem Konzept.',
      image: '/images/hero-luxury-bathroom.jpg',
      features: ['Premium-Armaturen', 'Badmöbel', 'Spa-Konzepte', 'Accessoires']
    }
  ]

  const galleryImages = [
    '/images/gallery-luxury-bathroom.jpg',
    '/images/gallery-modern-kitchen.jpg',
    '/images/gallery-outdoor-terrace.jpg',
    '/images/service-tile-installation.jpg',
    '/images/service-showroom.jpg',
    '/images/about-team.jpg'
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <img
            src="/images/service-showroom.jpg"
            alt="Showroom von Fliesen KNY"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/60" />
        </div>
        <div className="relative container-custom">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-stone-200 mb-4">
                Ausstellung
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Inspiration auf über 1000 m²
              </h1>
              <p className="text-lg text-stone-200 leading-relaxed">
                Erleben Sie Materialien, Farben und Texturen in einer der größten
                Fliesen- und Sanitär-Ausstellungen im Rhein-Main-Gebiet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="divider mb-8" />
              <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-6">
                Räume erleben, Materialien verstehen
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                Unsere Ausstellung ist wie ein kuratiertes Interior-Atelier: Sie sehen
                Flächen in echten Raumkonzepten und spüren die Qualität direkt vor Ort.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                Gemeinsam mit unseren Beratern entwickeln Sie ein stimmiges Gesamtbild –
                von Fliesen über Naturstein bis hin zu Sanitär und Accessoires.
              </p>
              <Link to="/kontakt" className="btn-primary">
                Beratungstermin vereinbaren
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="aspect-[4/5] overflow-hidden bg-stone-200">
                  <img
                    src="/images/gallery-modern-kitchen.jpg"
                    alt="Materialinszenierung"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden bg-stone-200">
                  <img
                    src="/images/service-tile-installation.jpg"
                    alt="Fliesenverlegung"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square overflow-hidden bg-stone-200">
                  <img
                    src="/images/gallery-outdoor-terrace.jpg"
                    alt="Outdoorflächen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] overflow-hidden bg-stone-200">
                  <img
                    src="/images/hero-luxury-bathroom.jpg"
                    alt="Badgestaltung"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="divider mx-auto mb-8" />
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-stone-900 mb-4">
                Kuratierte Kollektionen
              </h2>
              <p className="text-stone-600 max-w-2xl mx-auto">
                Materialien, die zeitlose Eleganz mit technischer Präzision verbinden.
              </p>
            </motion.div>
          </div>

          <div className="space-y-20">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[3/2] overflow-hidden bg-stone-200">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl text-stone-900 mb-4">
                    {collection.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed mb-6">
                    {collection.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {collection.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-4 py-2 bg-white text-stone-700 text-sm border border-stone-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="divider mx-auto mb-8" />
              <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-4">
                Impressionen aus dem Showroom
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="aspect-[3/2] overflow-hidden bg-stone-200 group"
              >
                <img
                  src={image}
                  alt={`Ausstellung Impression ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-stone-900 text-white">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Erleben Sie Materialien mit allen Sinnen
            </h2>
            <p className="text-lg text-stone-400 mb-8 max-w-xl mx-auto">
              Vereinbaren Sie einen persönlichen Termin und lassen Sie sich von unserem
              Team durch die Ausstellung führen.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/kontakt" className="btn-primary bg-white text-stone-900 hover:bg-stone-100">
                Termin vereinbaren
              </Link>
              <a href="tel:0610533067" className="btn-outline border-stone-600 text-white hover:bg-stone-800">
                06105 – 330 67
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
