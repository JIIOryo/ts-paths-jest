import * as webLib from '@Lib/web_lib'

describe('webLib', () => {
  it('webLibModule()', () => {
    expect(webLib.webLibModule).toBeDefined()
    webLib.webLibModule()
  })

  it('webLibMessage', () => {
    expect(webLib.webLibMessage).toBeDefined()
    expect(webLib.webLibMessage).toBe('web_libのメッセーいだよ')
  })
})
