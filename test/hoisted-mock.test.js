const somePath = '/some/random/path'
jest.mock(somePath, () => {
  return 8
}, { virtual:true })


describe('context', () => {
  it('test', () => {
  })
})
