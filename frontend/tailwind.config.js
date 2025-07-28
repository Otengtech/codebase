// tailwind.config.js
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        seablue: "#0077b6",
        yellow: "#f9d342",
        dark: "#000000",
      },
      animation: {
        blob: "blob 6s infinite",
        "fade-in-up": "fadeInUp 1s ease-out",
        wave: 'wave 1.5s infinite',
      },
    },
    keyframes: {
      blob: {
        "0%": { transform: "translate(0px, 0px) scale(1)" },
        "33%": { transform: "translate(30px, -40px) scale(1.1)" },
        "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        "100%": { transform: "translate(0px, 0px) scale(1)" },
      },
      wave: {
        '0%': { transform: 'rotate(0deg)' },
        '15%': { transform: 'rotate(14deg)' },
        '30%': { transform: 'rotate(-8deg)' },
        '40%': { transform: 'rotate(14deg)' },
        '50%': { transform: 'rotate(-4deg)' },
        '60%': { transform: 'rotate(10deg)' },
        '70%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(0deg)' },
      },
      fadeInUp: {
        "0%": { opacity: 0, transform: "translateY(20px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
    }

  },
  plugins: [typography],
  
}
