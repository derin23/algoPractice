const twoNumberSumTest = require('../twoNumberSum');

test('expect [11,-1]', () => {
    expect(twoNumberSumTest.twoNumberSum([3,5,4,8,11,1,-1,6], 10)).toEqual([11, -1])
})