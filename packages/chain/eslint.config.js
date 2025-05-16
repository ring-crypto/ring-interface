import baseConfig from '@repo/eslint-config/base'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...baseConfig,
  // Możesz dodać specyficzne reguły dla tego pakietu tutaj
  {
    ignores: ['node_modules/', 'dist/', 'vitest.config.ts'],
  },
]
