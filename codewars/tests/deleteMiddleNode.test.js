const deleteMiddleNodeTest = require("../deleteMiddleNode");

test('[1,2,0,1,0,1,0,3,0,1] should return [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]', () => { 
    expect(deleteMiddleNodeTest.deleteMiddleNode([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])).toEqual([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
})