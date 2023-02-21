const trailingZeroesTest = require("../factorialTrailingZeroes");

test("5 should return 1 as 120 has 1 zero", ()=>{
    expect(trailingZeroesTest.trailingZeroes(5)).toBe(1);
})

test("5 should return 1 as 120 has 1 zero", ()=>{
    expect(trailingZeroesTest.trailingZeroes1(5)).toBe(1);
})

test("1 should return 0 as 1 has 0 zeros", ()=>{
    expect(trailingZeroesTest.trailingZeroes1(1)).toBe(0);
})