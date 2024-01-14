/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    escreens: {
      sm: '480px',
      md: '768px',
      xl: '1440px',
    },
    colors: {
      maroon: '#0f090c8f',
      champagne: '#ffede099',
      ivory: '#ffffff52',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {}
  },
  plugins: [],
}
