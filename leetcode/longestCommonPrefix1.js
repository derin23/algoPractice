// 14. Longest Common Prefix
// Easy
// 10.5K
// 3.4K
// company
// Yelp
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

//steps
//1)create var answer and grab first word
//2)create while loop to check if last letter match next word
//3)if it does not match use substring to get rid of that char
//4)else move on to next word till longest common prefix is found
//5)return answer
var longestCommonPrefix = function(strs) {
    let answer = strs[0];
    console.log("answer : ",answer);
    for(let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(answer) !==0){
            answer = answer.substring(0, answer.length - 1);
            console.log("answer2 ",answer);
            console.log(strs[i]);
            
        }
    }
    return answer;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));