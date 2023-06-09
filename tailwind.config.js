/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'mob': '350px',
      'tab': '768px',
      'des': '1280px'
    },
    extend: {
      fontFamily: ["Poppins", "sans-serif"],
      keyframes: {
        scale: {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(2)',
          },
        },
      },
      animation: {
        scale: "scale 2s infinite",
      },
    },
  },
  plugins: [],
};
