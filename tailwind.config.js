import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'
import { typographyStyles } from './typography.ts'

module.exports = {
  content: [
    './pages/**/*.{js,ts,vue}',
    './components/**/*.{js,ts,vue}',
    './layouts/**/*.{js,ts,vue}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      typography: typographyStyles,
      backgroundSize: {
        '200%': '200%',
      },
      animation: {
        'bg-shift': 'bg-shift 2s linear infinite',
        'pulse-slow': 'pulse 3s linear infinite',
      },
      keyframes: {
        'bg-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [tailwindTypography, tailwindForms],
}
