
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
 
//second question  
function descendingOrder(n){
  //convert input number to string
  //separate each char into an array
  //convert it back to number
  //sort it from biggest value to smallest value
  //add answer to a variable then return it
  
  let nArray = Array.from(n.toString()).map(Number);
  
  let sorting = nArray.sort();
  let answer;
  
  for(let i = 0; i <sorting.length; i++){
    answer += sorting[i];
  }

  return answer;
  
}

//console.log(descendingOrder(1234));



// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321



  //convert input number to string
  //separate each char into an array
  //sort it from biggest value to smallest value:
  // store i in var numToSwap 
  // loop through the array and compare i to i+1 and if i < i+1 swap array[i] with array[i + 1] and rest i to 0.
  //push items to array, once loop is complete join array then convert it into an number and return number.

// arr 1234
// p = 1 < p + 1 = 2 : 2134 
// p = 2 < p + 1 = 1 : 2134
// p = 1 < p + 1 = 3 : 2314
// p = 2 < p + 1 = 3 : 3214
// p = 3 < p + 1 = 2 : 3214
// p = 2 < p + 1 = 1 : 3214
// p = 1 < p + 1 = 4 : 3241
// p = 3 < p + 1 = 2 : 3241
// p = 2 < p + 1 = 4 : 3421
// p1 = 1 > p + 1 = 3 : 2314
// 2341

function descendingOrder(n){
  console.log("descendingOrder function is running ");
let stringArray = n.toString().split("");
console.log("stringArray: " + stringArray);
let  nArray = stringArray.map();
console.log("nArray: " + nArray);
//console.log(nString);
for(let i = 0; i < nArray.length; i++){
  let swapValue = nArray[i];
  let swapValue2 = nArray[i + 1];
  if (swapValue < swapValue2 && i+1 < nArray.length){
    nArray[i] = swapValue2;
    nArray[i + 1] = swapValue;
    i = 0;
    console.log(i);
    console.log("swapvalue: " + swapValue);
    console.log("nArray[i]: " + nArray[i]);
    console.log("nArray[i + 1: " + nArray[i + 1]);
    console.log("array: " + nArray)
  }
}
//let answer = parseInt(nArray.join(""),10);
let answer = nArray;
console.log(answer);
return answer;

  
}

descendingOrder(124569);