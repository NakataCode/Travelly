/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        animate1: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
        animate2: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        animate1: "animate1 10s linear infinite",
        animate2: "animate2 10s linear infinite",
      },
      backgroundImage: {
        "blob-one": "url('/images/blob1.svg')",
        "blob-two": "url('/images/blob2.svg')",
        "sign-Up": "url('/images/signUps.svg')",
        "sign-In": "url('/images/signIns.svg')",
        "user-Home": "url('/images/userHome2.svg')",
        "create-Blog": "url('/images/userHome2.svg')",
      },
    },
  },
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  plugins: [],
};
