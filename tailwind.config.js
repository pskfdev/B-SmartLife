/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        /* bg smart-system */
        "smart-home": "url('https://via.placeholder.com/600/24f355')",
        "smart-building": "url('https://via.placeholder.com/600/d32776')",
        "smart-hotel": "url('https://via.placeholder.com/600/f66b97')",
        "smart-marine": "url('https://via.placeholder.com/600/56a8c2')",
        /* bg-our-system */
        "our-system1": "url('https://via.placeholder.com/600/56a8c2')",
        "our-system2": "url('https://via.placeholder.com/600/f66b97')",
        "our-system3": "url('https://via.placeholder.com/600/24f355')",
        /* bg-about-system */
        "about-system1": "url('https://via.placeholder.com/600/24f355')",
        "about-system2": "url('https://via.placeholder.com/600/92c952')",
        /* bg contact-page */
        "showroom": "url('/bg/showroom.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
