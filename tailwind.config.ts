// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease",
      },
    },
  },
};
