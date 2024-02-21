/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#19386B',
        'blue-secondary': '#58B4AC',
      },
    },
  },
  plugins: [],
}