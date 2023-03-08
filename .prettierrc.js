module.exports = {
  singleQuote: true,
  semi: false,
  bracketSameLine: true,
  plugins: [require('prettier-plugin-tailwindcss')],
  overrides: [
    {
      files: '*.hbs',
      options: {
        singleQuote: false,
      },
    },
  ],
}
