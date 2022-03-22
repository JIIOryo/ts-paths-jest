import * as d from '@C/d'

describe('d', () => {
  it('deep', () => {
    expect(d.deep).toBe('pinsir')
    expect(d.dAdd(1, 2)).toBe(3)
  })

  it('dAdd', () => {
    expect(d.dAdd(1, 2)).toBe(3)
  })
})
