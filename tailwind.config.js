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
        claret: {
          100: "#F3E6EB",
          200: "#E2BFCD",
          300: "#D199AF",
          400: "#AE4D74",
          500: "#8B0038",
          600: "#7D0032",
          700: "#530022",
          800: "#3F0019",
          900: "#2A0011",
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
