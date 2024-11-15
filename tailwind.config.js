/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary:'#9CA95A',
        secondary: '#64748b',
        dark: '#0f172a',
        button: '#396C03'
      },
      screens: {
        '2xl': '1300px',
      },
    },
  },
  plugins: [],
}

