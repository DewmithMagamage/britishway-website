/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(1)', opacity: '0' },
          '50%': { transform: 'scale(1.2)', opacity: '0.5' },
          '100%': { transform: 'scale(1.4)', opacity: '1' },
        },
        borderPulse: {
          '0%, 100%': { borderColor: 'rgba(37, 99, 235, 0)' },
          '50%': { borderColor: 'rgba(37, 99, 235, 1)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        blink: {
          '50%': { borderColor: 'transparent' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        zoomIn: 'zoomIn 2s ease-in-out',
        borderPulse: 'borderPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        typing: 'typing 3.5s steps(40, end)',
        blink: 'blink 1s step-end infinite'
      }
    },
  },
  plugins: [],
}


