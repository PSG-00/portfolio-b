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
        '2xs': ['0.75rem', { lineHeight: '1.15rem' }],     // 12px (이전 text-xs 대응용)
        xs: ['0.875rem', { lineHeight: '1.35rem' }],       // 14px (기존 12px -> 14px, +2px)
        sm: ['1rem', { lineHeight: '1.55rem' }],           // 16px (기존 14px -> 16px, +2px)
        base: ['1.125rem', { lineHeight: '1.75rem' }],     // 18px (기존 16px -> 18px, +2px)
        lg: ['1.25rem', { lineHeight: '1.85rem' }],        // 20px (기존 18px -> 20px, +2px)
        xl: ['1.45rem', { lineHeight: '2.05rem' }],        // 23.2px (기존 20px -> 23.2px, +3.2px)
        '2xl': ['1.75rem', { lineHeight: '2.35rem' }],     // 28px (기존 24px -> 28px, +4px)
        '3xl': ['2.15rem', { lineHeight: '2.65rem' }],     // 34.4px (기존 30px -> 34.4px, +4.4px)
        '4xl': ['2.65rem', { lineHeight: '3.1rem' }],      // 42.4px (기존 36px -> 42.4px, +6.4px)
      },
    },
  },
  plugins: [],
}
