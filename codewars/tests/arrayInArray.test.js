const arrayTest = require("../arrayTest");

test("Testing normal happy path",() =>{
    expect(arrayTest([1,2],[1])).toEqual(true);
})