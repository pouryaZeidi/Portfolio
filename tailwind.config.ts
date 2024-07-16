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
        backgroundColor: '#292929',
        primaryColor: '#0aa1ff',
        primaryTextColor: '#e6e6e6',
      },
      fontFamily: {
        sans: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        gill: ['Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.15em',
      },
      fontSize: {
        'headline-big': 'clamp(5rem, 9.9vw, 15rem)',
        'headline-medium': 'clamp(1rem, 2vw, 4rem)',
        'headline-small': 'clamp(0.6rem, 0.75vw, 1.3rem)',
      },
    },
  },
  plugins: [],
};
export default config;
