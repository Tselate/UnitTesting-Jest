const duplicate = require('./duplicate')

test('Duplicates an array', () => {
    const array = ["Hello", "World", 1, 2, 3] 
    expect(duplicate(array)).toEqual(array)
})