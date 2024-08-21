/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#04befe',
        'secondary': '#6253e1',
        'success': '#22c55e',
        'warning': '#f59e0b',
        'error': '#ef4444',
        'black-50': '#222222',
        'black-100': '#333333',
        'white-50': '#f2f2f2',
        'white-100': '#f1f1f1'
      }
    },
  },
  plugins: [],
}