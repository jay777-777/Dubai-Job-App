import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#07090E",
          card: "#0E131F",
          hover: "#141B2C",
          surface: "#1A2238",
          input: "#0B0F19"
        },
        gold: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#E5A93C",
          600: "#D4AF37",
          700: "#B45309"
        },
        emerald: {
          400: "#34D399",
          500: "#10B981",
          600: "#059669"
        }
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "sans-serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
