/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {

      animation: {
        'bounce-slow': 'bounce 2.5s linear infinite',
      },

      fontFamily:{
        mdSans: ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

