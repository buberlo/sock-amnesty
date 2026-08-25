import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        laundry: {
          50: "#f6fbff",
          100: "#eaf6ff",
          200: "#d3ecff",
          300: "#b0dcff",
          400: "#7cc5ff",
          500: "#4aa8fa",
          600: "#2f88e8",
          700: "#286dd0",
          800: "#2858a8",
          900: "#274b85",
          950: "#162c4e"
        },
        dryer: {
          50: "#fff8f1",
          100: "#ffefd9",
          200: "#ffdba8",
          300: "#ffc170",
          400: "#ff9a38",
          500: "#fb7a14",
          600: "#ea5c08",
          700: "#c24308",
          800: "#9a3610",
          900: "#7d2f12",
          950: "#431607"
        },
        heat: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
          950: "#4c0519"
        },
        amnesty: {
          50: "#f3fdf7",
          100: "#e2fbef",
          200: "#c0f5dc",
          300: "#8ceac9",
          400: "#55d6b0",
          500: "#30bb98",
          600: "#23977d",
          700: "#217865",
          800: "#1f6053",
          900: "#1c4f45",
          950: "#0a2d28"
        }
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        display: [
          "ui-rounded",
          "Hiragino Maru Gothic ProN",
          "Quicksand",
          "Comfortaa",
          "system-ui",
          "sans-serif"
        ]
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 0.9s ease-in-out infinite",
        float: "float 3.2s ease-in-out infinite",
        "spin-slow": "spin-slow 7s linear infinite"
      },
      boxShadow: {
        sock: "0 18px 40px -20px rgba(40, 109, 208, 0.45)",
        dryer: "0 18px 40px -18px rgba(234, 92, 8, 0.4)"
      }
    }
  },
  plugins: []
};

export default config;