import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050812",
        navy: {
          950: "#070b16",
          900: "#0b1730",
          800: "#16284a",
        },
        gold: {
          DEFAULT: "#f5c451",
          400: "#ffd76e",
          500: "#f5c451",
          600: "#e0a92f",
        },
        ember: {
          DEFAULT: "#e95f32",
          400: "#f28b4f",
          500: "#e95f32",
          600: "#c94624",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -4px rgba(245,196,81,0.45)",
        "glow-ember": "0 0 50px -6px rgba(233,95,50,0.45)",
      },
      keyframes: {
        "pulse-marker": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "ping-slow": {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "75%, 100%": { transform: "scale(2.6)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
      animation: {
        "pulse-marker": "pulse-marker 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "ping-slow": "ping-slow 3s cubic-bezier(0,0,0.2,1) infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
