// 2235. Add Two Integers
// Easy
// 642
// 1.8K
// Given two integers num1 and num2, return the sum of the two integers.
 

// Example 1:

// Input: num1 = 12, num2 = 5
// Output: 17
// Explanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.
// Example 2:

// Input: num1 = -10, num2 = 4
// Output: -6
// Explanation: num1 + num2 = -6, so -6 is returned.
 

// Constraints:

// -100 <= num1, num2 <= 100

var sum = function(num1, num2) {
    if(num1 == "" || num2 == "" || num1 == undefined || num2 == undefined || num1 == null || num2 == null){
        return "unable to answer";
    }
    return num1 + num2;
};

module.exports = {
    sum : sum
}

console.log(sum(10,-20));