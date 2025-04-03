/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      //colors used
      primary: "#2B85FF",
      secondary: "#EF863E",
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

