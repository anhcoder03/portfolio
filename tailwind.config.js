/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9a86fd",
        dark: "#20272f",
        gray11: "#111315",
      },
    },
  },
  plugins: [],
};
