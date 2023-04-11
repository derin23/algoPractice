const backspaceCompareTest = require("../backspaceStringCompare");

test(`s = "ab#c", t = "ad#c" should return true`, ()=>{
    expect(backspaceCompareTest.backspaceCompare("ab#c","ad#c")).toBe(true);
})