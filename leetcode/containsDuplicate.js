
/*
link: https://leetcode.com/problems/contains-duplicate/

217. Contains Duplicate
Easy
Topics
Companies
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109


 * @param {number[]} nums
 * @return {boolean}
 */

// var containsDuplicate = function(nums) {
//     let numsInArrayMap = new Map();
  
//     for(let i = 0; i < nums.length; i++){
//         if(numsInArrayMap.get(nums[i]) == undefined){
//             numsInArrayMap.set(nums[i],1);
//             console.log(numsInArrayMap)
//         }else{
//             numsInArrayMap.set(nums[i],2);
//             console.log("else block", numsInArrayMap)
//         }  
//     }

//     for (let [k, v] of numsInArrayMap) {
//         if (v > 1) { 
//           return true; 
//         }
//     }
//     return false;
// };

//simpler solution

var containsDuplicate = function(nums) {
 const numsSet = new Set(nums);/* Time O(N) | Space O(N) */
    const isEqual = numsSet.size === nums.length;

    return !isEqual;
    
}
console.log(containsDuplicate([1,2,3,4]));