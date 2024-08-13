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
        'degrade': 'linear-gradient(0deg, #FFF 20%, #81ADEF 100%)',
      },
      colors: {
        cinza: '#E7E7E7',
        cinzatxt: '#737373',
      },
      screens:{
        'md':'768px', 'lg':'1280px','xl':'1920px','2xl':'2560px','3xl':'3440px'
      }
    },
  },
  plugins: [],
};
export default config;
