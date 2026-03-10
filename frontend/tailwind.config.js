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
          900: '#3b0764',
        },
        // Removed rose accent — replaced with silver/white (Apple-style)
        accent: {
          300: '#f1f5f9',
          400: '#e2e8f0',
          500: '#cbd5e1',
        },
        surface: {
          0:   '#161617',   // Apple dark card — not pure black, slightly lifted
          50:  '#000000',   // page background — true black
          100: '#0d0d0d',   // alternate sections
          200: '#ffffff14', // glass border — rgba white 8%
          300: '#ffffff22', // stronger glass border
        },
        text: {
          primary:   '#f5f5f7',   // Apple SF Pro white
          secondary: '#a1a1a6',   // Apple secondary label
          muted:     '#48484a',   // Apple tertiary label
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
        'soft':       '0 2px 20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)',
        'soft-lg':    '0 8px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08)',
        'card':       '0 1px 0 0 rgba(255,255,255,0.06) inset, 0 4px 20px rgba(0,0,0,0.5)',
        'card-hover': '0 1px 0 0 rgba(255,255,255,0.1) inset, 0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,92,246,0.3)',
        'glow':       '0 0 60px rgba(139,92,246,0.35)',
        'glow-sm':    '0 0 20px rgba(139,92,246,0.2)',
      },
    },
  },
  plugins: [],
};
