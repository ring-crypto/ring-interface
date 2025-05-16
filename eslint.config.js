// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: ['apps/*/tsconfig.json', 'packages/*/tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    ignores: [
      'node_modules/',
      '.turbo/',
      'dist/',
      'coverage/',
      'apps/app/.next/',
      '**/vitest.config.ts',
      '**/vite.config.ts',
      '**/eslint.config.js',
      '.husky/',
      '**/src/setupTests.ts',
    ],
  }
)
