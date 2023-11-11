/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        "PCC-dark-cyan": "hsl(185, 75%, 39%)",
        "PCC-very-dark-desaturated-blue": "hsl(229, 23%, 23%)",
        "PCC-dark-grayish-blue": "hsl(227, 10%, 46%)",
        "PCC-dark-gray": "hsl(0, 0%, 59%)",
      },
      fontFamily: {
        "PCC-kumbh-sans": ['Kumbh Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

