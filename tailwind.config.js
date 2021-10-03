const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.emerald,
      lime:{
        DEFAULT: "#3fde2a",
        fullBright: "#00ff00",
        darker: "#169c05"
      }
    },
  minWidth: {
    "min": "min-content",
    "max": "max-content",
    '0': '0',
    '1/4': '25%',
    '1/2': '50%',
    '3/4': '75%',
    'full': '100%',
    "52": "13rem /* 208px */"
      },
  extend: {
      inset: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",

        "1/6": "16.666666%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666666%",
        "5/6": "83.333333%"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ]
}