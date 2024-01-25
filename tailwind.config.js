/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        productBackground: "url('/assets/images/img-1.jpg')",
      },
      boxShadow: {
        card: '0px 0px 15px rgba(0,0,0,0.25)',
        container: '0px 0px 16px rgba(0,0,0,0.20)',
      },
      colors: {
        white: "#fbfbfb",
        brown: "#5C3614",
        pink: "#F7857A"
      },
      fontFamily: {
        ebgaramond: ["var(--font-ebgaramond)"],
        opensans: ["var(--font-opensans)"],
      }
    },
  },
  plugins: [],
};
