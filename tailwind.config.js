/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 50s linear infinite',
      },
      fontFamily: {
        regular: ["Regular"],
        belgiano: ["Belgiano"],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        porpe: {
          DEFAULT: "#dcdcfc"
        }
      }
    }
  },
  plugins: [],
}

