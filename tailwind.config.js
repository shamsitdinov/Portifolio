/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 5px 1px rgba(0, 0, 0, 0.3)',
        '4xl': '0 0 10px 1px rgba(0, 0, 0, 0.3)',
        '7xl': '0 0 50px 1px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      margin: {
        50: "50px",
        100: "100px",
        150: "150px",
        200: "200px",
        250: "250px",
      },


    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
