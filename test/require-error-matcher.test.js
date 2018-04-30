describe('the expect.any(Error)', () => {
  it('does not catch require errors', () => {
    const stub = jest.fn()
    try {
      require('/whatever/path')
    } catch(e) {
      stub(e)
    }
    expect(stub).toHaveBeenCalledWith(expect.any(Error))
  })
})
