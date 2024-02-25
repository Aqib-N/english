/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      yellow: "#DCE00B",
      primary: "#04181E",
      secondary: "#102D37",
      secondaryBdr: "#26A2C9",
      gray: "#626060",
      gray1: "#D9D9D9",
      primaryRGB: "rgba(17, 35, 41, 0.42)",
    },
    extend: {},
  },
  plugins: [],
};
