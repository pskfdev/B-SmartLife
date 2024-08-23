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
        "smart-home": "url('https://www.fibaro.com/en/wp-content/uploads/sites/5/2018/05/use-cases-lighting-cards-03.jpg')",
        "smart-building": "url('https://www.fibaro.com/en/wp-content/uploads/sites/5/2018/05/use-cases-gates-_usecase_9.jpg')",
        "smart-hotel": "url('https://www.fibaro.com/en/wp-content/uploads/sites/5/2018/05/use-cases-security-_usecase_7.jpg')",
        "smart-marine": "url('https://www.fibaro.com/pl/wp-content/uploads/sites/5/2018/05/use-cases-garden-cards-02.jpg')",
        
        /* bg-our-system */
        "our-system1": "url('https://www.fibaro.com/en/wp-content/uploads/sites/3/2017/09/easy-setup-desktop.jpg')",
        "our-system2": "url('https://www.fibaro.com/en/wp-content/uploads/sites/3/2017/02/security.jpg')",
        "our-system3": "url('https://www.fibaro.com/en/wp-content/uploads/sites/3/2017/02/roller-header-desktop.jpg')",
        "our-system4": "url('https://www.fibaro.com/wp-content/uploads/assets/support/vulnerability.jpg')",

        /* bg-about-system */
        "about-system1": "url('https://www.fibaro.com/en/wp-content/uploads/sites/5/2018/05/use-cases-timeline-08.jpg')",
        "about-system2": "url('https://www.fibaro.com/en/wp-content/uploads/sites/5/2018/05/use-cases-safety-_usecase_4.jpg')",

        /* bg contact-page */
        "showroom": "url('/bg/showroom.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
