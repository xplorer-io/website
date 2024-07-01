import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
        heading: ["var(--font-heading)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#004E89",
          50: "#42ADFF",
          100: "#2DA5FF",
          200: "#0493FF",
          300: "#007CDB",
          400: "#0065B2",
          500: "#004E89",
          600: "#004275",
          700: "#003760",
          800: "#002B4C",
          900: "#002037",
          950: "#001A2D",
        },
        secondary: {
          DEFAULT: "#CB1629",
          50: "#F5A4AC",
          100: "#F3919B",
          200: "#EF6C7A",
          300: "#EB4759",
          400: "#E72337",
          500: "#CB1629",
          600: "#AF1323",
          700: "#94101E",
          800: "#780D18",
          900: "#5D0A13",
          950: "#4F0910",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
