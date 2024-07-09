// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:'#010D1A',
        secondary:'#3B3F43'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}