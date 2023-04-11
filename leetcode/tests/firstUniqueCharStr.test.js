const firstUniqCharTest = require("../firstUniqueCharInStr");

test("leetcode should return 0", ()=>{
    expect(firstUniqCharTest.firstUniqChar("leetcode")).toBe(0);
})



test("aabb should return -1", ()=>{
    expect(firstUniqCharTest.firstUniqChar("aabb")).toBe(-1);
})