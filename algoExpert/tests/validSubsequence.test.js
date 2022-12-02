const validSubsequenceTest = require("../validSubsequence");

test("returns true",()=>{
    expect(validSubsequenceTest.isValidSubsequence([1,2,3,4,5],[2,5,4])).toBe(true);
})

test("returns false",()=>{
    expect(validSubsequenceTest.isValidSubsequence([1,2,3,4,5],[6,7,8])).toBe(false);
})