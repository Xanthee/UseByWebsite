/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          hostGrotesk: ['"Host Grotesk", sans-serif'],
          hedvig: ['"Hedvig Letters Sans", sans-serif'],
        },
      },
    },
    plugins: [],
  }