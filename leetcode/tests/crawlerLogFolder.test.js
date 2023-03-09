const minOperationsTest = require("../crawlerLogFolder");

test(`["d1/","d2/","../","d21/","./"] should return 2`,()=>{
    expect(minOperationsTest.minOperations(["d1/","d2/","../","d21/","./"])).toBe(2);
} )

test(`["../","d21/","./"] should return 2`,()=>{
    expect(minOperationsTest.minOperations(["../","d21/","./"])).toBe(1);
} )