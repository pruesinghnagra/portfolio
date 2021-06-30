// const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./server/**/*.html', './client/**/*.jsx'],                                                                                                               
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'puce':'#cc8899',
      },
      fontFamily: {
        'main': "'Josefin Sans', sans-serif",
      },
      fontSize: {
        'massive': '14rem',
      },
    },
  },  
  variants: {
    extend: {},
  },
  plugins: [],
}

