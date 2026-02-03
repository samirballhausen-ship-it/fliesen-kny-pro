import { Variants, Transition } from 'framer-motion';

// ========================================
// Premium Animation Library
// FliesenKny - Next-Gen Luxury Animations
// ========================================

// Premium easing curves
export const easings = {
  premium: [0.22, 1, 0.36, 1] as const,      // Smooth deceleration (expo-out)
  smooth: [0.16, 1, 0.3, 1] as const,        // Ultra smooth
  bounce: [0.34, 1.56, 0.64, 1] as const,    // Soft bounce
  cinematic: [0.83, 0, 0.17, 1] as const,    // Dramatic pause
  sharp: [0.4, 0, 0.2, 1] as const,          // Standard material
};

// Default transition presets
export const transitions = {
  fast: { duration: 0.3, ease: easings.premium } as Transition,
  medium: { duration: 0.5, ease: easings.premium } as Transition,
  slow: { duration: 0.8, ease: easings.smooth } as Transition,
  cinematic: { duration: 1.2, ease: easings.cinematic } as Transition,
  spring: { type: 'spring', stiffness: 300, damping: 30 } as Transition,
  springGentle: { type: 'spring', stiffness: 150, damping: 20 } as Transition,
};

// ========== TEXT ANIMATIONS ==========

// Text reveal - word by word (container)
export const textRevealContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

// Text reveal - single word (removed rotateX for Safari compatibility)
export const textRevealWord: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easings.smooth,
    },
  },
};

// Character by character reveal (container)
export const charRevealContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

// Single character
export const charReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easings.premium,
    },
  },
};

// ========== IMAGE ANIMATIONS ==========

// Image reveal with clip-path (from bottom)
export const imageRevealUp: Variants = {
  hidden: {
    clipPath: 'inset(100% 0% 0% 0%)',
    scale: 1.2,
  },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    scale: 1,
    transition: {
      duration: 1.2,
      ease: easings.cinematic,
    },
  },
};

// Image reveal from top
export const imageRevealDown: Variants = {
  hidden: {
    clipPath: 'inset(0% 0% 100% 0%)',
    scale: 1.1,
  },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    scale: 1,
    transition: {
      duration: 1,
      ease: easings.cinematic,
    },
  },
};

// Image reveal from left
export const imageRevealLeft: Variants = {
  hidden: {
    clipPath: 'inset(0% 100% 0% 0%)',
  },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      duration: 0.8,
      ease: easings.premium,
    },
  },
};

// Image reveal from right
export const imageRevealRight: Variants = {
  hidden: {
    clipPath: 'inset(0% 0% 0% 100%)',
  },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      duration: 0.8,
      ease: easings.premium,
    },
  },
};

// Cinematic zoom in
export const cinematicZoom: Variants = {
  hidden: {
    scale: 1.3,
    opacity: 0,
    filter: 'blur(20px)',
  },
  visible: {
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.5,
      ease: easings.cinematic,
    },
  },
};

// ========== CONTAINER/STAGGER ANIMATIONS ==========

// Staggered grid container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Faster stagger for smaller items
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Stagger item - fade up
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: easings.premium,
    },
  },
};

// Stagger item - slide from left
export const staggerItemLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easings.premium,
    },
  },
};

// Stagger item - slide from right
export const staggerItemRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easings.premium,
    },
  },
};

// ========== HOVER ANIMATIONS ==========

// Card lift with glow
export const cardLiftGlow: Variants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  hover: {
    y: -12,
    scale: 1.02,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2), 0 0 60px rgba(201, 148, 46, 0.1)',
    transition: {
      duration: 0.4,
      ease: easings.smooth,
    },
  },
};

// Simple lift
export const cardLift: Variants = {
  rest: {
    y: 0,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  },
  hover: {
    y: -8,
    boxShadow: '0 16px 32px rgba(0, 0, 0, 0.15)',
    transition: {
      duration: 0.3,
      ease: easings.premium,
    },
  },
};

// Glow pulse for buttons
export const glowPulse: Variants = {
  idle: {
    boxShadow: '0 0 0px rgba(201, 148, 46, 0)',
  },
  hover: {
    boxShadow: [
      '0 0 20px rgba(201, 148, 46, 0.3)',
      '0 0 40px rgba(201, 148, 46, 0.2)',
      '0 0 20px rgba(201, 148, 46, 0.3)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Button hover with subtle scale
export const buttonHover: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: easings.premium,
    },
  },
  tap: {
    scale: 0.98,
  },
};

// ========== PAGE TRANSITIONS ==========

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.premium,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: easings.smooth,
    },
  },
};

// Fade only (no movement)
export const fadeTransition: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: easings.premium },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: easings.smooth },
  },
};

// ========== SCROLL ANIMATIONS ==========

// Fade in when scrolling into view
export const fadeInView: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.premium,
    },
  },
};

// Scale in when scrolling into view
export const scaleInView: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easings.smooth,
    },
  },
};

// ========== PARALLAX HELPERS ==========

export const parallaxConfig = {
  slow: { inputRange: [0, 1], outputRange: ['0%', '10%'] },
  medium: { inputRange: [0, 1], outputRange: ['0%', '20%'] },
  fast: { inputRange: [0, 1], outputRange: ['0%', '40%'] },
  reverse: { inputRange: [0, 1], outputRange: ['0%', '-15%'] },
};

// ========== LIGHTBOX ANIMATIONS ==========

export const lightboxOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: easings.premium },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: easings.smooth },
  },
};

export const lightboxImage: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easings.smooth,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: easings.premium,
    },
  },
};

// ========== NAV ANIMATIONS ==========

export const navItemHover: Variants = {
  rest: { width: 0 },
  hover: {
    width: '100%',
    transition: {
      duration: 0.4,
      ease: easings.smooth,
    },
  },
};

export const mobileMenuOverlay: Variants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
  open: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export const mobileMenuContent: Variants = {
  closed: {
    x: '100%',
    transition: {
      duration: 0.4,
      ease: easings.premium,
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: easings.smooth,
    },
  },
};

export const mobileNavItem: Variants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 + i * 0.05,
      duration: 0.4,
      ease: easings.premium,
    },
  }),
};

// ========== DECORATIVE ANIMATIONS ==========

// Decorative line grow
export const lineGrow: Variants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: 100,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easings.premium,
    },
  },
};

// Floating animation
export const floatAnimation: Variants = {
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Rotate subtle
export const rotateSubtle: Variants = {
  animate: {
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ========== LOADING ANIMATIONS ==========

export const loadingScreen: Variants = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: easings.cinematic,
    },
  },
};

export const loadingLogo: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easings.smooth,
    },
  },
};

export const loadingProgress: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.2,
      ease: 'linear',
    },
  },
};

// ========== UTILITY FUNCTIONS ==========

// Split text into words for animation
export const splitTextIntoWords = (text: string): string[] => {
  return text.split(' ').filter(word => word.length > 0);
};

// Split text into characters for animation
export const splitTextIntoChars = (text: string): string[] => {
  return text.split('');
};

// Get stagger delay based on index
export const getStaggerDelay = (index: number, baseDelay = 0.1): number => {
  return index * baseDelay;
};

// Create custom viewport settings for scroll animations
export const createViewport = (margin = '-100px', once = true) => ({
  once,
  margin,
});
