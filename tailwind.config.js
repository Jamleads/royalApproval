/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        // the_gray: "#F2F5F5",
        the_gray: "#595A5C",
        // theDarkGold: "#B8860B",
        theDarkGold: "#7E6374",
      },
    },
  },
  plugins: [],
};
