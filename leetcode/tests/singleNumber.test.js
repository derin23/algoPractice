const singleNumberTest = require("../singleNumber");

test("[2,2,1] should return 1", ()=>{
    expect(singleNumberTest.singleNumber([2,2,1])).toBe("1");
})

test("[1] should return 1", ()=>{
    expect(singleNumberTest.singleNumber([1])).toBe(1);
})

test("[] should return undefined", ()=>{
    expect(singleNumberTest.singleNumber([])).toBe(undefined);
})
