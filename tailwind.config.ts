import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background": "linear-gradient(307deg, #495867 6.91%, #577399 76.39%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "pallet-primary": "#577399",
        "pallet-secondary": "#495867",
        "pallet-red": "#FE5F55",
        "pallet-cyan": "#BDD5EA",
        "pallet-sky": "#BDD5EA",
        "pallet-white": "#F7F7FF"
      }
    },
  },
  plugins: [],
};
export default config;
