/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.hbs', './**/*.hbs', './assets/js/*.js'],
  theme: {
    extend: {
      colors: {
        brand: 'var(--ghost-accent-color)',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      typography: ({ theme }) => ({
        mxsr: {
          css: {
            '--tw-prose-body': theme('colors.neutral[900]'),
            '--tw-prose-headings': theme('colors.neutral[900]'),
            '--tw-prose-lead': theme('colors.neutral[900]'),
            '--tw-prose-links': theme('colors.brand'),
            '--tw-prose-bold': theme('colors.neutral[900]'),
            '--tw-prose-counters': theme('colors.neutral[900]'),
            '--tw-prose-bullets': theme('colors.neutral[900]'),
            '--tw-prose-hr': theme('colors.neutral[400]'),
            '--tw-prose-quotes': theme('colors.neutral[900]'),
            '--tw-prose-quote-borders': theme('colors.neutral[400]'),
            '--tw-prose-captions': theme('colors.neutral[900]'),
            '--tw-prose-code': theme('colors.neutral[900]'),
            '--tw-prose-pre-code': theme('colors.neutral[100]'),
            '--tw-prose-pre-bg': theme('colors.neutral[900]'),
            '--tw-prose-th-borders': theme('colors.neutral[400]'),
            '--tw-prose-td-borders': theme('colors.neutral[600]'),
          },
        },
      }),
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
