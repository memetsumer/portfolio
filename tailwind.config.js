module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      fontFamily: {
        "extra-condensed": ["Saira Extra Condensed", "sans-serif"],
      },
      fontSize: {
        "3xs": "0.6rem",
        "2xs": "0.7rem",
        xs: "0.8rem",
      },
      height: (theme) => ({
        "screen-1/3": "33vh",
        "screen-1/2": "50vh",
        "screen-2/3": "66vh",
        "screen-3/4": "75vh",
        "screen-4/5": "80vh",
      }),
      minHeight: {
        "screen-1/3": "33vh",
        "screen-1/2": "50vh",
        "screen-2/3": "66vh",
        "screen-3/4": "75vh",
        "screen-4/5": "80vh",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
