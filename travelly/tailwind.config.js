/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {},
      backgroundImage: {
        "blob-one": "url('/images/blob1.svg')",
        "blob-two": "url('/images/blob2.svg')",
        "sign-Up": "url('/images/signUps.svg')",
        "sign-In": "url('/images/signIns.svg')",
        "user-Home": "url('/images/userHome2.svg')",
        "create-Blog": "url('/images/userHome2.svg')",
        "profile-circle": "url('/images/profileBlob.svg')",
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
