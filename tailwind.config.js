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

        // Contrast ratios measured against `surface` (#0f1218), the worst-case
        // background any of these sit on. WCAG AA needs 4.5:1 for text.
        ink: {
          DEFAULT: '#e6e9ef', // 15.4:1  primary
          soft: '#98a1b0', //  7.2:1  secondary body
          dim: '#747f91', //  4.6:1  smallest text. Do not go dimmer than this.
          // 3.0:1. NON-TEXT ONLY: decorative icons, inactive control strokes.
          // WCAG 1.4.11 covers UI components at 3:1; it fails for any text.
          faint: '#556276',
        },

        accent: {
          DEFAULT: '#4a8cf7', // 5.7:1 on surface
          bright: '#7aabff',
          dim: 'rgba(74,140,247,0.10)',
          line: 'rgba(74,140,247,0.28)',
        },

        live: '#3ecf8e',
      },

      // ONE radius rule, applied everywhere:
      //   surfaces (image frames, panels, grids) -> lg / 12px
      //   controls (buttons, small affordances)  -> sm /  4px
      //   full   -> only genuinely circular or pill elements (dots, progress bars)
      borderRadius: {
        none: '0',
        sm: '4px',
        DEFAULT: '4px',
        md: '8px',
        lg: '12px',
        xl: '12px',
        '2xl': '12px',
        full: '9999px',
      },

      fontSize: {
        // Restrained scale. This design does its work with weight and space,
        // not with size jumps.
        display: ['clamp(32px, 3.3vw, 48px)', { lineHeight: '1.06', letterSpacing: '-0.032em' }],
        title: ['clamp(24px, 2.3vw, 30px)', { lineHeight: '1.18', letterSpacing: '-0.02em' }],
        price: ['26px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        stat: ['24px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        lede: ['17px', { lineHeight: '1.62' }],
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
        riseIn: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-dot': 'pulseDot 2.4s ease-in-out infinite',
        'rise-in': 'riseIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}
