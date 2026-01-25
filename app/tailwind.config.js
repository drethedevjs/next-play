/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundClip: {
        text: 'text',
      },
      colors: {
        black: "#212b36",
        dark: "#282828",
        primary: "#e6c8a2",
        secondary: "#E07A5F",
        "body-color": "#090e34b3",
        warning: "#FBBF24",
        amber: "#E9943A",
        charcoal: "#3A3C3D",
        lightBlue: "#A7B9E7",
        brown: "#6E4025",
        olive: "#2B2E20",
        salmon: "#E07A5F",
        darkNavy: "#1E2834",
        cream: "#F2E1CF",
        slateBlue: "#344255"
      },
    },
  },
  plugins: [],
}

