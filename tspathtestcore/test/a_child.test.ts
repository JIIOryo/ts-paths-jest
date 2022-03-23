import * as test from '@Test/index'
import * as aChild from '@A/a_child'

describe('a_child', () => {
  beforeAll(() => {
    console.log(test.testRootMessage)
  })
  it('a_child', () => {
    expect(aChild.aChild).toBe('a_child')
  })
})
