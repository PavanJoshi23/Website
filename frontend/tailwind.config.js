/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f5f3ff',
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
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
        },
        surface: {
          0:   '#ffffff',
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
        },
        text: {
          primary:   '#0f172a',
          secondary: '#475569',
          muted:     '#94a3b8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-up':       'fadeUp 0.6s ease-out forwards',
        'fade-in':       'fadeIn 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'float':         'float 3s ease-in-out infinite',
        'pulse-slow':    'pulse 3s ease-in-out infinite',
        'gradient-x':    'gradientX 6s ease infinite',
        'spin-slow':     'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      boxShadow: {
        'soft':       '0 2px 15px -3px rgba(139, 92, 246, 0.1), 0 10px 20px -2px rgba(139, 92, 246, 0.04)',
        'soft-lg':    '0 10px 40px -10px rgba(139, 92, 246, 0.2)',
        'card':       '0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(139,92,246,0.07)',
        'card-hover': '0 8px 30px rgba(139,92,246,0.18)',
        'glow':       '0 0 30px rgba(139,92,246,0.25)',
      },
    },
  },
  plugins: [],
};
