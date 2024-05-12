/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        regular: ["Regular"],
        belgiano: ["Belgiano"]
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

