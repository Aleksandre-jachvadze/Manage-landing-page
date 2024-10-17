/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "bright-red": "hsl(12, 88%, 59%)",
        "dark-blue": "hsl(228, 39%, 23%)",
        "grayish-blue": " hsl(227, 12%, 61%)",
        "darker-blue": " hsl(233, 12%, 13%)",
        "pale-red": "hsl(13, 100%, 96%)",
        "light-grey": "hsl(0, 0%, 98%)",
      },
      boxShadow: {
        mobile: "0px 150px 250px -15px rgba(0, 0, 0,.3)",
      },
    },
  },
  plugins: [],
};
