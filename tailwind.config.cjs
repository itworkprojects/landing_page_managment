/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#3361FF',
        button_welcome:"#EADB2A"
      },
      width: {
        '100': '400px',
      }
    },
    fontFamily: {
      MBold: ['Montserrat-Bold'],
      MMedium: ['Montserrat-Medium'],
      MRegular: ['Montserrat-Regular'],
      MLight: ['Montserrat-Light'],
    },
  },
  plugins: [],
}
