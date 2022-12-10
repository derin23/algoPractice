const sortedSquaredArrayTest = require('../sortedSquaredArray');

test('expected return [1, 4, 9, 25, 36, 64, 81]', () => {
    expect(sortedSquaredArrayTest.sortedSquaredArrayBrute([1, 2, 3, 5, 6, 8, 9])).toEqual([1, 4, 9, 25, 36, 64, 81]);
})

test('expected return [1, 4, 9, 16, 25]', () => {
    expect(sortedSquaredArrayTest.sortedSquaredArrayBrute([-5, -4, -3, -2, -1])).toEqual([1, 4, 9, 16, 25]);
})

test('expected return [1, 4, 9, 25, 36, 64, 81]', () => {
    expect(sortedSquaredArrayTest.sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])).toEqual([1, 4, 9, 25, 36, 64, 81]);
})

test('expected return [1, 4, 9, 16, 25]', () => {
    expect(sortedSquaredArrayTest.sortedSquaredArray([-5, -4, -3, -2, -1])).toEqual([1, 4, 9, 16, 25]);
})