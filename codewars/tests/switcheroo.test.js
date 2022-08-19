const switcherooTest = require("../switcheroo");

test("testing happy path.", () => {
    expect(switcherooTest("bca")).toBe("acb");
})

test("testing what happens if other letters are passed in.", () =>{
    expect(switcherooTest("jkji")).toBe("Please pass in letters a,b,c only!");
})

test("testing what happens if empty string is passed in.", () =>{
    expect(switcherooTest("")).toBe(null);
})

test("testing what happens if null is passed in.", () =>{
    expect(switcherooTest(null)).toBe(null);
})

test("testing what happens if undefined is passed in.", () =>{
    expect(switcherooTest(undefined)).toBe(null);
})