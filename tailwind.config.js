/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      colors: {
        bg: {
          primary:   '#080c12',
          secondary: '#0d1117',
          tertiary:  '#131a24',
        },
        blue: {
          accent: '#3d8ef0',
          bright: '#60a8ff',
          dim:    'rgba(61,142,240,0.12)',
          border: 'rgba(61,142,240,0.2)',
        },
        text: {
          primary:   '#e2eaf6',
          secondary: '#6b7fa0',
          dim:       '#384560',
        },
        border: {
          DEFAULT: 'rgba(99,157,255,0.1)',
          hover:   'rgba(99,157,255,0.22)',
        },
        green: {
          DEFAULT: '#3ecf8e',
          dim:     'rgba(62,207,142,0.1)',
        },
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(rgba(99,157,255,0.07) 1px, transparent 1px)',
        'hero-glow': 'radial-gradient(circle, rgba(61,142,240,0.07) 0%, transparent 70%)',
      },
      backgroundSize: {
        'dot-grid': '32px 32px',
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease both',
        'pulse-dot': 'pulseDot 2s ease infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1',  transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(0.8)' },
        },
      },
    },
  },
  plugins: [],
}
