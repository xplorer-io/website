import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
