/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./joel_wiebe_holistic_portfolio.tsx"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#070b11',
          cardDark: '#0c121e',
          copper: '#b45309',
          amber: '#d97706',
          emerald: '#059669',
          navy: '#0f172a',
          slateBorder: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
