//Link to problem: https://leetcode.com/problems/array-prototype-last/description/
// 2619. Array Prototype Last
// Easy
// 50
// 3
// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
 

// Example 1:

// Input: nums = [1,2,3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.
// Example 2:

// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.
 

// Constraints:

// 0 <= arr.length <= 1000
// 0 <= arr[i] <= 1000

//actual leetcode answer
// Array.prototype.last = function() {
//     if(this.length == 0){
//         return -1;
//     }

//     return this[this.length -1];
// };

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

//for testing
function last1(arr) {
    
    if(arr.length == 0){
        return -1;
    }

    return arr[arr.length -1];
};

module.exports = {
    last1 : last1
}