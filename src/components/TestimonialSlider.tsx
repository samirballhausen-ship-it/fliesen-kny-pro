import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  image?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Michael Schmidt',
    role: 'Hausbesitzer',
    content: 'Fliesen KNY hat unser Badezimmer komplett renoviert. Die Qualität der Arbeit und die Beratung waren hervorragend. Wir sind absolut zufrieden!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Weber',
    role: 'Architektin',
    content: 'Als Architektin arbeite ich regelmäßig mit Fliesen KNY zusammen. Zuverlässig, pünktlich und höchste Qualität - kann ich nur empfehlen.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Thomas Müller',
    role: 'Restaurant-Besitzer',
    content: 'Die Fliesenverlegung in unserem Restaurant wurde perfekt ausgeführt. Trotz enger Zeitvorgaben war das Team flexibel und professionell.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Julia Hoffmann',
    role: 'Privatkunde',
    content: 'Von der Beratung bis zur Fertigstellung - alles war perfekt organisiert. Das Team war freundlich und die Ausstellung hat uns sehr geholfen.',
    rating: 5,
  },
]

export const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative bg-gray-50 py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Über 40 Jahre Erfahrung sprechen für sich. Lesen Sie, was unsere zufriedenen Kunden über uns sagen.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-80 overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0 bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  {/* Stars */}
                  <div className="flex justify-center space-x-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-secondary-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-lg text-gray-700 mb-8 italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-semibold text-lg">
                        {testimonials[currentIndex].name.charAt(0)}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Vorheriges Testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Nächstes Testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-primary-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Gehe zu Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}