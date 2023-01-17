/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '410px',
      'md': '680px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      keyframes: {
        players: {
          '0%': { transform: 'translateY(3rem)' },
          '50%': { transform: 'translateY(0)' }
        },
        navbar: {
          '0%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(0%)' }
        }
      },
      animation: {
        'players-appear': 'players 1s ease-out forwards',
        'navbar-appear': 'navbar 1s ease-out forwards'
      },
    }
  },
  plugins: [],
}
