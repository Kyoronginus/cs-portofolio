/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          300: 'oklch(90.5% 0.182 98.111)',
          400: 'oklch(85.2% 0.199 91.936)',
        },
        gray: {
          300: 'oklch(87.2% 0.01 258.338)',
          400: 'oklch(70.7% 0.022 261.325)',
          500: 'oklch(55.1% 0.027 264.364)',
          700: 'oklch(37.3% 0.034 259.733)',
          800: 'oklch(27.8% 0.033 256.848)',
          900: 'oklch(21% 0.034 264.665)',
        },
      },
      spacing: {
        '100': '25rem',
        '150': '37.5rem',
      },
      maxWidth: {
        '2xl': '42rem',
        '4xl': '56rem',
      },
      fontSize: {
        'sm': ['0.875rem', { lineHeight: 'calc(1.25 / 0.875)' }],
        'lg': ['1.125rem', { lineHeight: 'calc(1.75 / 1.125)' }],
        'xl': ['1.25rem', { lineHeight: 'calc(1.75 / 1.25)' }],
        '2xl': ['1.5rem', { lineHeight: 'calc(2 / 1.5)' }],
        '4xl': ['2.25rem', { lineHeight: 'calc(2.5 / 2.25)' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      fontWeight: {
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      borderRadius: {
        'md': '0.375rem',
        'lg': '0.5rem',
      },
      blur: {
        'md': '12px',
      },
      aspectRatio: {
        'video': '16 / 9',
      },
      transitionDuration: {
        DEFAULT: '150ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

