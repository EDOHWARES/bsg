/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      },
      colors: {
        primary: '#2C73A1',
        primaryHover: '#254A77',
        accent: '#F19413'
      }
    },
  },
  plugins: [],
}

