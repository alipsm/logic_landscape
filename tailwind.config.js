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
      greenCustome:'#53C22B',
      yellowCustome:'#E6C02A',
      redCustome:'#FF5A52',
      white: '#ffffff',
      hrLine:"radial-gradient(50% 50% at 50% 50%, #CC8B8B 0%, rgba(163, 59, 59, 0.00) 100%)"
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {}
  },
  plugins: [],
}
