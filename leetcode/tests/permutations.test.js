const permutationsTest = require('../permutations');

test('expect [1,2,3] to return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]', () => {
    expect(permutationsTest.permute([1,2,3])).toEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);

})