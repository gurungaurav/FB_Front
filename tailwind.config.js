/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#b0b3b8",
        postColor: "#242526",
        bgMainColor: "#18191a",
      },
    },
  },
  plugins: [],
};
