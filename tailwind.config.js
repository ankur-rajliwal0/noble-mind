/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "12px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024",
          xl: "1180px",
          xxl: "1538px",
        },
      },
      fontFamily: {
        Plus_Jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
