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
        quaternary: '#E5D4FF'
      },
      boxShadow: {
        custom: '0 4px 6px -1px rgba(57, 36, 103, 0.5), 0 2px 4px -1px rgba(57, 36, 103, 0.05)'
      },
      backgroundImage: {
        'projects': "url('/assets/14.png')",
        'dots': "url('/assets/15.png')",
        'bg': "url('/assets/bg.png')",
        'shape': "url('/assets/shape.png')",
        'wave': "url('/assets/8.png')",
        'form': "url('/assets/13.png')",
      },
    },
  },
  plugins: [],
};
export default config;


