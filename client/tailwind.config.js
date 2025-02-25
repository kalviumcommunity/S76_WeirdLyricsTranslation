// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f2937", // Dark gray (Background)
        secondary: "#3b82f6", // Blue (Buttons)
        accent: "#facc15", // Yellow (Highlights)
      },
    },
  },
  plugins: [],
};
