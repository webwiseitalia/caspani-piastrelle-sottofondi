/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#0a1929',
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#E85D26',
          600: '#d44f1e',
          700: '#b7431a',
          800: '#9a3a18',
          900: '#7d3116',
        },
        warm: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#ede4d4',
          300: '#dfd2b8',
          400: '#c9b48e',
          500: '#b5996a',
          600: '#a18356',
          700: '#866c47',
          800: '#6d583d',
          900: '#594934',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
