import { px, animate } from "framer-motion";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Navbar/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url(/Pouryapic.png)",
        'sm-herobg': "url(/sm.png)",
        'firstbg': "url(/bgdown.png)",
      },
      perspective: {
        1000: '1000px',
      },
      'transform-style': {
        'preserve-3d': 'preserve-3d',
      },
      'backface-visibility': {
        hidden: 'hidden',
      },
      colors: {
        backgroundColor: '#252f9c',
        primaryColor: '#252f9c',
        primaryTextColor: '#e6e6e6',
        Primary: '#252f9c',
        secondry: '#cfe5ff',
        navbarbg: 'linear-gradient(101deg, rgba(37,47,156,0.5971638655462185) 4%, rgba(2,0,36,0.5691526610644257) 99%)',
        backgroundnavbar: 'linear-gradient(101deg, rgba(37,47,156,0.5971638655462185) 4%, rgba(2,0,36,0.5691526610644257) 99%)',
      },
      keyframes: {
        textAnimation: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0.2',
            fontSize: '18px',
          },
          '50%': {
            transform: 'translateX(0%)',
            opacity: '1',
            fontSize: '200px',
          },
          '100%': {
            transform: 'translateX(-100%)',
            opacity: '0.5',
            fontSize: '18px',
          },
        },
        blink: {
          '0%, 100%': { opacity:' 0' },
          '50%': { opacity: '1 '},
        },
        rightArrow: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(50px)' },
          '98%': { transform: 'translateX(3px)' },
          '99%': { transform: 'translateX(0px)' },
        },
        fromBottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        textAnimation: 'textAnimation 3s ease-in-out infinite',
        blink: 'blink 1s step-start infinite',
        rightArrow: 'rightArrow 3s infinite',
        fromBottom: 'fromBottom 1s ease-out forwards',
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
