/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee': '#331A15'
      },
      fontFamily: {
        'rancho': ["Rancho", "cursive"]
      },
      backgroundImage: {
        'logo': "url('https://i.ibb.co.com/k2dx74d/logo1.png')",
        'navbg': "url('https://i.ibb.co.com/b5g72v6/15.jpg')",
        'bannerbg': "url('https://i.ibb.co.com/hDJFgQD/3.png')",
        'copyrightbg': "url('https://i.ibb.co.com/P1jSTPY/28.jpg')",
        'footerbg': "url('https://i.ibb.co.com/SmqGycz/footer-bg.jpg')",
        'coffee-add-bg': "url('https://i.ibb.co.com/rtbCWVZ/coffee-add-bg.png')",
        'gussain-blur-bg': "url('https://i.ibb.co.com/H4rycXP/gussain-blur-bg.png')",
        'all-coffee-bg': "url('https://i.ibb.co.com/NWHQbZq/1.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

