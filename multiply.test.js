const multiply = require('./multiply')

test('Multiplies two integers together', () => {
    expect(multiply(3, 3)).toBe(9)
    expect(multiply(4, 4)).toBe(16)
})