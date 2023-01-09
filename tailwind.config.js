/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scale: {
        140: "1.4",
      },
    },
  },
  plugins: [require("daisyui")],
};
