import baseConfig from '@repo/eslint-config/base'
import reactInternalConfig from '@repo/eslint-config/react-internal'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...baseConfig,
  ...reactInternalConfig,
  // Możesz dodać specyficzne reguły dla tego pakietu tutaj
  {
    ignores: [
      'node_modules/',
      'dist/',
      'vitest.config.ts',
      'src/setupTests.ts',
    ],
  },
]
