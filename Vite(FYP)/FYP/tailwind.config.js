/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepskyblue: "#38b8ff",
        white: "#fff",
        orangered: "#ff6300",
        black: "#000",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        newsreader: "Newsreader",
        inherit: "inherit",
        "news-cycle": "'News Cycle'",
        itim: "Itim",
      },
      borderRadius: {
        "81xl": "100px",
        "6xl": "25px",
        lg: "18px",
        "12xl": "31px",
        "3xl": "22px",
        "8xl": "27px",
      },
    },
    fontSize: {
      mini: "15px",
      "5xl": "24px",
      "29xl": "48px",
      "77xl": "96px",
      "17xl": "36px",
      "13xl": "32px",
      "45xl": "64px",
      "21xl": "40px",
      base: "16px",
      inherit: "inherit",
    },
  },
  plugins: [],
}

