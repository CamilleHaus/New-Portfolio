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
          primary: '#392467',
          secondary: '#FFE6E6',
          tertiary: '#FFFBF5',
         }
    },
  },
  plugins: [],
};
export default config;
