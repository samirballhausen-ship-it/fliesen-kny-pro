/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Karminrot mit Varianten
        primary: {
          DEFAULT: '#C41E3A',
          dark: '#9A1830',
          light: '#D63D55',
          lighter: '#E85A70',
        },
        // Warm Neutral Palette
        neutral: {
          // Hintergründe
          cream: '#F8F7F4',        // Creme-Weiß (Haupthintergrund)
          warm: '#E8E6E1',         // Warmes Grau
          beige: '#F5F3EF',        // Warm Beige (Akzent-Hintergrund)
          sand: '#EBE8E2',         // Sand-Ton
          // Text
          text: '#1A1A1A',         // Dunkel (Haupt-Text)
          muted: '#555555',        // Muted (Sekundär-Text)
          light: '#888888',        // Light (Tertiär-Text)
          // Zusätzliche Grautöne
          border: '#D5D2CC',       // Dezente Borders
          divider: '#E0DDD7',      // Trennlinien
        },
        // Semantische Farben
        background: {
          DEFAULT: '#FFFFFF',
          warm: '#F8F7F4',
          accent: '#F5F3EF',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Premium Typography Scale
        'hero': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'hero-sm': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h1': ['3.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h2': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['1.625rem', { lineHeight: '1.35', fontWeight: '500' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.6' }],
        'caption': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'overline': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.15em', fontWeight: '500' }],
      },
      // Großzügiges Premium Spacing
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
      },
      // Premium Box Shadows
      boxShadow: {
        'subtle': '0 1px 3px rgba(26, 26, 26, 0.04)',
        'soft': '0 4px 12px rgba(26, 26, 26, 0.06)',
        'medium': '0 8px 24px rgba(26, 26, 26, 0.08)',
        'elevated': '0 16px 48px rgba(26, 26, 26, 0.10)',
        'deep': '0 24px 64px rgba(26, 26, 26, 0.12)',
        'primary': '0 8px 24px rgba(196, 30, 58, 0.15)',
        'primary-lg': '0 16px 40px rgba(196, 30, 58, 0.20)',
        'inner-soft': 'inset 0 2px 4px rgba(26, 26, 26, 0.04)',
      },
      // Erweiterte Border Radius
      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.625rem',
        'lg': '0.875rem',
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      // Animationen
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      // Transition Timing
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      // Backdrop Blur
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
