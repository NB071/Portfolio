/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      round: "36px",
      full: "50%",
    },
    screens: {
      mob: "350px",
      lgmob: "550px",
      tab: "768px",
      des: "1280px",
    },
    extend: {
      colors: {
        "Dark-brown": "#69533E",
        "Light-brown": "#8C7A69",
        "white-text": "#EDEBDF",
      },
      fontFamily: ["Poppins", "sans-serif"],
      keyframes: {
        marqeeAnimation: {
          "0%, 100%": {
            transform: "translateX(115%)",
          },
          "50%": {
            transform: "translateX(-150%)",
          },
        },
        rotate: {
          "0%": {
            transform: "rotate(0);",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        marqeeAnimation: "marqeeAnimation 15s linear infinite",
        rotate: "rotate 4s linear infinite",
      },
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
};
