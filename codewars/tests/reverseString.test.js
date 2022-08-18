const reverseStringTest = require("../reverseString.js");

test("text is reversed", () =>{
    expect(reverseStringTest("abc")).toBe("cba");
})

test("empty string argument test", () =>{
    expect(reverseStringTest("")).toBe("Something is wrong with the arugment. Please check the string that was passed in!");
})

test("null argument test", () =>{
    expect(reverseStringTest(null)).toBe("Something is wrong with the arugment. Please check the string that was passed in!");
})

test("undefined argument test", () =>{
    expect(reverseStringTest(undefined)).toBe("Something is wrong with the arugment. Please check the string that was passed in!");
})