/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: 
      {Caveat: "'Caveat', cursive"}
    }
  },
  plugins: [require("daisyui")],
}

