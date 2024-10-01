/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");
const { transform } = require("next/dist/build/swc");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "1024px",
        lg: "1280px",
        xl: "1920px",
      },
      backdropBlur: ["responsive"],
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)", opacity: 0 },
        },
        floating: {
          "0%": { transform: "translateY(-3%)" },
          "50%": { transform: "translateY(3%)" },
          "100%": { transform: "translateY(-3%)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(50%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        scaleUp: "scaleUp 3s ease infinite",
        float: "floating 3s ease infinite",
        slideLeft: "slideLeft 1s ease-in-out forwards",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
