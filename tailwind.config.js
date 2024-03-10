/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('/public/Rectangle 4281.png')"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}