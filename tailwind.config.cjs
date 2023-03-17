/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': ['Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      'serif': ['Times New Roman', 'Times', 'serif'],
      'title': ['Work Sans', 'Roboto', 'sans-serif'],
      'body': ['Work Sans', 'Roboto', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      'highlight': '#00C8C8',
      'header-bg': {
        light: '#F9F9F9',
        dark: '#1A1A1A'
      },
      'header-text': {
        light: '#1A1A1A',
        dark: '#F9F9F9'
      }
    },
    extend: {},
  },
  plugins: [],
}
