/*
Link to original problem: https://leetcode.com/problems/rotate-string/

796. Rotate String
Easy
2.6K
108
company
Amazon
company
Microsoft
company
Apple
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false
 

Constraints:

1 <= s.length, goal.length <= 100
s and goal consist of lowercase English letters.
*/
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    
    let queue = s.split("");
    let goalCheck = goal.split("");
    let rotation = s.length;
    
    while(rotation > 0){
       

        if(queue.join("") == goalCheck.join("")){
            return true;
        }
        console.log(queue, goalCheck)
        queue.push(queue.shift());


        rotation --;
    }
    return false;
};

module.exports = {
    rotateString : rotateString
}