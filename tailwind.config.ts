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
        midnight: "#050508",
        surface: {
          DEFAULT: "#0a0b10",
          2: "#12131a",
        },
        accent: {
          violet: "#8b5cf6",
          violetMuted: "#7c3aed",
          cyan: "#22d3ee",
          cyanMuted: "#06b6d4",
          emerald: "#34d399",
          amber: "#fbbf24",
          rose: "#fb7185",
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
        glow:
          "0 0 48px -12px rgba(139,92,246,0.35), 0 0 32px -16px rgba(34,211,238,0.12)",
      },
      backgroundImage: {
        "spectral-mesh":
          "radial-gradient(ellipse 80% 52% at 18% -8%, rgba(52,211,153,0.14), transparent 52%), radial-gradient(ellipse 55% 48% at 82% 8%, rgba(139,92,246,0.12), transparent 50%), radial-gradient(ellipse 50% 42% at 70% 88%, rgba(34,211,238,0.1), transparent 48%), radial-gradient(ellipse 45% 40% at 8% 75%, rgba(251,146,60,0.08), transparent 46%)",
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
