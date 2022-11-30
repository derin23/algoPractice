const twoNumberSumTest = require('../twoNumberSum');

test('expect [11,-1]', () => {
    expect(twoNumberSumTest.twoNumberSum([3,5,4,8,11,1,-1,6], 10)).toEqual([-1, 11])
})
test('expect [3,4]', () => {
    expect(twoNumberSumTest.twoNumberSum([1,4,3,2], 7)).toEqual([3, 4]);
})
test('expect [1, 2]', () => {
    expect(twoNumberSumTest.twoNumberSum([1,2,3,4], 3)).toEqual([1, 2]);
})
test('expect []', () => {
    expect(twoNumberSumTest.twoNumberSum([1,2,3,4], 13)).toEqual([]);
})



test('expect [11,-1]', () => {
    expect(twoNumberSumTest.twoNumberSum1([3,5,4,8,11,1,-1,6], 10)).toEqual([11,-1])
})
test('expect [3,4]', () => {
    expect(twoNumberSumTest.twoNumberSum1([1,4,3,2], 7)).toEqual([4,3]);
})
test('expect [1, 2]', () => {
    expect(twoNumberSumTest.twoNumberSum1([1,2,3,4], 3)).toEqual([1, 2]);
})
test('expect []', () => {
    expect(twoNumberSumTest.twoNumberSum1([1,2,3,4], 13)).toEqual([]);
})




