const binarySearchTest = require("../binarySearch");

test("[1,2,3,4,5,6] should return 4 when the target is 5", function testing(){

    expect(binarySearchTest.search([1,2,3,4,5,6],5)).toBe(4);
})

test("[1,2,3,4,5,6] should return 1 when the target is 2", ()=>{

    expect(binarySearchTest.search([1,2,3,4,5,6],2)).toBe(1);
})

test("[1,2,3,4,5,6] should return 2 when the target is 3", ()=>{

    expect(binarySearchTest.search([1,2,3,4,5,6],3)).toBe(2);
})

test("[1,2,3,4,5,6] should return -1 when the target is 7", ()=>{

    expect(binarySearchTest.search([1,2,3,4,5,6],7)).toBe(-1);
})