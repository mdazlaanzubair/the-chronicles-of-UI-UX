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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#858890",
      secondary: "#ffffff",
      accent: "#12a669",
      neutral: "#110c0d",
      "base-100": "#1a1b1e",
      "base-300": "#121314",
      info: "#00c6ff",
      success: "#00d275",
      warning: "#ea580c",
      error: "#d20000",
    },
  },
};
