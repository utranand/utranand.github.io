/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ai-bg': '#09090b',
        'neon-cyan': '#0df2f2',
        'neon-purple': '#8b5cf6',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': {
            opacity: '0.15',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.25',
            transform: 'scale(1.05)',
          },
        },
      },
    },
  },
  plugins: [],
}
