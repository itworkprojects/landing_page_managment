/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#3361FF',
      },
      width: {
        '100': '400px',
      }
    },
  },
  plugins: [],
}
