/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
     require('tailwind-typewriter')({
      wordsets : {
        profession : {
          words : ['Native Android Developer', ' '],
          delay : 1,
          eraseSpeed : 3,
          writeSpeed : 1,
          pauseBetween : 2,
          caretWidth : '2px'
        }
      }
     })
  ],
}

