// Two Integer Sum
// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// Return the answer with the smaller index first.

// Example 1:

// Input: 
// nums = [3,4,5,6], target = 7

// Output: [0,1]
// Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

// Example 2:

// Input: nums = [4,5,6], target = 10

// Output: [0,2]
// Example 3:

// Input: nums = [5,5], target = 10

// Output: [0,1]
// Constraints:

// 2 <= nums.length <= 1000
// -10,000,000 <= nums[i] <= 10,000,000
// -10,000,000 <= target <= 10,000,000

/**
 * Time: o(n) Space: o(n)
 * 
 * create a map to hold the number and it's index. 
 * loop through the map until you find it's pair (adds up to target)
 * compare the index and create an array to return.
 */

   function twoSum(nums, target) {
        let numMap = new Map();
        
        for(let i = 0; i < nums.length; i++){
            let ans = target - nums[i];
            if(numMap.has(ans)){
                return [numMap.get(ans), i];
            }else{
                numMap.set(nums[i],i);
            }

            }
    }

    // Time: o(n^2) Space: o(1)
    function twoSumV2(nums, target) {
        
        for(let i = 1; i < nums.length; i++){
            for(let j = 0; j < i; j++){
                if(nums[i] + nums[j] === target){
                    return [j, i];
                }
            }
        }
    }

    function twoSumV3(nums, target){ //time: o(n), space: o(n) //same as map solution
        let start = 0;
        let end = nums.length -1;

        nums.sort((a, b) => a - b);
        console.log(nums);

        while(start < end){
            let total = nums[start] + nums[end];
            if(total === target){
                return [start,end];
            }else if(total < target){
                start++;
            }else{
                end--;
            }
        }
    }

    
    console.log(twoSum([6,4,5,3],11));

    


