/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
      },
    },
    screens: {
      sm: "786px",
      md: "1024px",
      lg: "1200px",
    },
    extend: {
      colors: {
        yellow: "#FCCF55",
        asphalt: "#B5B3B2",
        pink: "#FF6894",
        light: "#9CA2BD",
      },
    },
  },
  plugins: [],
};
