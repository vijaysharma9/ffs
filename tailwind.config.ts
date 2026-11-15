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
        navy: {
          50: "#f0f6fc",
          100: "#e0edf9",
          200: "#c7def4",
          600: "#13498f",
          700: "#0e3975",
          800: "#0b2f64",
          900: "#092c62", // primary navy
          950: "#071f43", // dark footer navy
        },
        blue: {
          brand: "#1264c7",
          hover: "#0e52a5",
          light: "#eaf4fd",
        },
        cyan: {
          brand: "#18b9e8",
          hover: "#15a6d1",
          light: "#e5f7fc",
        },
        ink: {
          DEFAULT: "#14243a",
          secondary: "#43566e",
          muted: "#64748b",
        },
        surface: {
          pale: "#f4f8fc",
          card: "#ffffff",
          line: "#e5edf5",
        },
      },
      fontFamily: {
        sans: ["'DM Sans'", "system-ui", "-apple-system", "sans-serif"],
        display: ["'Manrope'", "'DM Sans'", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 55px rgba(9, 44, 98, 0.08)",
        floating: "0 12px 35px rgba(9, 44, 98, 0.12)",
        subtle: "0 4px 20px rgba(9, 44, 98, 0.05)",
      },
      animation: {
        pulseSlow: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
