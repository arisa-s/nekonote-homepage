import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--text-primary)",
        accent: "var(--canute)",
        background: "var(--bg)",
      },
      backgroundColor: {
        primary: "var(--bg)",
        invert: "var(--text-invert)",
      },
      textColor: {
        primary: "var(--text)",
        secondary: "var(--text)",
        invert: "var(--text-invert)",
      },
      fontFamily: {
        accent: ["var(--font-accent)"],
        base: ["var(--font-base)"],
      },
      borderColor: {
        DEFAULT: "var(--poncho)",
      },
    },
  },
  plugins: [],
} satisfies Config;
