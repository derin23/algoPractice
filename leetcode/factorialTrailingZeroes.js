// Link to original problem: https://leetcode.com/problems/factorial-trailing-zeroes/

// 172. Factorial Trailing Zeroes
// Medium
// 2.5K
// 1.8K
// company
// Microsoft
// company
// Amazon
// company
// Google


// Given an integer n, return the number of trailing zeroes in n!.

// Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

 

// Example 1:

// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.
// Example 2:

// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.
// Example 3:

// Input: n = 0
// Output: 0
 

// Constraints:

// 0 <= n <= 104
 

// Follow up: Could you write a solution that works in logarithmic time complexity?

//iterative solution
var trailingZeroes = function(n) {

    let result = 0;
    
    while(n > 0){
        n = Math.floor(n/5);
        result += n;
    }

    return result;
};

//recursive soluition
var trailingZeroes1 = function(n) {
    //one liner
    // return n < 5 ? 0 : Math.floor(n / 5) + trailingZeroes1(Math.floor(n/5));
    
    if(n<5){
        return 0;
    }
    
    return  Math.floor(n / 5) + trailingZeroes(Math.floor(n/5));
};

module.exports = {
    trailingZeroes : trailingZeroes,
    trailingZeroes1 : trailingZeroes1
};