module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
