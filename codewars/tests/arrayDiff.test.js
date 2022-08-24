const arrayDiffTest = require("../arrayDiff");

test("Testing normal happy path",() =>{
    expect(arrayDiffTest([1,2],[1])).toBe([2]);
})

test("Testing long happy path",() =>{
    expect(arrayDiffTest([1,2,2,2,3],[1])).toBe([1,3]);
})