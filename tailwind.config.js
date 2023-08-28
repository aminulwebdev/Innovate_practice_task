/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_clr: "#30344E",
        secondary_clr: "#5B5F77",
        brand_clr: "#FD5F36",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      menu: ["Open Sans", "sans-serif"],
      primary: ["Poppins", "sans-serif"],
      secondary: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
