module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-5px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down-1/4s": "fade-in-down 0.2s ease-out",
        "fade-in-down-1/2s": "fade-in-down 0.5s ease-out",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      backgroundOpacity: ["active"],
      textColor: ["active"],
      borderWidth: ["hover", "active"],
      borderOpacity: ["active"],
      ringWidth: ["active"],
      boxShadow: ["hover", "active"],
    },
  },
  plugins: [],
};
