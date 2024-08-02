import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        "spin-slow": "spin 5s linear infinite",
      },
      backgroundImage: {
        background: "linear-gradient(307deg, #495867 6.91%, #577399 76.39%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "circular-light":
          "repeating-radial-gradient(rgba(0,0,0, 0.4) 2px, transparent 5px, transparent 100px)",
      },
      colors: {
        "pallet-primary": "#577399",
        "pallet-secondary": "#495867",
        "pallet-red": "#FE5F55",
        "pallet-cyan": "#BDD5EA",
        "pallet-sky": "#BDD5EA",
        "pallet-white": "#F7F7FF",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
