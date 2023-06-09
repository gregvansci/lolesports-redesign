/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': ['Segoe UI', 'Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      'serif': ['Times New Roman', 'Times', 'serif'],
      'title': ['Work Sans', 'Roboto', 'sans-serif'],
      'body': ['Segoe UI', 'Roboto', 'sans-serif'],
      'msi-title': ['Wallpoet', 'Roboto', 'sans-serif'],
      'msi-body': ['DM Mono', 'Roboto', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      'highlight': '#00C8C8',
      'white': '#FFF',
      'black': '#000',
      'alert': '#F44336',
      'msi': {
        'bg': '#FF0000',
        'text': '#101010'
      },
      'gray': {
        50: '#F5F5F5',
        100: '#E5E5E5',
        200: '#D4D4D4',
        300: '#A3A3A3',
        400: '#737373',
        500: '#525252',
        600: '#404040',
        700: '#3F3F3F',
        800: '#2E2E2E',
        900: '#1A1A1A',
      },
      "blue": {
        50: "#F2F5F8",
        100: "#E5ECF1",
        200: "#C7D6E0",
        300: "#ADC3D2",
        400: "#8FADC2",
        500: "#749AB3",
        600: "#537C98",
        700: "#3F5E73",
        800: "#293E4C",
        900: "#162028"
      },
      "blue-gray": {
        50: "#F0F2F4",
        100: "#DFE2E7",
        200: "#C1C8D2",
        300: "#A1ABBA",
        400: "#8391A5",
        500: "#65748A",
        600: "#525E70",
        700: "#3C4552",
        800: "#292F38",
        900: "#13161B"
      },
      "steel": {
        50: "#F0F2F4",
        100: "#E2E4E9",
        200: "#C8CCD6",
        300: "#AAB1C0",
        400: "#8D96AA",
        500: "#737E96",
        600: "#5C657B",
        700: "#434A5B",
        800: "#323743",
        900: "#1F222A",
        950: "#0D0E12"
      },
    },
    screens: {
      'phone': '640px',
      'tablet': '940px',
      'laptop': '1080px',
      'desktop': '1280px',
      'desktop-lg': '1600px',
    },
    extend: {},
  },
  plugins: [],
}
