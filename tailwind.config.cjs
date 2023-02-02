/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-monts)'],
        mono: ['var(--font-frank)']
      }
    },
  },
  plugins: [],
};
