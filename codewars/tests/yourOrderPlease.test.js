const solutionTest = require('../yourOrderPlease.js');

test('abc2 bcc1 should return bcc1 abc2', () => {
    expect(solutionTest('abc2 bcc1')).toBe('bcc1 abc2');
})

test('should return empty string',() => {
    expect(solutionTest("")).toBe("");
})