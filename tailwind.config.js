/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        theGold: "#FFD700",
        the_gray: "#F2F5F5",
        thePurple: "#6A0DAD",
        theDarkGold: "#B8860B",
      },
    },
  },
  plugins: [],
};
