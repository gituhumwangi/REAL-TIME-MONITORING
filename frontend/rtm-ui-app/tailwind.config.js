/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // poppins: ['Poppins', 'sans-serif'],
        heading : ["DM Sans", "serif"],
        body : ["Work Sans", "serif"],
      },
    },
  },
  plugins: [],
}