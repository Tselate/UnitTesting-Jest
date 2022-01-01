const divide = require('./divide')

test('Divided two intgers', () => {
    expect(divide(9, 3)).toBe(3)
    expect(divide(16, 4)).toBe(4)
})