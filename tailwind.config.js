/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        sm: "1rem",
      },
    },
    extend: {
      colors: {
        brand: {
          "bl-primary": {
            600: "#25262E",
            700: "#1C1C25",
            800: "#101216",
          },
        },
      },
    },
  },
  plugins: [],
};
