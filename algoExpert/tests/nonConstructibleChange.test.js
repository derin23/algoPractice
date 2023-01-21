const nonConstructibleChangeTest = require("../nonConstructibleChange");

test("should return 20",()=>{
    expect(nonConstructibleChangeTest.nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])).toBe(20);
})

test("should return 6",()=>{
    expect(nonConstructibleChangeTest.nonConstructibleChange([1, 1, 1, 1, 1])).toBe(6);
})