/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
}

