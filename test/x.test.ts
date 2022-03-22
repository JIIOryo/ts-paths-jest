// import * as z from '../src/x/y/z'
import * as z from '@X/y/z'

describe('z', () => {
  it('deep', () => {
    expect(z.z).toBe('pinsir')
  })
  
  it('zAdd', () => {
    expect(z.zAdd(1, 2)).toBe(3)
  })
})
