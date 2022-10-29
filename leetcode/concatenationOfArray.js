// 1929. Concatenation of Array
// Easy
// 1.6K
// 246
// GE Healthcare
// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

 

// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]
// Example 2:

// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]
 

// Constraints:

// n == nums.length
// 1 <= n <= 1000
// 1 <= nums[i] <= 1000

// 1) create var ans to store result
// 2) ans = nums
// 3) iterate nums arr, push each val to ans arr
// 4) return ans
let getConcatenation = function(nums) { //time complexity: o(n), space complexity: o(n)
   let ans =[...nums];

    for(let i = 0; i < nums.length; i++) {
        ans.push(nums[i]);

    }
    return ans;
};


console.log(getConcatenation([1,2,3]));
module.exports = {
    getConcatenation : getConcatenation
}

//other examples
var getConcatenation1 = function(nums) {
    const res = [];
    for(let i=0;i<nums.length;i++){
        res[i]=nums[i];
        res[i+nums.length]=nums[i]
    };
    return res;
};
a.push(...a);