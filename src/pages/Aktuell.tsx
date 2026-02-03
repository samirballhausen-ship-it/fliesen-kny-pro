import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const allNews = [
  {
    id: 1,
    title: "Neue Frühjahrskollektion 2026",
    excerpt: "Entdecken Sie unsere neuesten Fliesenkollektionen von Villeroy & Boch und Marazzi. Natürliche Töne und moderne Formate für Ihr Zuhause.",
    content: "Mit der neuen Frühjahrskollektion 2026 bringen wir frische Inspiration in Ihre Räume. Die neuesten Trends setzen auf natürliche Erdtöne, großformatige Fliesen und innovative Oberflächen, die sich perfekt in moderne Wohnkonzepte einfügen. Besuchen Sie unsere Ausstellung und lassen Sie sich von den aktuellen Kollektionen namhafter Hersteller wie Villeroy & Boch, Marazzi und vielen anderen inspirieren.",
    date: "Januar 2026",
    category: "Sortiment",
    image: "/images/news/news-fruehjahr.png",
    featured: true
  },
  {
    id: 2,
    title: "Erweiterte Öffnungszeiten",
    excerpt: "Ab sofort sind wir auch samstags von 9:00 bis 12:30 Uhr für Sie da. Vereinbaren Sie Ihren persönlichen Beratungstermin.",
    content: "Um Ihnen noch mehr Flexibilität bei Ihrer Badplanung zu bieten, haben wir unsere Öffnungszeiten erweitert. Besuchen Sie uns jetzt auch samstags von 9:00 bis 12:30 Uhr. Unter der Woche sind wir montags bis freitags von 9:00 bis 12:30 Uhr und von 14:00 bis 18:00 Uhr für Sie da. Für eine ausführliche Beratung empfehlen wir Ihnen, vorab einen Termin zu vereinbaren.",
    date: "Februar 2026",
    category: "Service",
    image: "/images/news/news-service.png",
    featured: false
  },
  {
    id: 3,
    title: "40 Jahre Fliesen Kny",
    excerpt: "Seit über 40 Jahren Ihr Partner für exklusive Fliesen im Rhein-Main-Gebiet. Danke für Ihr Vertrauen!",
    content: "Was 1986 als kleiner Familienbetrieb begann, ist heute eine der größten Fliesenausstellungen im Rhein-Main-Gebiet. Über 40 Jahre Erfahrung, Leidenschaft und das Streben nach höchster Qualität haben uns zu dem gemacht, was wir heute sind. Wir danken allen Kunden, Partnern und Mitarbeitern, die diesen Weg mit uns gegangen sind. Die Zukunft gestalten wir gemeinsam weiter.",
    date: "2026",
    category: "Jubiläum",
    image: "/images/news/news-jubilaeum.png",
    featured: false
  },
  {
    id: 4,
    title: "Neue Naturstein-Kollektion",
    excerpt: "Edle Natursteine aus aller Welt. Marmor, Granit und Schiefer in höchster Qualität jetzt in unserer Ausstellung.",
    content: "Naturstein ist zeitlos und einzigartig. Jede Platte erzählt ihre eigene Geschichte. Entdecken Sie unsere erweiterte Naturstein-Kollektion mit exklusiven Marmor-, Granit- und Schiefervarianten aus Italien, Brasilien und Portugal. Unsere Experten beraten Sie gerne zu Pflege, Verlegung und den vielfältigen Einsatzmöglichkeiten.",
    date: "Dezember 2025",
    category: "Sortiment",
    image: "/images/kategorien/kategorie-naturstein.png",
    featured: false
  },
  {
    id: 5,
    title: "3D-Badplanung jetzt verfügbar",
    excerpt: "Sehen Sie Ihr neues Bad, bevor es gebaut wird. Fotorealistische 3D-Visualisierungen in unserer Ausstellung.",
    content: "Mit modernster 3D-Technologie machen wir Ihre Badträume sichtbar, bevor die erste Fliese verlegt wird. Unsere Experten erstellen fotorealistische Visualisierungen Ihres neuen Badezimmers, sodass Sie Materialien, Farben und Lichteffekte im Voraus erleben können. Vereinbaren Sie einen Termin für Ihre persönliche 3D-Badplanung.",
    date: "November 2025",
    category: "Service",
    image: "/images/services/service-3d-planung.png",
    featured: false
  },
  {
    id: 6,
    title: "Handwerker-Netzwerk ausgebaut",
    excerpt: "Zertifizierte Fliesenleger aus der Region. Wir vermitteln Ihnen die besten Fachleute für Ihr Projekt.",
    content: "Die perfekte Fliese verdient eine perfekte Verlegung. Deshalb haben wir unser Netzwerk aus qualifizierten Handwerkern erweitert. Alle unsere Partner sind zertifizierte Fachbetriebe aus der Region Rhein-Main, mit denen wir seit Jahren vertrauensvoll zusammenarbeiten. Sprechen Sie uns an, wir vermitteln Ihnen den passenden Experten für Ihr Projekt.",
    date: "Oktober 2025",
    category: "Service",
    image: "/images/services/service-handwerker.png",
    featured: false
  }
]

export const Aktuell: React.FC = () => {
  const featuredNews = allNews.find(news => news.featured)
  const regularNews = allNews.filter(news => !news.featured)

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-brand-red font-medium tracking-[0.2em] text-xs uppercase mb-4 block">
            Neuigkeiten
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-dark mb-6">
            Aktuelles aus unserem Haus
          </h1>
          <p className="text-neutral-muted text-lg font-light leading-relaxed">
            Bleiben Sie informiert über neue Kollektionen, erweiterte Services und Veranstaltungen bei Fliesen Kny.
          </p>
        </motion.div>

        {/* Featured Article */}
        {featuredNews && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative aspect-[4/3] lg:aspect-[3/2] overflow-hidden group">
                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-brand-red text-white px-4 py-2 text-xs font-medium tracking-wider uppercase z-20">
                  Aktuell
                </span>
              </div>
              <div className="lg:pl-8">
                <div className="flex items-center gap-4 text-neutral-muted text-sm mb-4">
                  <span className="bg-neutral-100 px-3 py-1 text-xs font-medium tracking-wider uppercase">
                    {featuredNews.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredNews.date}
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-neutral-dark mb-4">
                  {featuredNews.title}
                </h2>
                <p className="text-neutral-muted font-light leading-relaxed mb-6">
                  {featuredNews.content}
                </p>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 text-brand-red uppercase tracking-widest text-xs font-bold hover:gap-4 transition-all"
                >
                  Mehr erfahren <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.article>
        )}

        {/* Divider */}
        <div className="border-t border-neutral-200 my-16"></div>

        {/* Regular News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {regularNews.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium tracking-wider uppercase text-neutral-dark z-20">
                  {item.category}
                </span>
              </div>

              <div className="flex items-center gap-4 text-neutral-muted text-sm mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </span>
              </div>
              <h3 className="font-serif text-xl text-neutral-dark mb-3 group-hover:text-brand-red transition-colors">
                {item.title}
              </h3>
              <p className="text-neutral-muted font-light leading-relaxed text-sm mb-4">
                {item.excerpt}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center bg-neutral-50 py-16 px-8"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-neutral-dark mb-4">
            Immer bestens informiert
          </h3>
          <p className="text-neutral-muted font-light max-w-2xl mx-auto mb-8">
            Besuchen Sie uns in unserer Ausstellung und erleben Sie die neuesten Trends live. Unsere Experten beraten Sie gerne persönlich.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-3 bg-brand-red text-white px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-neutral-dark transition-colors"
          >
            Kontakt aufnehmen <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Aktuell
