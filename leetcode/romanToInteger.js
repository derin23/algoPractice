// 13. Roman to Integer
// Easy

// 7001

// 421

// Add to List

// Share
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

//MCMXCIV 1000,

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

//steps
//watch video for now and ----come back to it
 var romanToInt = function(s) {
    const map = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
    let res = 0;
    s.split('').forEach((num, i) => {
        if(map[num] < map[s[i + 1]]) res -= map[num];
        else res += map[num];
    });
    return res;
};

var romanToIntLong = function(s) {
    const map = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
    let result = 0;
    let arrayRoman = s.split('');
    for(let i = 0; i < arrayRoman.length; i++) {
       // console.log(num, i);
        if(map[arrayRoman[i]] < map[arrayRoman[i + 1]]){ 
            console.log(result, " ", result - map[arrayRoman[i]], " if first number is smaller");
            result -= map[arrayRoman[i]]; // result = result - map[AR[i]];
            
        }else {
            console.log(result, " ", result + map[arrayRoman[i]]," if first number is bigger");
            result += map[arrayRoman[i]];
            
        }
    };
    return result;
};

console.log(romanToIntLong("MCMXCIV"));

module.exports = {
    romanToInt : romanToInt
}
