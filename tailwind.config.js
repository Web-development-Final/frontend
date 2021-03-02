module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "header-image": "url('/assets/images/music-live-01.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
