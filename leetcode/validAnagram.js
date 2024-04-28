/*
Link: https://leetcode.com/problems/valid-anagram/description/

Code
Testcase
Test Result
Test Result
242. Valid Anagram
Solved
Easy
Topics
Companies
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length){
        return false;
    }

    const frequencies = new Map();

    for(let char of s){
        frequencies.set(char, (frequencies.get(char) || 0) +1);
    }

    for(let char of t){
        if(frequencies.has(char) && frequencies.get(char) > 0){
            frequencies.set(char, frequencies.get(char) - 1);
        }else{
            return false;
        }
    }

    return true;
};

console.log(isAnagram("anagram","nagaram"));
console.log(isAnagram("car","cat"));