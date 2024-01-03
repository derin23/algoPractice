const arrayTest = require("../arrayInArray");

test("Testing normal happy path",() =>{
    expect(arrayTest([[2],[1]])).toBe(true);
})

test("Testing null",() =>{
    expect(arrayTest(null)).toBe(false);
})

test("Testing empty input",() =>{
    expect(arrayTest()).toBe(false);
})

test("Testing not an array in an array",() =>{
    expect(arrayTest(["",""])).toBe(false);
})

test("Testing empty array",() =>{
    expect(arrayTest([])).toBe(false);
})

test("Testing one array and one object in Array",() =>{
    expect(arrayTest([[],{}])).toBe(false);
})

