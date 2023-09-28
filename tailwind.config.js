module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightPurple: '#a557a3',
        lightBlue: '#a5b0ff',
        backgroundPrimary: '#0b121a',
        backgroundSecondary: '#202e3e',
      },
      theme: {
        cardWidth: '75px',
      },
      fontFamily: {
        raleway: ['raleway'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
