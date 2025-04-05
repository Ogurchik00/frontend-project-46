import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';

export default defineConfig([
  {
    rules: {
      eqeqeq: 'off',
      'consistent-return': 'off',
      'array-callback-return': 'off',
      'import/no-named-default': 'off',
      'import/no-unresolved': 'off',
    },
  },
  { files: ['**/*.{js,mjs,cjs}'] },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  { files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
]);
