/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm Stone/Beige palette for luxury aesthetic - Refined
        stone: {
          50: '#FBFBF9',
          100: '#F7F5F3',
          200: '#EBE8E4',
          300: '#D8D4CE',
          400: '#A39E98',
          500: '#75706B',
          600: '#54504C',
          700: '#403C39',
          800: '#262422',
          900: '#1A1817',
          950: '#0D0C0B',
        },
        // Warm accent color - Gold/Bronze tones
        warm: {
          50: '#FDFBF7',
          100: '#F7F1E6',
          200: '#EADEC3',
          300: '#DCC79B',
          400: '#C8A972',
          500: '#B08D55',
          600: '#94723E',
          700: '#76552F',
          800: '#5C4027',
          900: '#483020',
          950: '#2A1A10',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-2xl': ['5.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
