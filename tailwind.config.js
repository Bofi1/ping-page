/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        desktop: "1000px",
      },
      fontFamily: {
        LibreFranklin: ["'Libre Franklin'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
