import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    globals: true, // 如果你希望全局可用 describe, it, expect 等
    setupFiles: [], // 例如：'./src/setupTests.ts' 如果需要设置文件
  },
})
