// 392. Is Subsequence
// Easy
// Topics
// Companies
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
 

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.
 

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * 
 * Solutions:
 * Loop through t, get the letters
 * if letter in s does not match t letter then delete that letter.
 * check if s equals t
 * 
 * s =  
 * t = ca e
 *  t: O(n2)
 *  s: O(1)
 */ 
var isSubsequence = function(s, t) {
    
    if(s.length > t.length || (s.length == 0 && t.length > 0)){
        return false
    };

    for(let i = 0; i < s.length; i++){
        if(t.length == 0){
            return false;
        }
        while(t.length > 0){
            if(t[0] == s[i]){
                t = t.slice(1);
                break;
            }
            t = t.slice(1);

            if(t.length == 0){
                return false;
            }
        }
    }
    return true;
};
//let s = "", t = "ahbgdc";
let s = "abc", t = "ahbgdc";
console.log(isSubsequence(s,t));
