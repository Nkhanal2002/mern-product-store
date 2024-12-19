/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo: ['"Exo 2"', "sans-serif"], // Naming the font group 'exo' for Exo 2
        titillium: ['"Titillium Web"', "sans-serif"], // Naming the font group 'titillium' for Titillium Web
      },
    },
  },
  plugins: [],
};
