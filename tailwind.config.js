/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        display: ["var(--display)"],
        inter: ["var(--inter)"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: "#a7aab4",
        secondary: "#f5f5f5",
        accent: "#33ff00",
        neutral: "#110c0d",
        "base-100": "#1a1b1e",
        "base-300": "#121314",
        info: "#00c6ff",
        success: "#00d275",
        warning: "#ea580c",
        error: "#d20000",
      },
    },
  },
};
