import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Ausstellung = () => {
  const collections = [
    {
      title: 'Keramische Fliesen',
      description: 'Von klassisch bis modern – unsere Kollektion umfasst Wandfliesen, Bodenfliesen und Großformate führender Hersteller aus Italien, Spanien und Deutschland.',
      image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=1200&h=800&fit=crop',
      features: ['Großformate bis 120x120cm', 'Feinsteinzeug', 'Dekorfliesen', 'Outdoor-Fliesen']
    },
    {
      title: 'Naturstein',
      description: 'Edle Natursteine aus aller Welt – Marmor, Granit, Travertin und Schiefer in einzigartiger Qualität für anspruchsvolle Projekte.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
      features: ['Marmor', 'Granit', 'Travertin', 'Schiefer']
    },
    {
      title: 'Mosaik & Dekor',
      description: 'Kunstvolle Mosaikarbeiten und dekorative Elemente für individuelle Akzente in Bad, Küche und Wohnbereich.',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&h=800&fit=crop',
      features: ['Glasmosaik', 'Steinmosaik', 'Metallmosaik', 'Handgefertigt']
    },
    {
      title: 'Sanitärobjekte',
      description: 'Ausgefallene Waschtische, Badewannen und Armaturen von internationalen Design-Manufakturen.',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop',
      features: ['Design-Waschtische', 'Freistehende Wannen', 'Premium-Armaturen', 'Accessoires']
    }
  ]

  const galleryImages = [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop'
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
                Unsere Ausstellung
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-6">
                Inspiration auf über 1000 m²
              </h1>
              <p className="text-lg text-stone-600 leading-relaxed">
                Besuchen Sie eine der größten Ausstellungen für besondere Fliesen,
                Natursteine und Sanitärobjekte im Rhein-Main-Gebiet. Erleben Sie
                Materialien, Farben und Texturen hautnah.
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
                Ein einzigartiges Sortiment
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                Seit über 40 Jahren bieten wir unseren Kunden ein sorgfältig
                kuratiertes Sortiment namhafter Markenhersteller und spezialisierter
                Manufakturen aus der ganzen Welt.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                Von klassischen Designs bis zu avantgardistischen Kreationen –
                bei uns finden Sie das Besondere für Ihr Zuhause. Unsere erfahrenen
                Fachberater stehen Ihnen mit Kompetenz und Leidenschaft zur Seite.
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
                    src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=400&h=500&fit=crop"
                    alt="Showroom Detail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden bg-stone-200">
                  <img
                    src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=400&fit=crop"
                    alt="Fliesenauswahl"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square overflow-hidden bg-stone-200">
                  <img
                    src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=400&h=400&fit=crop"
                    alt="Naturstein"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] overflow-hidden bg-stone-200">
                  <img
                    src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=500&fit=crop"
                    alt="Baddesign"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="section-padding bg-stone-100">
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
                Unsere Kollektionen
              </h2>
              <p className="text-stone-600 max-w-2xl mx-auto">
                Entdecken Sie unser vielfältiges Angebot an hochwertigen Materialien.
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
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
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
                  <p className="text-sm uppercase tracking-elegant text-stone-500 mb-4">
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
                        className="px-4 py-2 bg-stone-50 text-stone-700 text-sm"
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
                Impressionen
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
              Erleben Sie unsere Ausstellung
            </h2>
            <p className="text-lg text-stone-400 mb-8 max-w-xl mx-auto">
              Vereinbaren Sie einen persönlichen Beratungstermin und lassen Sie
              sich von unserem Team durch die Ausstellung führen.
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

      {/* Opening Hours & Location */}
      <section className="section-padding-sm bg-stone-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xs uppercase tracking-elegant text-stone-500 mb-4">
                Öffnungszeiten
              </h3>
              <div className="text-stone-700 space-y-1">
                <p>Montag – Freitag: 9:00 – 12:30 & 14:00 – 18:00</p>
                <p>Samstag: 9:00 – 12:30</p>
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-elegant text-stone-500 mb-4">
                Anfahrt
              </h3>
              <div className="text-stone-700 space-y-1">
                <p>Benzstraße 3</p>
                <p>64546 Mörfelden-Walldorf</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
