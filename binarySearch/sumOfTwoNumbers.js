// Sum of Two Numbers
// Easy

// Given a list of numbers nums and a number k, return whether any two elements from the list add up to k. You may not use the same element twice.

// Note: Numbers can be negative or 0.

// Constraints

// n ≤ 100,000 where n is the length of nums
// Example 1
// Input
// nums = [35, 8, 18, 3, 22]
// k = 11
// Output
// true
// Explanation
// 8 + 3 = 11


class Solution {

    solve(nums, k)  {
        
        for(let i = 0; i < nums.length; i++){
            let opp = k - nums[i];
            if(nums.includes(opp)){
                return true
            }
        }
        return false;
    }

    solve1(nums,k){
        
    }
    
}


const solution = new Solution();
console.log(solution.solve([1,2,3,4,5],9));

module.exports = Solution
