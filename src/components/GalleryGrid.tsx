import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
  title: string
}

// Sample images - in a real project, these would come from a CMS or API
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&h=600&fit=crop',
    alt: 'Moderne Badezimmergestaltung',
    category: 'Badsanierung',
    title: 'Moderne Badezimmergestaltung'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop',
    alt: 'Naturstein Verlegung',
    category: 'Naturstein',
    title: 'Naturstein Verlegung'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=800&h=600&fit=crop',
    alt: 'Küchen Fliesenverlegung',
    category: 'Fliesenverlegung',
    title: 'Küchen Fliesenverlegung'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1631889993959-41b4dbaebfab?w=800&h=600&fit=crop',
    alt: 'Mosaik Kunstwerk',
    category: 'Mosaik',
    title: 'Mosaik Kunstwerk'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=600&fit=crop',
    alt: 'Luxusbad Komplettsanierung',
    category: 'Badsanierung',
    title: 'Luxusbad Komplettsanierung'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
    alt: 'Wohnzimmer Fliesen',
    category: 'Fliesenverlegung',
    title: 'Wohnzimmer Fliesen'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    alt: 'Terrassenfliesen Naturstein',
    category: 'Naturstein',
    title: 'Terrassenfliesen Naturstein'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    alt: 'Detailarbeit Mosaik',
    category: 'Mosaik',
    title: 'Detailarbeit Mosaik'
  },
]

const categories = ['Alle', 'Fliesenverlegung', 'Naturstein', 'Mosaik', 'Badsanierung']

export const GalleryGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('Alle')
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredImages = selectedCategory === 'Alle' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (image: GalleryImage) => {
    const index = filteredImages.findIndex(img => img.id === image.id)
    setLightboxIndex(index)
    setLightboxImage(image)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const goToPrevious = () => {
    const newIndex = lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1
    setLightboxIndex(newIndex)
    setLightboxImage(filteredImages[newIndex])
  }

  const goToNext = () => {
    const newIndex = lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1
    setLightboxIndex(newIndex)
    setLightboxImage(filteredImages[newIndex])
  }

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-gray-200 cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-medium text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.category}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                  >
                    <ChevronLeft className="w-10 h-10" />
                  </button>

                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                  >
                    <ChevronRight className="w-10 h-10" />
                  </button>
                </>
              )}

              {/* Image */}
              <motion.img
                key={lightboxImage.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                <h3 className="text-xl font-semibold mb-1">{lightboxImage.title}</h3>
                <p className="text-gray-300">{lightboxImage.category}</p>
                <div className="mt-2 text-sm text-gray-400">
                  {lightboxIndex + 1} von {filteredImages.length}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}