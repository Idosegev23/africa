/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'africa-primary': '#D4740B',
        'africa-secondary': '#E77B3B', 
        'africa-accent': '#F5A623',
        'africa-brown': '#8B4513',
        'africa-warm': '#CD853F',
        'africa-text-dark': '#4B2E2E'
      },
      fontFamily: {
        'body': ['Inter', 'sans-serif'],
        'hebrew': ['Heebo', 'Inter', 'sans-serif'],
        'heading': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
} 