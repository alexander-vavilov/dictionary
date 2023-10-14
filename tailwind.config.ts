/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      height: {
        'd-screen': '100dvh'
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif'
      }
    }
  },
  plugins: []
}
