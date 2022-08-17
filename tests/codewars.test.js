const solutionTest = require('../codewars/codewars.js');


test('ingests "abc" and matches "bc"',() => {
    expect(solutionTest('abc','bc')).toBe(true);
})

test('ingests "abc" and does not match on "d"', () => {
    expect(solutionTest('abc', 'd')).toBe(false);
})