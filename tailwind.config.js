const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    enabled: process.env.ELEVENTY_ENV === "production",
    content: ["./src/**/*.njk", "./src/**/*.md", "./src/**/*.html"],
  },
  theme: {
    extend: {
      colors: {
        viridian: {
          100: "#ECF2F0",
          200: "#CEDEDB",
          300: "#B1CAC5",
          400: "#77A399",
          500: "#3C7B6D",
          600: "#366F62",
          700: "#244A41",
          800: "#1B3731",
          900: "#122521",
        },
        "port-gore": {
          100: "#EAEAEE",
          200: "#CBC9D5",
          300: "#ACA9BC",
          400: "#6E6989",
          500: "#302857",
          600: "#2B244E",
          700: "#1D1834",
          800: "#161227",
          900: "#0E0C1A",
        },
        stiletto: {
          100: "#F6EBEC",
          200: "#E9CCCE",
          300: "#DBAEB1",
          400: "#C07177",
          500: "#A5343C",
          600: "#952F36",
          700: "#631F24",
          800: "#4A171B",
          900: "#321012",
        },
        saffron: {
          100: "#FFF9EA",
          200: "#FEF0CC",
          300: "#FDE7AD",
          400: "#FCD66F",
          500: "#FAC431",
          600: "#E1B02C",
          700: "#96761D",
          800: "#715816",
          900: "#4B3B0F",
        },
      },
      fontFamily: {
        heading: ["Anton", ...defaultTheme.fontFamily.sans],
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
