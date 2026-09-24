import type { Config } from "tailwindcss";

/**
 * Design tokens below are sourced directly from the "Design System" page
 * of the Figma file (node 117:639) - Colors, Typography, Buttons and
 * Form Elements sections - rather than approximated.
 */
const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          magenta: "#DC00D3",
          cyan: "#0CFFFF",
          dark: "#100425", // main page background
        },
        neutral: {
          text: "#FAFAFA", // body text on dark background
          muted: "#33323D", // text on light surfaces (design-system page)
          fieldBg: "#F8F8F8",
          fieldBgAlt: "#ECECED",
        },
        accent: {
          cyan: "#5DFFFF", // gradient stop / uppercase labels / focus border
          teal: "#5FB4A2", // active input border
          error: "#F43030",
        },
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(107deg, #5DFFFF 5%, #AE0CA7 88%)",
        "button-gradient": "linear-gradient(90deg, #9933E5 0%, #33CCE5 100%)",
      },
      fontFamily: {
        heading: ["var(--font-josefin)", "sans-serif"],
        nav: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        h1: ["clamp(2.75rem, 6vw, 5.625rem)", { lineHeight: "1.05", letterSpacing: "-0.4464px", fontWeight: "700" }],
        h2: ["clamp(2.25rem, 4.5vw, 4.125rem)", { lineHeight: "1.1", letterSpacing: "-0.3571px", fontWeight: "600" }],
        h3: ["clamp(1.5rem, 3vw, 2rem)", { lineHeight: "1.15", letterSpacing: "-0.2857px", fontWeight: "400" }],
        "body-lg": ["1.125rem", { lineHeight: "1.667", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.875", fontWeight: "400" }],
        label: ["0.875rem", { lineHeight: "18px", letterSpacing: "5px", fontWeight: "600" }],
      },
      borderRadius: {
        card: "14px",
      },
      screens: {
        xs: "420px",
      },
      maxWidth: {
        container: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
