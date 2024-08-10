const Solution = require("../duplicateInteger");

const tester = new Solution();
test("[1, 2, 3, 3] should return false", ()=>{
    expect(duplicate.hasDuplicate([1,2,3])).toBe(false);
})