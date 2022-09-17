// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
//steps
//1)
var isAnagram = function(test, original) {
    // let originalString = original.toLowerCase().split("").sort().join("");
    // let compareString = test.toLowerCase().split("").sort().join("");

    // return (originalString === compareString);

    return (original.toLowerCase().split("").sort().join("") === test.toLowerCase().split("").sort().join(""));

};

console.log(isAnagram("Twoo", "WooT"));
module.exports = {
    isAnagram : isAnagram
};