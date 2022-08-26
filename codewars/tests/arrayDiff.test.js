const arrayDiffTest = require("../arrayDiff");

test("Testing normal happy path",() =>{
    expect(arrayDiffTest([1,2],[1])).toEqual([2]);
})

test("Testing long happy path",() =>{
    expect(arrayDiffTest([1,2,2,2,3],[2])).toEqual([1,3]);
})

test("([1,2], [1]) should return [2]", () => {
    expect(arrayDiffTest([1,2],[1])).toEqual([2]);
})
test("([1,2,2], [1]) should return [2,2]",() => {
    expect(arrayDiffTest([1,2,2],[1])).toEqual([2,2]);
})
test("([1,2,2],[2]) should return [1]",() => {
    expect(arrayDiffTest([1,2,2], [2])).toEqual([1]);
})
test("(1,2,2),[] should return [1,2,2]",() => {
    expect(arrayDiffTest([1,2,2],[])).toEqual([1,2,2]);
})
test("([], [1,2]) should return []", () => {
    expect(arrayDiffTest([],[1,2])).toEqual([]);
})
test("([1,2,3], [1,2]) should return [2]", () => {
    expect(arrayDiffTest([1,2,3], [1,2])).toEqual([3]);
})