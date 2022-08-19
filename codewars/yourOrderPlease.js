
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


function order(words){ //time: o(n^2 + m^2) space: o(n)
    //steps
    // 1. check for length of string. If 0, return empty string
    // 2. string is not empty split string by space. ex: [abc2, abc3, abc1]
    // 3. each element gets split into an array of chars
    // 4. please each set of chars in a variable called currentStrArr. ex: [a,b,c,1]
    // 5. if the element can be converted then we store the number as a key and value will be array joined as a string.
    // 6. loop through the map and find 1, add it to the new array and keep incrementing 
    // 7. return new array as a joined string

    if(words.length == 0){
      return "";
    }

    let wordsArray = words.split(" ");
    
    let wordMap = {};
    let finalAnswer = [];

    for(let i = 0; i < wordsArray.length; i++){
      let currentStrArr = wordsArray[i].split("");
      
       for(let j = 0; j < currentStrArr.length; j++){
        let currentStrArrNum = parseInt(currentStrArr[j]);
        if(isNaN(currentStrArrNum) !== true){
          wordMap[currentStrArr[j]] = wordsArray[i];
        }
       }
    }
    
    for (const property in wordMap) {
      finalAnswer.push(wordMap[property]);
    }

    return finalAnswer.join(" ");

  }

module.exports = order;