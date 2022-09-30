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

    solve(nums, k)  {//time complexity: o(n^2), space complexity: o(1)
        
        for(let i = 0; i < nums.length; i++){
            let opp = k - nums[i];
            if(nums.includes(opp)){
                return true
            }
        }
        return false;
    }

    solveKing(nums,k){ // space complexity O(n), time complexity is O(n)
//  parse through nums, if we find a pair that sums to k, return true, else false
// 1. parse through nums
// 2. var numToFind = k - nums[i]
// 3. var map = {}
// 3. check if numToFind exist in map, if it exist return true, else push val and index to map
// 3. if none found, return false

        let map = {};
        for (let i = 0; i < nums.length; i++) { 
            let numToFind = k - nums[i];
            if (map[numToFind] !== undefined) {
                //return true;
                return [i,map[numToFind]]; 
            } else {
                map[nums[i]] = i;
            }
        }
        return false;
    }

    
}


const solution = new Solution();
console.log(solution.solveKing([1,2,3,4],7));

module.exports = Solution
