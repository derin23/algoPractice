const switcherooTest = require("../reverseString.js");

test("text is reversed", () =>{
    expect(switcherooTest("abc")).toBe("cba");
})

test("empty string argument test", () =>{
    expect(switcherooTest("")).toBe("Something is wrong with the arugment. Please check the string that was passed in!");
})

test("null argument test", () =>{
    expect(switcherooTest(null)).toBe("Something is wrong with the arugment. Please check the string that was passed in!");
})

test("undefined argument test", () =>{
    expect(switcherooTest(undefined)).toBe("Something is wrong with the arugment. Please check the string that was passed in!");
})