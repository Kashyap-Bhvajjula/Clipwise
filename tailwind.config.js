/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'hsla(194, 78%, 69%, 1)',
        'custom-light-blue': 'hsla(221, 100%, 83%, 1)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, hsla(194, 78%, 69%, 1) 0%, hsla(221, 100%, 83%, 1) 58%)',
      },
    },
  },
  plugins: [],
};
