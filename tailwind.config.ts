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
        background: "#F5F4EB", // Ivory
        foreground: "#1A1A1A", // Charcoal
        "signal-red": "#FF3B30",
        "terminal-green": "#39FF14",
        "phosphor-amber": "#FFB000",
      },
      fontFamily: {
        mono: [
          "SF Mono",
          "Monaco",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      textShadow: {
        heavy: "2px 2px 0px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Just in case, broadly useful
  ],
};
export default config;
