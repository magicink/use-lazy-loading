import { useLazyLoading } from '../dist/bundle'

describe('useLazyLoading', () => {
  it('should expose the initializer', async () => {
    expect(typeof useLazyLoading).toEqual('function')
  })
})
