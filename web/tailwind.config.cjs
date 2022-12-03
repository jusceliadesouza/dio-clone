/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        green: {
          400: "#23DD7A",
        },
        purple: {
          900: "#1E192C",
          700: "#8647AD",
        },
        pink: {
          700: "#E4105D",
        },
        yellow: {
          300: "#E5E044",
        },
        zinc: {
          900: "#151515",
          600: "#565656",
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
