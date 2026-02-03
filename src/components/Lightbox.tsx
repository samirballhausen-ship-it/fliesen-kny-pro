import React, { useEffect, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { lightboxOverlay, lightboxImage } from '../utils/animations';

interface LightboxImage {
  src: string;
  alt?: string;
  title?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const currentImage = images[currentIndex];
  const hasNext = currentIndex < images.length - 1;
  const hasPrev = currentIndex > 0;

  // Navigate to next/previous image
  const goNext = useCallback(() => {
    if (hasNext) {
      onNavigate(currentIndex + 1);
    }
  }, [hasNext, currentIndex, onNavigate]);

  const goPrev = useCallback(() => {
    if (hasPrev) {
      onNavigate(currentIndex - 1);
    }
  }, [hasPrev, currentIndex, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          goNext();
          break;
        case 'ArrowLeft':
          goPrev();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, goNext, goPrev]);

  // Touch/swipe handling for mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && hasNext) {
      goNext();
    } else if (isRightSwipe && hasPrev) {
      goPrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={lightboxOverlay}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 bg-luxury-charcoal/95 backdrop-blur-xl
                     flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12
                       flex items-center justify-center
                       bg-luxury-smoke/50 hover:bg-brand-red/20
                       border border-luxury-steel/50 hover:border-brand-red/50
                       rounded-full text-cream-100
                       transition-all duration-300 ease-premium
                       cursor-pointer z-10"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* Navigation - Previous */}
          {hasPrev && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12
                         flex items-center justify-center
                         bg-luxury-smoke/50 hover:bg-gold-500/20
                         border border-luxury-steel/50 hover:border-gold-500/50
                         rounded-full text-cream-100
                         transition-all duration-300 ease-premium
                         cursor-pointer z-10"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          )}

          {/* Navigation - Next */}
          {hasNext && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12
                         flex items-center justify-center
                         bg-luxury-smoke/50 hover:bg-gold-500/20
                         border border-luxury-steel/50 hover:border-gold-500/50
                         rounded-full text-cream-100
                         transition-all duration-300 ease-premium
                         cursor-pointer z-10"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          )}

          {/* Image container */}
          <motion.div
            className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                variants={lightboxImage}
                initial="hidden"
                animate="visible"
                exit="exit"
                src={currentImage.src}
                alt={currentImage.alt || `Bild ${currentIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg
                           shadow-2xl select-none"
                draggable={false}
              />
            </AnimatePresence>
          </motion.div>

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2
                       px-4 py-2 bg-luxury-smoke/60 backdrop-blur-sm
                       border border-luxury-steel/30 rounded-full"
          >
            <span className="text-gold-500 font-medium">{currentIndex + 1}</span>
            <span className="text-cream-400 mx-2">/</span>
            <span className="text-cream-400">{images.length}</span>
          </motion.div>

          {/* Image title (if provided) */}
          {currentImage.title && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.3 }}
              className="absolute top-6 left-1/2 -translate-x-1/2
                         px-6 py-3 bg-luxury-smoke/60 backdrop-blur-sm
                         border border-luxury-steel/30 rounded-lg
                         max-w-[80vw]"
            >
              <p className="text-cream-100 text-sm font-medium text-center">
                {currentImage.title}
              </p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
