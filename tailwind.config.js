/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Font cho text sans-serif
        serif: ["Merriweather", "serif"], // Font cho text serif
        mono: ["Fira Code", "monospace"], // Font cho text monospace
      },
    },
  },
  plugins: [],
}
