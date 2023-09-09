import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baskervville: ["Baskervville", "serif"],
      },
      colors: {
        deepblue: "var(--color-deep-blue)",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        appear: "appear 1s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
