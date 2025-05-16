import { describe, it, expect } from 'vitest'
import { getChainId, CHAIN_NAME } from './index.js'

describe('chain utils', () => {
  describe('getChainId', () => {
    it('should return 1', () => {
      expect(getChainId()).toBe(1)
    })
  })

  describe('CHAIN_NAME', () => {
    it('should be "MyChain"', () => {
      expect(CHAIN_NAME).toBe('MyChain')
    })
  })
})
