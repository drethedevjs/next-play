/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#212b36",
        dark: "#282828",
        "dark-700": "#090e34b3",
        primary: "#e6c8a2",
        secondary: "#E07A5F",
        "body-color": "#090e34b3",
        warning: "#FBBF24",
        hovering: "#F2CC8F",
        eggshell: "#F4F1DE"
      },
    },
  },
  plugins: [],
}

