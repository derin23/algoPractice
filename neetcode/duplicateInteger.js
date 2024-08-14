// Duplicate Integer
// Solved 
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true
// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if((nums.length == 0) || nums == undefined || nums == null){
            return false;
        }
        let numSet = new Set();
        for(let num of nums){
            if(numSet.has(num)) return true;

            numSet.add(num);
        }
        return false;
    }

}

let test = new Solution();
console.log(false == test.hasDuplicate([1,2,3]));
console.log(true == test.hasDuplicate([3,2,3]));
module.exports = Solution
