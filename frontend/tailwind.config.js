/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.jsx",
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/pages/*/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
    "./src/components/*/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-primary': '#5139d6',
        'purple-secondary': '#7e5eb8',
        'purple-tertiary': '#916ec2',
        'strong-purple': '#6940b7',
        'light-purple': '#d4abdc',
        'background-white': '#ece7ee',
        'background-purple': '#6940b7',
        'custom-black': '#201c22',
    },
  },
    plugins: [],
  }
}
