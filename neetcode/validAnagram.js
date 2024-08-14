// Is Anagram
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true
// Example 2:

// Input: s = "jar", t = "jam"

// Output: false
// Constraints:

// s and t consist of lowercase English letters.

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       const letterMap = new Map();
       for(let i =0; i <s.length; i++){
        if(!(letterMap.has(s[i]))){
            
            letterMap.set((s[i]),1);
        }else{
            letterMap.set(s[i], letterMap.get(s[i]) +1);
        }
       }

       for(let j = 0; j <t.length; j++){
        if(letterMap.has(t[j])){
            letterMap.set(t[j], letterMap.get(t[j]) -1); 
        }else{
            return false;
        }
       }
       for (let [k, v] of letterMap) {
        if (v !== 0) { 
          return false; 
        }
      }  
      return true;
    }

    isAnagramV2(s,t){
        if(s.length !== t.length){
            return false;
        }

        let countS = new Map();
        let countT = new Map();

        for(let element = 0; element < s.length; element++) {
            countS[s[element]]= 1 + (countS.get(element) || 0);
            countT[t[element]] = 1 + (countT.get(element) || 0);
        };
        console.log(countS);

        for(let key in countS){
            if(countS.get(key) !== countT.get(key)){
                return false
            }
        }
        return true;
    }
}
let test = new Solution();
console.log(test.isAnagramV2("racecar", "carrace"));
console.log(test.isAnagramV2("racecar", "jam"));

