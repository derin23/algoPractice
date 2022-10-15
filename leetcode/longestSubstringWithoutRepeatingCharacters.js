// 3. Longest Substring Without Repeating Characters
// Medium
// 29.4K
// 1.3K
// company
// Amazon
// company
// Bloomberg
// company
// Adobe
// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 10^4
// s consists of English letters, digits, symbols and spaces.

/*
 * @param {string} s
 * @return {number}
 */

//Brute force
//  
// 1) variables: answer = highest substring count, uniqueChars = array of non matching chars
// 2) parse through s, if char does not exist in uniqueChars, push char, counter++ else if it does exist, 
// reset uniqueChar and push current char to unique char
// 3) if answer < uniqueChar.length, answer = unique.length 
// 4) return answer

 var lengthOfLongestSubstring = function(s) {
 
    let answer = 0;
    let currentCounter = 0;
    let uniqueChar = [];

    for(let i = 0; i < s.length; i++) {
        if(!uniqueChar.includes(s[i])) {
            uniqueChar.push(s[i]);
            currentCounter++;
        } else {
            if(currentCounter > answer) {
                answer = currentCounter;
            }
            uniqueChar = [];
            uniqueChar.push(s[i]);
            currentCounter = 1;
        } 
    }
    if(currentCounter > answer) {
        answer = currentCounter;
    }
    
    return answer;
};
// left pointer = 0;
// right pointer = 1;
"dvdf"
console.log("expect 3: ",lengthOfLongestSubstring("dvdf"));
