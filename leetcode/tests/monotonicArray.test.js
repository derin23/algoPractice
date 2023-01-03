const monotonicArrayTest = require("../monotonicArray");

test("[1,2,3,4,5,6] should return true", ()=>{
    expect(monotonicArrayTest.isMonotonic([1,2,3,4,5,6])).toBe(true);
})

test("[7,2,3,4,5,6] should return false", ()=>{
    expect(monotonicArrayTest.isMonotonic([7,2,3,4,5,6])).toBe(false);
})