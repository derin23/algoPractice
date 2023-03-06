const isValidTest = require("../validParentheses");

test("()[]{} should return true", ()=>{
    expect(isValidTest.isValid("()[]{}")).toBe(true);
})

test("())[]{} should return false", ()=>{
    expect(isValidTest.isValid("())[]{}")).toBe(false);
})

