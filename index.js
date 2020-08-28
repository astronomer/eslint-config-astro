module.exports = {
  root: true, // Prevent ESLint from inheriting configuration above this file
  extends: 'eslint-config-airbnb',
  parser: 'babel-eslint',
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'import/no-unresolved': [2, { 'caseSensitive': false }],
    'arrow-parens': 'off',
    'prefer-object-spread': 'off',
    'no-mixed-operators': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-newline': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/static-property-placement': 'off',
    'react/state-in-constructor': 'off'
  }
};
