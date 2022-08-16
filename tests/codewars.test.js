const solution = require('../codewars.js');


test('ingests "abc" and matches "bc"',() => {
    expect(solution('abc','bc')).toBe(true);
})