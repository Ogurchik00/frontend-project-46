import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';

export default defineConfig([
  {
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
  { files: ['**/*.{js,mjs,cjs}'] },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  { files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
]);
