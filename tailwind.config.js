/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0d0d0d',
        charcoal: '#1a1a1a',
        concrete: '#e8e4df',
        warm: '#f2efe9',
        accent: '#E54E1B',
        'accent-dark': '#c4411a',
        muted: '#7a7a7a',
        cream: '#f7f4ef',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
