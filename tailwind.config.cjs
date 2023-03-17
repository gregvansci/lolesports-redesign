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
        light: '#FFF',
        dark: '#1A1A1A'
      },
      'header-secondary': {
        light: '#F4F7F9',
        dark: '#2E2E2E'
      },
      'header-tertiary': {
        light: '#E5E5E5',
        dark: '#3F3F3F'
      },
      'header-text': {
        light: '#65748A',
        dark: '#F9F9F9'
      }
    },
    extend: {},
  },
  plugins: [],
}
