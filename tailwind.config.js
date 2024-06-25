/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,s,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins']
      }
    },
  },
  plugins: [],
};