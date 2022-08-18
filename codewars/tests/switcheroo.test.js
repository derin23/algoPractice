const switcherooTest = require("../switcheroo.js");

test("text is reversed", () =>{
    expect(switcherooTest("abc")).toBe("cba");
})

test("empty string argument test", () =>{
    expect(switcherooTest("")).toBe("null");
})

test("null argument test", () =>{
    expect(switcherooTest(null)).toBe("null");
})

test("undefined argument test", () =>{
    expect(switcherooTest(undefined)).toBe("null");
})