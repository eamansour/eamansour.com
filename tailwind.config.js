const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      black: colors.black,
      grey: {
        50: "#4f5d7e",
        100: "#37393e",
        200: "#2f3136",
        300: "#23272a",
      },
      blurple: {
        100: "#5866ef",
        200: "#404eed",
      },
      blue: "#09b0f2",
      turqoise: "#49ddc1",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(100vw)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slow-bounce": "bounce 8s infinite",
        "infinite-slide": "slide 70s linear infinite",
      },
    },
  },
  plugins: [],
}
