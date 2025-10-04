module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'midLevel': { 'max': '1095px' },
      },
    },
  },
  plugins: [],
}