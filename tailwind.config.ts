import { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
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
  plugins: [
    tailwindcssAnimate,
    plugin(function ({ addUtilities, theme, e }) {
      const newUtilities = {};
      const colors = theme("colors");

      const mergedColors = {
        ...colors,
        ...defaultTheme.colors,
      };

      Object.keys(mergedColors).forEach((colorName) => {
        const value = mergedColors[colorName];
        if (typeof value === 'string') {
          const name = `.customshadow-${e(colorName)}`;
          newUtilities[name] = {
            "--tw-shadow-color": value,
            "box-shadow": `6px 5px 0px 0px var(--tw-shadow-color)`,
          };
        } else {
          Object.keys(value).forEach((shade) => {
            const shadeValue = value[shade];
            const name = `.customshadow-${e(colorName)}-${shade}`;
            newUtilities[name] = {
              "--tw-shadow-color": shadeValue,
              "box-shadow": `6px 5px 0px 0px var(--tw-shadow-color)`,
            };
          });
        }
      });

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};

export default config;
