/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#09090e',
          surface: '#11111a',
          card: '#161624',
          cardHover: '#1c1c2e',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(168, 85, 247, 0.4)',
          text: '#f1f1f5',
          muted: '#9494a8'
        },
        light: {
          bg: '#f8f9fc',
          surface: '#ffffff',
          card: '#ffffff',
          cardHover: '#f3f4f8',
          border: 'rgba(0, 0, 0, 0.08)',
          borderHover: 'rgba(139, 92, 246, 0.4)',
          text: '#0f172a',
          muted: '#64748b'
        },
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        accent: {
          purple: '#8b5cf6',
          violet: '#a855f7',
          indigo: '#6366f1',
          cyan: '#06b6d4',
          pink: '#ec4899',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'Alexandria', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(139, 92, 246, 0.2)',
        'glow-md': '0 0 30px rgba(139, 92, 246, 0.3)',
        'glow-lg': '0 0 50px rgba(139, 92, 246, 0.4)',
        'glow-indigo': '0 0 30px rgba(99, 102, 241, 0.3)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        }
      }
    },
  },
  plugins: [],
}
