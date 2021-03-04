module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#e6e6e5",
        secondary: "#14171c",
        thirdly: "#71747b",
      },
      textColor: {
        primary: "#14171c",
        primaryLight: "#43464d",
        secondary: "#a2a3a6",
      },
      fontFamily: {
        primary: ["Tenor Sans", "sans-serif"],
        secondary: ["Biryani", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "header-image": "url('/assets/images/music-live-01.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
