const Solution = require("../sumOfTwoNumbers");


const solutionTest = new Solution();

test("([1,2,3,4,5],9) should return true",() =>{
    expect(solutionTest.solve([1,2,3,4,5],9)).toBe(true);
})

test("([1,2,3,4,5],98) should return false",() =>{
    expect(solutionTest.solve([1,2,3,4,5],98)).toBe(false);
})

test("([1,2,3,4,5],98) should return false for kings solution",() =>{
    expect(solutionTest.solveKing([1,2,3,4,5],98)).toBe(false);
})
