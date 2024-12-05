/** @type {import('tailwindcss').Config} */
import motion from 'tailwindcss-motion';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}" // Fix the typo with `{.js,.jsx,.ts,.tsx}`
  ],
  theme: {
    extend: {},
  },
  plugins: [motion], // Use the imported `motion` plugin
};
