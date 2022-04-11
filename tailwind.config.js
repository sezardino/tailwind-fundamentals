module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "18px",
          lg: "20px",
        },
        screens: {
          sm: "100%",
          md: "100%",
          lg: "900px",
          xl: "1240px",
        },
      },
      borderRadius: {
        sm: "5px",
        md: "7px",
        lg: "25px",
      },
      boxShadow: {
        card: "0px 23px 34px rgba(35, 57, 55, 0.17)",
      },
      colors: {
        primary: "#2D635E",
        secondary: "#444A4A",
        white: "#FFFFFF",
        black: "#000000",
        gray: "#E3EBE7",
        orange: "#FAE9E0",
      },
      fontFamily: {
        base: ["Alegreya Sans"],
        secondary: ["Josefin Sans"],
        cursive: ["Cedarville Cursive"],
      },
      fontSize: {
        h1: "63px",
        "h1-mobile": "54px",
        h2: "38px",
        h3: "28px",
        h5: "19px",
        copy: "14px",
        button: "20px",
        base: "19px",
        sm: "16px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
