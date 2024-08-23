/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light-grey": "#e2e3e6",
        "dark-grey": "#6c6c75",
        "accent-color": "#b93486",
      },
      boxShadow: {
        "bx-shadow":
          "-5px -5px 15px rgba(255, 255, 255, 0.6),5px 5px 15px rgba(0, 0, 0, 0.1)",
      },
      transitionProperty: {
        flex: "flex",
        opacity: "opacity",
      },
      transitionDuration: {
        "0.5s": "0.5s",
        "0.2s": "0.2s",
      },
      transitionDelay: {
        "0.3s": "0.3s",
      },
      flexGrow: {
        5: "5",
      },
      fontFamily: {
        Montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
