const fibTest = require("../fibonacciNumber");

test("6 should return 5",()=>{
    expect(fibTest.fib(6)).toBe(8);
})

test("1 should return 0",()=>{
    expect(fibTest.fib(1)).toBe(1);
})