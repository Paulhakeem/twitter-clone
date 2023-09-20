/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'green': '#1b1f2f',
      'white': '#ffff',
      'gray': '#36454F',
  },
  fontFamily: {
    sans: ['roboto', 'sans-serif'],
  },
  screens: {
    'sm': '640px',
    'md': '768px',
  },
    extend: {
  },
  plugins: [],
}
}