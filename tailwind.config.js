/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
    'montserrat': ['Montserrat', 'sans-serif'],
    },
    colors: {
      'header' : '#6DAEDB',
    },
    backgroundColor:{
      'denuncia': '#6DAEDB',
      'black': '#000000',
      'white': '#FAFAFA',
    }
  },
    extend: {
  },
  plugins: [],
})

