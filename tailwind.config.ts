import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#050505",
        surface: {
          DEFAULT: "#0a0a0c",
          2: "#121216",
        },
        accent: {
          /** Primary accent — sky (no magenta/pink) */
          violet: "#0ea5e9",
          violetMuted: "#0284c7",
          cyan: "#22d3ee",
          cyanMuted: "#06b6d4",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: [
          "var(--font-jetbrains)",
          "var(--font-geist-mono)",
          "ui-monospace",
          "monospace",
        ],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        glass: "inset 0 1px 0 0 rgba(255,255,255,0.06)",
        glow: "0 0 40px -10px rgba(14,165,233,0.28)",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "scan-line": "scanline 2.5s linear infinite",
        "ambient-drift": "ambient-drift 28s ease-in-out infinite alternate",
      },
      keyframes: {
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "ambient-drift": {
          from: {
            transform: "translate3d(0, 0, 0) scale(1)",
            opacity: "1",
          },
          to: {
            transform: "translate3d(2%, -1.5%, 0) scale(1.04)",
            opacity: "0.92",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
