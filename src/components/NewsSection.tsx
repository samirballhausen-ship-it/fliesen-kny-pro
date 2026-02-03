import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const newsItems = [
  {
    id: 1,
    title: "Neue Frühjahrskollektion 2026",
    excerpt: "Entdecken Sie unsere neuesten Fliesenkollektionen von Villeroy & Boch und Marazzi. Natürliche Töne und moderne Formate für Ihr Zuhause.",
    date: "Januar 2026",
    category: "Sortiment",
    image: "/images/news/news-fruehjahr.png"
  },
  {
    id: 2,
    title: "Erweiterte Öffnungszeiten",
    excerpt: "Ab sofort sind wir auch samstags von 9:00 bis 12:30 Uhr für Sie da. Vereinbaren Sie Ihren persönlichen Beratungstermin.",
    date: "Februar 2026",
    category: "Service",
    image: "/images/news/news-service.png"
  },
  {
    id: 3,
    title: "40 Jahre Fliesen Kny",
    excerpt: "Seit über 40 Jahren Ihr Partner für exklusive Fliesen im Rhein-Main-Gebiet. Danke für Ihr Vertrauen!",
    date: "2026",
    category: "Jubiläum",
    image: "/images/news/news-jubilaeum.png"
  }
]

const NewsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <motion.span
              className="text-brand-red font-medium tracking-[0.2em] text-xs uppercase mb-4 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Aktuell
            </motion.span>
            <motion.h2
              className="font-serif text-4xl md:text-5xl text-neutral-dark"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Neues aus unserem Haus
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/aktuell"
              className="hidden md:flex items-center gap-2 text-brand-red uppercase tracking-widest text-xs font-bold hover:gap-4 transition-all mt-6 md:mt-0"
            >
              Alle Neuigkeiten <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium tracking-wider uppercase text-neutral-dark z-20">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex items-center gap-4 text-neutral-muted text-sm mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </span>
              </div>
              <h3 className="font-serif text-xl text-neutral-dark mb-3 group-hover:text-brand-red transition-colors">
                {item.title}
              </h3>
              <p className="text-neutral-muted font-light leading-relaxed text-sm">
                {item.excerpt}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Mobile CTA */}
        <motion.div
          className="md:hidden mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            to="/aktuell"
            className="inline-flex items-center gap-2 text-brand-red uppercase tracking-widest text-xs font-bold"
          >
            Alle Neuigkeiten <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsSection
