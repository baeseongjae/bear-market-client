import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#f43f5ee6",
        },
        snow: {
          100: "#eeeeee",
        },
      },
      screens: {
        // min-width 기준
        xxs: "375px", // small-mobile
        xs: "576px", // large-mobile
        // sm: "640px", // xLarge-mobile
        // md: "768px", // tablet
        // lg: "1024px", // laptop
      },
    },
  },
  plugins: [],
};
export default config;
