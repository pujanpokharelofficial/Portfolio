/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        "circle-1": "#ACDD45",
        "circle-2": "#359AF8",
        "frost-blur": "#A0EDF880",
      },
    },
  },
  plugins: [],
}

