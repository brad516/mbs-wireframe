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
          DEFAULT: '#a07c20',
          light: '#c49a2a',
          bg: '#fdf3d8',
        },
        cream: '#faf8f4',
      },
      fontFamily: {
        serif: ['Libre Baskerville', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
