
//Problem 1
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
    // create a var to hold number of vowels and add to it as I loop tru the array
    // loop through string
    // check if one of the vowels is in the string
    
    let numOfVowels = 0;
    for(let i = 0; i < str.length; i++){
      if( str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
         numOfVowels++;
         }
    }
    
    return numOfVowels;
  }
  
  //filter
  //split
  //closure
  //reduce
  //Conditional (ternary) operator
  let dummy1 = "abc";
  var k = dummy1 == "abc" ? "Dante" : "Derin";
  
  //console.log(k);
  