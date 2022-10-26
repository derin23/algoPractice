// 58. Length of Last Word
// Easy
// 2K
// 126
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

/*
  @param {string} s
  @return {number}
 */
//steps
//1) create var count
//2) loop from back of string until you see first space
//3) return count
 var lengthOfLastWord = function(s) {//time o(n+m) space o(1)
    let count = 0;
    let arr = s.trim(); //o(n)
    for(let i = arr.length -1; i >= 0; i--){ //o(m)
        if(arr[i] != " "){
            count++
        } else {
            break;
        }
    }
    return count;
    
};

module.exports = {
    lengthOfLastWord : lengthOfLastWord
}

console.log("Expect 1: ",lengthOfLastWord("a"));