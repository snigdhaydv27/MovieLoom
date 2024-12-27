import tailwindScrollbarHide from "tailwind-scrollbar-hide";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myColor: {
          100: '#a855f7',
          200: '#9333ea',
          300: '#7e22ce',
          400: '#6b21a8',
          500: '#581c87',
          600: '#3b0764',
        },
      },
    },
  },
  plugins: [tailwindScrollbarHide],
}
