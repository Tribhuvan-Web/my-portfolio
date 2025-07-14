/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'ipad': '768px',
        'ipad-pro': '1024px',
        'laptop': '1366px',
        'desktop': '1440px',
      },
      fontFamily: {
        'winky': ['Winky Rough', 'sans-serif'],
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}
