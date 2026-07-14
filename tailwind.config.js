/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}'],
  theme: { extend: { colors: { arshi: { red: '#B42A1D', wine: '#90281B', orange: '#FF6638', peach: '#ED9279', ink: '#304132', sage: '#4F7E6A', mist: '#FAFAFA' } }, fontFamily: { sans: ['var(--font-sans)'] } } },
  plugins: []
};
