/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        black: { 100: "#0e0e0e", 200: "#000000" },
        white: { 100: "#f0f0f0", 200: "#ffffff" },
        slate: { 100: "#d9d9d9", 200: "#d2d2d2", 300: "#989898" },
        barbie: "#e9aaff",
        cyan: "#b2ffe3",
        red: "#fe9393",
        yellow: "#fff38a",
      },
      backgroundImage: {
        black:
          "url('/src/assets/image.jpeg')",
        blue: "url('/src/assets/image2.jpeg')",
        purple:
          "url('/src/assets/image3.jpeg')",
        redish: "url('/src/assets/image4.jpeg')",
        violet:
          "url('/src/assets/image5.jpeg')",
      },
    },
  },
  plugins: [],
};

