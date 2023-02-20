const getNthFibTest = require("../nthFibonacci");

test("6 should return 5",()=>{
    expect(getNthFibTest.getNthFib(6)).toBe(5);
})