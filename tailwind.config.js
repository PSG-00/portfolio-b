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
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'sans-serif',
        ],
      },
      fontSize: {
        '2xs': ['0.875rem', { lineHeight: '1.25rem' }],    // 14px
        xs: ['1rem', { lineHeight: '1.5rem' }],            // 16px (기존 12px -> 16px)
        sm: ['1.125rem', { lineHeight: '1.75rem' }],       // 18px (기존 14px -> 18px)
        base: ['1.25rem', { lineHeight: '1.95rem' }],      // 20px (기존 16px -> 20px)
        lg: ['1.375rem', { lineHeight: '2.1rem' }],        // 22px (기존 18px -> 22px)
        xl: ['1.625rem', { lineHeight: '2.35rem' }],       // 26px (기존 20px -> 26px)
        '2xl': ['2rem', { lineHeight: '2.75rem' }],        // 32px (기존 24px -> 32px)
        '3xl': ['2.375rem', { lineHeight: '3.15rem' }],    // 38px (기존 30px -> 38px)
        '4xl': ['2.875rem', { lineHeight: '3.65rem' }],    // 46px (기존 36px -> 46px)
      },
    },
  },
  plugins: [],
}
