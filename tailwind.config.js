/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Ground: cool near-black, biased very slightly toward the accent
        // so the blue never looks foreign on it.
        canvas: '#0a0c10',
        surface: '#0f1218',
        raised: '#151922',

        // Hairlines carry the structure in this design, so they get names.
        hair: 'rgba(255,255,255,0.07)',
        'hair-strong': 'rgba(255,255,255,0.13)',

        ink: {
          DEFAULT: '#e6e9ef',
          soft: '#98a1b0',
          dim: '#646e7f',
          faint: '#3d4655',
        },

        accent: {
          DEFAULT: '#4a8cf7',
          bright: '#7aabff',
          dim: 'rgba(74,140,247,0.10)',
          line: 'rgba(74,140,247,0.28)',
        },

        live: '#3ecf8e',
      },
      fontSize: {
        // Restrained scale. Design 2 does its work with weight and space,
        // not with size jumps.
        display: ['clamp(30px, 3.1vw, 44px)', { lineHeight: '1.06', letterSpacing: '-0.032em' }],
        title: ['clamp(24px, 2.3vw, 30px)', { lineHeight: '1.18', letterSpacing: '-0.02em' }],
        price: ['26px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        stat: ['24px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        lede: ['16.5px', { lineHeight: '1.62' }],
      },
      maxWidth: {
        prose: '58ch',
        measure: '42ch',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(0.75)' },
        },
      },
      animation: {
        'pulse-dot': 'pulseDot 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
