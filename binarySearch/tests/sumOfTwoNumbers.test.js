const Solution = require("../sumOfTwoNumbers");


const solutionTest = new Solution();

test("([1,2,3,4,5],9) should return true",() =>{
    expect(solutionTest.solve([1,2,3,4,5],9)).toBe(true);
})

