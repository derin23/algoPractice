const concatenationOfArrayTest = require("../concatenationOfArray");

test("[1,2,3] should return [1,2,3,1,2,3]",()=>{
    expect(concatenationOfArrayTest.getConcatenation([1,2,3])).toEqual([1,2,3,1,2,3]);
})

test("[] should return []",()=>{
    expect(concatenationOfArrayTest.getConcatenation([])).toEqual([]);
})

test("[1] should return [1,1]",()=>{
    expect(concatenationOfArrayTest.getConcatenation([1])).toEqual([1,1]);
})