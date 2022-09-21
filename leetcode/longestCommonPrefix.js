// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["carshow","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

//steps
//1)create answer string var
//2)create global var to hold matches
//2)create local var to hold each element of original array
//3)loop through 
var longestCommonPrefix = function(strs) {
    let answer = "";
    let storeItems = [];
    let match = [];
    for(let i = 0; i < strs.length; i++){
        storeItems.push(strs[i].split(''));
        if(match.length < 1){
            match = strs[i].split('');
        } else {
            for(let j = 0; j < match.length; j++) {
                
            }
        }
    }


    
};

console.log(longestCommonPrefix(["flower","flow","flight"]));

module.exports = {
    longestCommonPrefix : longestCommonPrefix
}