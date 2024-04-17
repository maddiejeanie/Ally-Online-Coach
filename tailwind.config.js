/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
        pattern: /(bg|text)-(teal|sky|rose|indigo)-(\d{1}0{1,2})/,
        variants: [
            "hover",
        ],
    },
  ],
}