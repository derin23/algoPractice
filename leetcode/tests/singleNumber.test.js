const singleNumberTest = require("../singleNumber");

test("[2,2,1] should return 1", ()=>{
    expect(singleNumberTest.singleNumber([2,2,1])).toEqual(1);
})