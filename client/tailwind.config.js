/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '390px',   // mobilni vrlo mali
        'sm': '520px',   // mali telefoni / veliki mobiteli
        'md': '768px',   // tableti
        'lg': '1024px',  // desktop manji
        'xl': '1280px',  // desktop srednji
        '2xl': '1536px', // desktop veliki
      },
    },
  },
  plugins: [],
};
