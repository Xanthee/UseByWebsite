/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '0.5%': '0.5%',
        '1%': '1%',
        '2%': '2%',
        '3%': '3%',
        '4%': '4%',
        '5%': '5%',
        '6%': '6%',
        '8%': '8%',
        '10%': '10%',
        '12%': '12%',
      },
      fontFamily: {
        hedvig: ['Hedvig Letters Sans', 'sans-serif'],
        hostGrotesk: ['Host Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}