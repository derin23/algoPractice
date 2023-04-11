/*
Link to problem: https://leetcode.com/problems/first-unique-character-in-a-string/
'''

387. First Unique Character in a String
Easy
7.6K
253
company
Bloomberg
company
Paypal
company
Amazon
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
*/

var firstUniqChar = function(s) {
  
    const counts = {};
  
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      counts[c] = counts[c] + 1 || 1;
    }
  
    for (let i = 0; i < s.length; i++) {
      if (counts[s[i]] === 1) {
        return i;
      }
    }
  
    return -1;

};


module.exports = {
    firstUniqChar : firstUniqChar
}