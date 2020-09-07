module.exports = {
  globals: {
    jQuery: 'readable',
  },
  env: {
    browser: true,
  },
  plugins: ['prettier'],
  extends: ['prettier'],
  parserOptions: {
    ecmaVersion: 6,
  },
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
