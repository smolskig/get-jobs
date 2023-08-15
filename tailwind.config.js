/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      colors: {
        primary: "#2E4EC1",
        secondary: "#D9D9D9",
        white: "#FFFFFF",
        black: "#14151C",
      },
    },
  },
  plugins: [],
};
