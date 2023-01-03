const mergeSortTest = require("../mergeSort");

test('[3,5,2,1] should return [1,2,3,5]', () => { 
    expect(mergeSortTest.mergeSort([3,5,2,1])).toEqual([1,2,3,5]);
})