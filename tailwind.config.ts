import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0A2640",
        success: "#65E4A3",
        grey: "#777777",
      },
      fontFamily: {
        "font-open-sans": ["var(--font-open-sans)", "sans-serif"],
        "font-manrope": ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
