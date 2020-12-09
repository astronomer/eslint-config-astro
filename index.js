module.exports = {
  root: true, // Prevent ESLint from inheriting configuration above this file
  extends: 'eslint-config-airbnb-base',
  parser: 'babel-eslint',
  plugins: ['jest'],
  env: {
    'jest/globals': 'true'
  },
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'import/no-unresolved': [2, { 'caseSensitive': false }]
  }
};
