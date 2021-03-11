module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#374151",
        secondary: "#4B5563",
        accented: "#77abb7",
      },
      translate: {
        center: "-50%, -50%",
      },
      zIndex: {
        "-10": "-10",
      },
      padding: {
        full: "100vh",
        most: "72vh",
        half: "50vh",
      },
      minHeight: { 90: "90vh" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
