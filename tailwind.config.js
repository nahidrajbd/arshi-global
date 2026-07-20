/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}'],
  theme: { extend: { colors: { arshi: { red: '#046f81', wine: '#035a6a', orange: '#05a0ba', peach: '#7dd8e6', ink: '#0d2d35', sage: '#1a6070', mist: '#f0fafc' } }, fontFamily: { sans: ['var(--font-sans)'] } } },
  plugins: []
};
