/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      "round": "36px",
      "full": "50%"
    },
    screens: {
      'mob': '350px',
      'tab': '768px',
      'des': '1280px'
    },
    extend: {

      colors: {
        'Dark-brown': '#69533E',
        'Light-brown': '#8C7A69',
        "white-text": "#EDEBDF"
      },
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
        rotate: {
          "0%": {
            transform: "rotate(0);"
          },
          "100%": {
            transform: "rotate(360deg)"
          }
        }
      },
      animation: {
        scale: "scale 2s infinite",
        rotate: "rotate 4s linear infinite"
      },
    },
  },
  plugins: [],
};
