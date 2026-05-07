/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:  { DEFAULT: '#0D2B55', light: '#1a3f7a', dark: '#081d3a' },
        gold:  { DEFAULT: '#C9A02D', light: '#ddb94d', dark: '#a07e1f' },
        teal:  { DEFAULT: '#0D6E6E' },
        rgreen:{ DEFAULT: '#0D6E3A' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
