module.exports = {
  env: {
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  rules: { 'linebreak-style': 0 },
};
