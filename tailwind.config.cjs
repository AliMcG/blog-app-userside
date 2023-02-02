/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Adds two custom fonts here
        sans: ['var(--font-monts)'],
        mono: ['var(--font-frank)']
      },
      backgroundColor: {
        // Adds the custom background clour to use in the code.
        custom: {
          blue: 'var(--color-custom-blue)'
        }
      }
    },
  },
  plugins: [],
};
