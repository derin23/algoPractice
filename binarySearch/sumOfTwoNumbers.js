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

    solve1(nums,k){
        let map = {};

        for(let i = 0; i < nums.length; i++){
            let oppositeNum = k - nums[i];

            if(map[nums[i]] !== undefined){
                return true;
            }else{
                map[oppositeNum] = i;
            }
        }
        return false;
    }

    solve2(nums,k){
        let map = {};

        for(let i = 0; i < nums.length; i++){
            let oppositeNum = k - nums[i];

            if(map[nums[i]] == undefined){
                map[oppositeNum] = i;
                
            }else{
                return true;
            }
        }
        return false;
    }
    
}


const solution = new Solution();
console.log(solution.solve2([1,2,3,4,5],9));

module.exports = Solution
