/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'black': 'rgb(15,20,25)',
        'transparent': 'transparent',
        'light': 'rgb(255,255,255)',
        'light1': 'rgb(239,243,244)',
        'light2': 'rgb(227, 230, 230)',
        'accent': 'rgb(29,161,243)',
      },
    },
  },
  plugins: [],
}
