/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths based on your project structure
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        dark_purple: '#070F2B',
        purple1: '#1B1A55',
        purple2: '#535C91',
        light_purple: '#9290C3',

      },
      boxShadow: {
        'custom': '10px 10px 30px #535C91, -10px -10px 30px #9290C3',
      },
      borderRadius: {
        'custom-br': '50px',
        'custom-tl': '50px',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
      },
      scale: {
        '105': '1.05',
      },
    },
  },
  plugins: [],
};
