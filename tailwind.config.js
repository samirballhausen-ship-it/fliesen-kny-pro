/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Red - Primärfarbe
        'brand-red': '#CE1A1E',
        'brand-dark': '#A01518',

        // NEW: Dark Luxury Base Colors
        luxury: {
          charcoal: '#0D0D0D',     // Primary dark background
          anthracite: '#141414',    // Secondary dark
          graphite: '#1A1A1A',      // Elevated surfaces
          smoke: '#2A2A2A',         // Borders on dark
          steel: '#3D3D3D',         // Lighter borders
          950: '#0A0A0A',           // Deepest black
        },

        // NEW: Gold/Brass Accent System for Glow Effects
        gold: {
          50: '#FBF8F1',
          100: '#F5EED8',
          200: '#EBD9AB',
          300: '#DFC07A',
          400: '#D4A84E',
          500: '#C9942E',           // Primary gold accent
          600: '#B37A24',
          700: '#8F5E20',
          800: '#754D21',
          900: '#61411F',
          DEFAULT: '#C9942E',
        },

        // NEW: Warm Cream for Text on Dark Backgrounds
        cream: {
          50: '#FDFCFA',
          100: '#FAF8F5',
          200: '#F5F1EA',
          300: '#EBE5DB',
          400: '#D9D0C1',
          500: '#C7BAA7',
          DEFAULT: '#FAF8F5',
        },

        // Neutral Palette - Premium Editorial
        neutral: {
          cream: '#FAF9F6',      // Warm Cream Background
          beige: '#F5F3EF',      // Slightly warmer accent
          warm: '#E8E6E1',       // Warm gray
          sand: '#EBE8E2',       // Sand tone
          dark: '#1A1A1A',       // Dark text/backgrounds
          muted: '#555555',      // Muted text
          light: '#888888',      // Light text
          border: '#D5D2CC',     // Borders
          divider: '#E0DDD7',    // Dividers
          text: '#1A1A1A',       // Main text
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
          950: '#0A0A0A',
        },

        // Primary (alias for brand-red)
        primary: {
          DEFAULT: '#CE1A1E',
          dark: '#A01518',
          light: '#E83338',
          lighter: '#F04448',
        },

        // Background colors
        background: {
          DEFAULT: '#FFFFFF',
          warm: '#FAF9F6',
          accent: '#F5F3EF',
          dark: '#0D0D0D',
          'dark-elevated': '#141414',
        }
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        cursive: ['Dancing Script', 'cursive'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        // Premium Typography Scale
        'hero': ['5rem', { lineHeight: '0.9', letterSpacing: '-0.03em', fontWeight: '400' }],
        'hero-sm': ['3.5rem', { lineHeight: '0.95', letterSpacing: '-0.02em', fontWeight: '400' }],
        'h1': ['3.25rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h3': ['1.75rem', { lineHeight: '1.3' }],
        'h4': ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.6' }],
        'caption': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'overline': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.2em', fontWeight: '500' }],
      },

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

      boxShadow: {
        'subtle': '0 1px 3px rgba(26, 26, 26, 0.04)',
        'soft': '0 4px 12px rgba(26, 26, 26, 0.06)',
        'medium': '0 8px 24px rgba(26, 26, 26, 0.08)',
        'elevated': '0 16px 48px rgba(26, 26, 26, 0.10)',
        'deep': '0 24px 64px rgba(26, 26, 26, 0.12)',
        'primary': '0 8px 24px rgba(206, 26, 30, 0.15)',
        'primary-lg': '0 16px 40px rgba(206, 26, 30, 0.20)',
        'inner-soft': 'inset 0 2px 4px rgba(26, 26, 26, 0.04)',
        // NEW: Gold Glow Shadows
        'glow-gold': '0 0 40px rgba(201, 148, 46, 0.15)',
        'glow-gold-md': '0 0 60px rgba(201, 148, 46, 0.20)',
        'glow-gold-lg': '0 0 80px rgba(201, 148, 46, 0.25)',
        'glow-gold-intense': '0 0 100px rgba(201, 148, 46, 0.35)',
        // Card hover with gold glow
        'card-glow': '0 20px 40px rgba(0, 0, 0, 0.2), 0 0 60px rgba(201, 148, 46, 0.1)',
        'card-glow-lg': '0 24px 48px rgba(0, 0, 0, 0.25), 0 0 80px rgba(201, 148, 46, 0.15)',
        // Red glow for CTAs
        'glow-red': '0 0 40px rgba(206, 26, 30, 0.2)',
        'glow-red-lg': '0 0 60px rgba(206, 26, 30, 0.3)',
      },

      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.625rem',
        'lg': '0.875rem',
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ticker': 'ticker 30s linear infinite',
        // NEW: Premium Animations
        'reveal-up': 'revealUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'reveal-down': 'revealDown 1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'reveal-left': 'revealLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'reveal-right': 'revealRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'glow-pulse-gold': 'glowPulseGold 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'scale-subtle': 'scaleSubtle 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'line-grow': 'lineGrow 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'blur-in': 'blurIn 0.6s ease-out forwards',
        'cinematic-zoom': 'cinematicZoom 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
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
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // NEW: Premium Keyframes
        revealUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(60px)',
            clipPath: 'inset(100% 0 0 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
            clipPath: 'inset(0 0 0 0)',
          },
        },
        revealDown: {
          '0%': {
            opacity: '0',
            clipPath: 'inset(0 0 100% 0)',
          },
          '100%': {
            opacity: '1',
            clipPath: 'inset(0 0 0 0)',
          },
        },
        revealLeft: {
          '0%': {
            opacity: '0',
            clipPath: 'inset(0 100% 0 0)',
          },
          '100%': {
            opacity: '1',
            clipPath: 'inset(0 0 0 0)',
          },
        },
        revealRight: {
          '0%': {
            opacity: '0',
            clipPath: 'inset(0 0 0 100%)',
          },
          '100%': {
            opacity: '1',
            clipPath: 'inset(0 0 0 0)',
          },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(206, 26, 30, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(206, 26, 30, 0.4)',
          },
        },
        glowPulseGold: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(201, 148, 46, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 50px rgba(201, 148, 46, 0.4)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scaleSubtle: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        lineGrow: {
          '0%': { width: '0', opacity: '0' },
          '100%': { width: '100px', opacity: '1' },
        },
        blurIn: {
          '0%': { filter: 'blur(10px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        },
        cinematicZoom: {
          '0%': { transform: 'scale(1.1)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },

      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'cinematic': 'cubic-bezier(0.83, 0, 0.17, 1)',
        'expo-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },

      backdropBlur: {
        'xs': '2px',
      },

      backgroundImage: {
        'pattern-dot': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
        'pattern-grid': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
      },
    },
  },
  plugins: [],
}
