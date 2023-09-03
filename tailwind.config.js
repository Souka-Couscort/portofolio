/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#64CCC5",
        dark: "#1A1A1A",
        light: "#E6E6E6",
        btn: "#22DCBE",
      },
      fontFamily: {
        vagabound: ["Vagabond"],
        chakra: ["Chakra Petch Regular"],
      },
    },
  },
  plugins: [],
};
