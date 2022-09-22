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
    let answer = strs[0];
    
   
    for(let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(answer) !==0){
            answer = answer.substring(0,answer.length-1);
        }
    }
    
    return answer + typeof(answer);
    
};

console.log(longestCommonPrefix(["carshow","racecar","car"]));

module.exports = {
    longestCommonPrefix : longestCommonPrefix
}