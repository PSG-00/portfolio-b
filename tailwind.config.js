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
        sky: {
          50: '#f0f4f8', 100: '#e4edf5', 200: '#c7d8e8', 300: '#a9c4df',
          400: '#7da7cf', 500: '#447bab', 600: '#245b92', 700: '#214e7b',
          800: '#203f5e', 900: '#1b334b', 950: '#152738',
        },
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
        xs: ['0.9375rem', { lineHeight: '1.45rem' }],
        sm: ['1.0625rem', { lineHeight: '1.75rem' }],
        base: ['1.125rem', { lineHeight: '1.85rem' }],
        lg: ['1.5rem', { lineHeight: '2.25rem' }],
        xl: ['1.75rem', { lineHeight: '2.5rem' }],
        '2xl': ['2.125rem', { lineHeight: '2.85rem' }],
        '3xl': ['2.5rem', { lineHeight: '3.25rem' }],
        '4xl': ['3rem', { lineHeight: '3.75rem' }],
      },
    },
  },
  plugins: [],
}
