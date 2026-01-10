import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          black: "#09090B", // Zinc-950
          green: "#22C55E", // Green-500
          purple: "#A855F7", // Purple-500
          grey: {
            100: "#27272A", // Zinc-800
            200: "#18181B", // Zinc-900
            300: "#71717A", // Zinc-500
          },
        },
        glass: {
          border: "rgba(255, 255, 255, 0.05)",
          bg: "rgba(9, 9, 11, 0.8)",
        },
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.15)",
        glow: "0 0 12px rgba(34, 197, 94, 0.25)",
        premium: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
