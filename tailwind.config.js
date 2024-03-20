/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-bg': "url('src/assets/lyon3.jpg')",      
      }),
      colors: {
        background: "#1c1a1b",
        femmes: "#f6d890",
        hommes: "#d58a75",
        autres: "#769897",
        humain: "#d9a576",
        font: "#f9f5ea",
        border: "#37495f",
        loader: "#a87b47",
      },
    },
  fontFamily: {
    'agrandir': ['agrandir', 'sans-serif'],
  },
},
  plugins: [],
}
