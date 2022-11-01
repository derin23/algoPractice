const addTwoIntegersTest = require("../addTwoIntegers");

test("1,1 should return 2",()=>{
    expect(addTwoIntegersTest.sum(1,1)).toBe(2);
})

test("() should return unable to answer",()=>{
    expect(addTwoIntegersTest.sum()).toBe("unable to answer");
})

test("(null,null) should return unable to answer",()=>{
    expect(addTwoIntegersTest.sum(null,null)).toBe("unable to answer");
})

test("(undefined,undefined) should return unable to answer",()=>{
    expect(addTwoIntegersTest.sum(undefined,undefined)).toBe("unable to answer");
})