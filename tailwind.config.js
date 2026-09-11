/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFBFC', // Clean light background
        surface: '#FFFFFF', // Pure white surface
        borderLine: 'rgba(15,23,42,0.08)',
        accent: {
          500: '#0ea5e9', // Trustworthy Medical Blue/Ocean
          600: '#0284c7',
        },
        primary: {
          300: '#7dd3fc',
          500: '#0ea5e9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 8s ease-in-out infinite',
        'aurora': 'aurora 60s linear infinite',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        aurora: {
          '0%': { backgroundPosition: '50% 50%, 50% 50%' },
          '50%': { backgroundPosition: '100% 50%, 0% 50%' },
          '100%': { backgroundPosition: '50% 50%, 50% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
