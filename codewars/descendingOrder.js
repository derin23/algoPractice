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
  
  console.log(descendingOrder(1234));


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

// function descendingOrder(n){
//   console.log("descendingOrder function is running ");
// let stringArray = n.toString().split("");
// console.log("stringArray: " + stringArray);
// let  nArray = stringArray.map();
// console.log("nArray: " + nArray);
// //console.log(nString);
// for(let i = 0; i < nArray.length; i++){
//   let swapValue = nArray[i];
//   let swapValue2 = nArray[i + 1];
//   if (swapValue < swapValue2 && i+1 < nArray.length){
//     nArray[i] = swapValue2;
//     nArray[i + 1] = swapValue;
//     i = 0;
//     console.log(i);
//     console.log("swapvalue: " + swapValue);
//     console.log("nArray[i]: " + nArray[i]);
//     console.log("nArray[i + 1: " + nArray[i + 1]);
//     console.log("array: " + nArray)
//   }
// }
// //let answer = parseInt(nArray.join(""),10);
// let answer = nArray;
// console.log(answer);
// return answer;

  
// }

//descendingOrder(124569);



// function descendingOrder(n) {
//   let arrOfStr = n.toString().split("");
//   const arrOfNum = arrOfStr.map(str => {
//       return Number(str);
//   })
//   for(let i = 0; i < arrOfNum.length; i++) {
//       let nextNum = arrOfNum[i + 1];
//       console.log("num[i] is " + arrOfNum[i] + " nextNum is" + nextNum + " and i is " + i);
//       if (i+1  < arrOfNum.length && arrOfNum[i] < nextNum) {
          
//           arrOfNum[i+1] = arrOfNum[i];
//           arrOfNum[i] = nextNum;
//           i = 0;
//       }
//   }
//   console.log(arrOfNum);
//   return arrOfNum;
// }

// descendingOrder(12345);

// function descendingOrder(n){ //BigO Time o(n + m + s + w + f) BigO space o(1)
//   let nString = String(n); //o(n) 
//   //console.log(nString, typeof(nString));
//   let nStringArray = nString.split(""); //o(nString)
//   //console.log(nStringArray);
//   let sortedNStringArray = nStringArray.sort((a,b) => b-a); //o(nStringArray)
//   //console.log(sortedNStringArray);
//   let stringAnswer = sortedNStringArray.join(""); //o(sortedNStringArray)
//   //console.log(stringAnswer);
//   let answer = parseInt(stringAnswer); //o(stringAnswer)
//   console.log(answer);
// //0(n*5)
//   return answer;
//   //return parseInt(n.toString().split("").sort((a,b) => b - a).join(""));
//   //return parseInt(String(n).split('').sort().reverse().join(''));
// }

//console.log(descendingOrder(13254));

//let x = "1010101010";
//console.log(parseInt(x,2)); 