const { defineConfig, globalIgnores } = require('eslint/config');

const globals = require('globals');
const prettier = require('eslint-plugin-prettier');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },

      ecmaVersion: 2018,
      parserOptions: {},
    },

    plugins: {
      prettier,
    },

    extends: compat.extends('prettier'),

    rules: {
      'prettier/prettier': 'error',
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
  globalIgnores(['**/.utils', '**/build', '**/dist']),
]);
