module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#374151",
        secondary: "#4B5563",
      },
      translate: {
        center: "-50%, -50%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
