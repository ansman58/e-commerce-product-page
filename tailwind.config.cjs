/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      kumbhSans: ["Kumbh Sans", "sans-serif"],
    },
    colors: {
      primaryOrange: "hsl(26, 100%, 55%)",
      paleOrange: "hsl(25, 100%, 94%)",
      darkGrayishBlue: "hsl(219, 9%, 45%)",
      veryDarkBlue: "hsl(220, 13%, 13%)",
      grayishBlue: "hsl(220, 14%, 75%)",
      lightGrayishBlue: "hsl(223, 64%, 98%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
    },
    extend: {},
  },
  plugins: [],
};
