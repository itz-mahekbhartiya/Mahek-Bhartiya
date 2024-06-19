/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['cursive'],
              },
              boxShadow: {
                customlight: ['0 4px 6px rgba(0, 0, 0, 0.1)'],
                customdark: ['0 10px 15px rgba(0, 0, 0, 0.5)'],
              },
    },
  },
  plugins: [],
}

