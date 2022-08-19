const switcherooTest = require("../switcheroo");

test("testing happy path.", () => {
    expect(switcherooTest("bca")).toBe("acb");
})

test("testing what happens if other letters are passed in.", () =>{
    expect(switcherooTest("jkji")).toBe("Please pass in letters a,b,c only!");
})

test("testing what happens if empty string is passed in.", () =>{
    expect(switcherooTest("")).toBe("Please check argument!");
})