/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Black: "#000",
        hover: "#fd4e4e",
        primary: "#151515",
        textSecondary: "#444",
        white: "#fff",
        secondary2: "#FF2400",
        secondary: "#999",
        colorText: "#111",
        background: "#FCFBFA",
        colorLink: "#b19e7f",
      },
    },
    screens: {
      s450: "450px", // Customizing sm breakpoint
      sm: "640px", // Customizing sm breakpoint
      md: "770px", // Customizing md breakpoint
      s800: "800px", // Customizing md breakpoint
      s900: "900px", // Customizing md breakpoint
      s1000: "1000px", // Customizing md breakpoint
      s1100: "1100px", // Customizing md breakpoint
      lg: "1024px", // Customizing lg breakpoint
      xl: "1280px", // Customizing xl breakpoint
      "2xl": "1536px", // Customizing 2xl breakpoint
    },
  },
  plugins: [],
};
