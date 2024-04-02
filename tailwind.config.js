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
        cabin: ["var(--cabin)"],
        inter: ["var(--inter)"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: "#6d6d6d",
        secondary: "#cacaca",
        accent: "#0DE20E",
        neutral: "#110c0d",
        "base-100": "#0d0d0d",
        "base-300": "#040504",
        info: "#00c6ff",
        success: "#00d275",
        warning: "#ea580c",
        error: "#d20000",
      },
    },
  },
};
