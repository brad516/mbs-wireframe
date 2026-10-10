/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0c1f3f',
          dark: '#081529',
          light: '#163060',
          lighter: '#1e3a6e',
        },
        red: {
          DEFAULT: '#c8102e',
          dark: '#a00d24',
        },
        gold: {
          DEFAULT: '#8a6914',
          light: '#c49a2a',
          bg: '#fdf3d8',
        },
        cream: '#faf8f4',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'hero-zoom': {
          from: { transform: 'scale(1.08)' },
          to: { transform: 'scale(1)' },
        },
      },
      animation: {
        rise: 'rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        'hero-zoom': 'hero-zoom 16s cubic-bezier(0.2, 0.7, 0.2, 1) both',
      },
      fontFamily: {
        serif: ['Libre Baskerville', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
