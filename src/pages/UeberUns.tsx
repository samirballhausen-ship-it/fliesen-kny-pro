import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Users, Heart, ShieldCheck } from 'lucide-react'

export const UeberUns = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const values = [
    {
      title: 'Exzellenz',
      description: 'Jedes Material wird nach Haptik, Langlebigkeit und Designanspruch ausgewählt.',
      icon: Award
    },
    {
      title: 'Partnerschaft',
      description: 'Wir arbeiten eng mit Architekten, Planern und Handwerkern zusammen.',
      icon: Users
    },
    {
      title: 'Vertrauen',
      description: 'Verlässliche Beratung und transparente Abläufe seit vier Jahrzehnten.',
      icon: ShieldCheck
    },
    {
      title: 'Leidenschaft',
      description: 'Wir schaffen Räume mit Charakter und begleiten Projekte mit Herz.',
      icon: Heart
    }
  ]

  return (
    <div className="bg-stone-50" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img
            src="/images/about-team.jpg"
            alt="Team von Fliesen KNY"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 container-custom pt-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-6 px-4 py-1 border border-white/30 backdrop-blur-md bg-white/10 text-white text-xs uppercase tracking-[0.3em]"
            >
              Seit 1982
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl text-white mb-8 leading-tight"
            >
              Familiengeführt. <br />
              Anspruchsvoll. <br />
              <span className="text-stone-300 italic">Persönlich.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-stone-200 max-w-2xl leading-relaxed font-light"
            >
              Seit über 40 Jahren stehen wir für hochwertige Fliesen- und Sanitärkonzepte,
              die Design, Funktion und Handwerk vereinen.
            </motion.p>
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
              className="order-2 lg:order-1 relative"
            >
              <div className="aspect-[4/5] overflow-hidden bg-stone-200 relative z-10">
                <img
                  src="/images/gallery-modern-kitchen.jpg"
                  alt="Showroom-Inspiration"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute -top-6 -left-6 w-full h-full border border-stone-300 z-0 hidden lg:block" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-8 leading-tight">
                Unsere <span className="italic text-stone-500">Geschichte.</span>
              </h2>
              <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed">
                <p>
                  Fliesen KNY steht seit 1982 für exklusive Oberflächen und anspruchsvolle
                  Badkonzepte. Was als regionales Fachgeschäft begann, ist heute eine der
                  ersten Adressen für hochwertige Fliesenwelten im Rhein-Main-Gebiet.
                </p>
                <p>
                  Unser Anspruch ist es, Materialien so zu kombinieren, dass Räume
                  Persönlichkeit gewinnen – mit klaren Linien, natürlichen Strukturen und
                  einem Sinn für zeitlose Eleganz.
                </p>
                <p>
                  Das Ergebnis: langfristige Partnerschaften, zufriedene Kunden und
                  Projekte, die bis ins Detail überzeugen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-stone-900 text-white relative overflow-hidden">
        {/* Background pattern/texture could go here */}
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                Werte, die man spürt
              </h2>
              <p className="text-stone-400 max-w-2xl mx-auto text-lg font-light">
                Unsere Arbeit steht für Eleganz, Präzision und vertrauensvolle Zusammenarbeit.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 border border-stone-700 rounded-full group-hover:border-warm-500 group-hover:text-warm-500 transition-colors duration-300 text-stone-300">
                  <value.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl mb-4 group-hover:text-warm-100 transition-colors">{value.title}</h3>
                <p className="text-stone-400 leading-relaxed font-light">{value.description}</p>
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
              <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-8">
                Ein Team, das <br />
                <span className="text-stone-400 italic">Räume versteht.</span>
              </h2>
              <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed mb-10">
                <p>
                  Unsere Berater kombinieren handwerkliche Expertise mit einem
                  feinen Gespür für Material und Raumwirkung. Dadurch entstehen
                  Konzepte, die sowohl ästhetisch als auch funktional überzeugen.
                </p>
                <p>
                  Wir begleiten Ihr Projekt von der Idee bis zur finalen Verlegung
                  und koordinieren alle Schnittstellen mit Ihren Fachbetrieben.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12 border-t border-stone-200 pt-10">
                <div>
                  <p className="font-display text-5xl text-stone-900 mb-2">40+</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Jahre Erfahrung</p>
                </div>
                <div>
                  <p className="font-display text-5xl text-stone-900 mb-2">1000m²</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Ausstellung</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden bg-stone-200 relative z-10">
                <img
                  src="/images/service-tile-installation.jpg"
                  alt="Beratung bei Fliesen KNY"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 border border-stone-300 -z-0 hidden lg:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-warm-50/50">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-stone-900 mb-16">
              Warum Fliesen KNY?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                number: '01',
                title: 'Kuratierte Selektion',
                description: 'Wir führen nur Marken und Manufakturen, die unseren hohen Ansprüchen an Design und Qualität genügen.'
              },
              {
                number: '02',
                title: 'Persönliche Beratung',
                description: 'Wir nehmen uns Zeit für Ihre Wünsche und finden kreative Lösungen auch für komplexe Raumsituationen.'
              },
              {
                number: '03',
                title: 'Haptisches Erlebnis',
                description: 'In unserem Showroom können Sie Materialien nicht nur sehen, sondern fühlen und im Raumkontext erleben.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <span className="inline-block text-sm font-bold text-warm-600 mb-4 border border-warm-200 rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-warm-600 group-hover:text-white transition-all duration-300">
                  {item.number}
                </span>
                <h3 className="font-display text-2xl text-stone-900 mb-4">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white border-t border-stone-100">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-stone-900 mb-8">
              Lernen Sie uns persönlich kennen
            </h2>
            <p className="text-lg text-stone-600 mb-10 max-w-xl mx-auto font-light">
              Besuchen Sie unsere Ausstellung und lassen Sie sich individuell beraten.
              Wir freuen uns auf Sie.
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
