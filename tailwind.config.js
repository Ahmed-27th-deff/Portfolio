/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#151515",
        panel: "#1c1c1c",
        card: "#222222",
        line: "#2e2e2e",
        lime: "#b9f43a",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "system-ui", "Segoe UI", "Arial", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", '"Times New Roman"', "serif"],
      },
    },
  },
  plugins: [],
};
