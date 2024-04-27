//Link: https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/
/*
1880. Check if Word Equals Summation of Two Words
Solved
Easy
Topics
Companies
Hint
The letter value of a letter is its position in the alphabet starting from 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.).

The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer.

For example, if s = "acb", we concatenate each letter's letter value, resulting in "021". After converting it, we get 21.
You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive.

Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise.

 

Example 1:

Input: firstWord = "acb", secondWord = "cba", targetWord = "cdb"
Output: true
Explanation:
The numerical value of firstWord is "acb" -> "021" -> 21.
The numerical value of secondWord is "cba" -> "210" -> 210.
The numerical value of targetWord is "cdb" -> "231" -> 231.
We return true because 21 + 210 == 231.
Example 2:

Input: firstWord = "aaa", secondWord = "a", targetWord = "aab"
Output: false
Explanation: 
The numerical value of firstWord is "aaa" -> "000" -> 0.
The numerical value of secondWord is "a" -> "0" -> 0.
The numerical value of targetWord is "aab" -> "001" -> 1.
We return false because 0 + 0 != 1.
Example 3:

Input: firstWord = "aaa", secondWord = "a", targetWord = "aaaa"
Output: true
Explanation: 
The numerical value of firstWord is "aaa" -> "000" -> 0.
The numerical value of secondWord is "a" -> "0" -> 0.
The numerical value of targetWord is "aaaa" -> "0000" -> 0.
We return true because 0 + 0 == 0.
 

Constraints:

1 <= firstWord.length, secondWord.length, targetWord.length <= 8
firstWord, secondWord, and targetWord consist of lowercase English letters from 'a' to 'j' inclusive.
*/

//Steps
//1) create a map with each letter mapped to its numerical value
//2) convert word to number value
//3) check if the number values add up to target value

//time complexity: o(n), space complexity: o(1)

/*
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    if((firstWord == null || (firstWord == undefined)) || (typeof firstWord != "string") || 
    ((secondWord == null) || (secondWord == undefined)) || (typeof secondWord != "string") ||  
    ((targetWord == null) || (targetWord == undefined)) || (typeof targetWord != "string")){
        return false;
    }

    let letterMap = new Map();
    letterMap.set("a",0);
    letterMap.set("b",1);
    letterMap.set("c",2);
    letterMap.set("d",3);
    letterMap.set("e",4);
    letterMap.set("f",5);
    letterMap.set("g",6);
    letterMap.set("h",7);
    letterMap.set("i",8);
    letterMap.set("j",9);
    
    let firstWordSum = "";
    let secondWordSum = "";
    let targetWordSum = "";
    
    for(let i = 0; i< firstWord.length; i++){
        firstWordSum += letterMap.get(firstWord[i]);
       
    }
    for(let i = 0; i< secondWord.length; i++){
        secondWordSum += letterMap.get(secondWord[i]);
    }

    for(let i = 0; i< targetWord.length; i++){
        targetWordSum += letterMap.get(targetWord[i]);
    }

    if(parseInt(firstWordSum) + parseInt(secondWordSum) == parseInt(targetWordSum)){
        return true;
    }else{
        return false;
    }
};

module.exports = {
    isSumEqual : isSumEqual
}

console.log(isSumEqual("acb", "cba", "cdb"));