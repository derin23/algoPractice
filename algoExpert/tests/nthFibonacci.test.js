const getNthFibTest = require("../nthFibonacci");

test("6 should return 5",()=>{
    expect(getNthFibTest.getNthFib(6)).toBe(5);
})

test("6 should return 5",()=>{
    expect(getNthFibTest.getNthFib1(6)).toBe(5);
})

test("1 should return 0",()=>{
    expect(getNthFibTest.getNthFib1(1)).toBe(0);
})