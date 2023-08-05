/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      's': '320px', //small mobile
      'm': '375px', //small mobile
      'l': '425px', //large mobile
      'sm': '640px', //small Tablet
      'md': '768px	', // tablet
      '2md': '894px',
      'lg': '1024px', //laptop
      'xl': '1280px	', //large laptop
      '2xl': '1536px	', //large screens
    },
    colors:
    {
      'navbar-bg': '#141414',
      'dark-bg': '#0b090a',
      'secondary-bg': '#393E46',
      'primary-text': '#ffffff',
      'secondary-text': '#666666',
      'button': '#6e57e0'

    },
    extend: {},
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
      Roboto: ['Roboto Mono', 'monospace'],
      Chakra: ['Chakra Petch', 'sans-serif'],
    },
  },
  plugins: [],
}

