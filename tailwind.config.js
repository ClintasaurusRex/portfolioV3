tailwind.config.js;
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        space: {
          black: "#000814",
          dark: "#001D3D",
          blue: "#003566",
          nebula: "#7209B7",
          star: "#FFD60A",
          planet: "#06D6A0",
        },
      },
      animation: {
        twinkle: "twinkle 4s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.3 },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(100px)" },
          "100%": { transform: "rotate(360deg) translateX(100px)" },
        },
      },
      boxShadow: {
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        // Add other custom shadow definitions as needed
      },
    },
  },
  plugins: [],
};
