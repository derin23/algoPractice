//Link to problem: https://www.algoexpert.io/questions/common-characters

// function commonCharacters(strings) {
//     // Write your code here.
//     let alph = {
//         "a":false, "b":false, "c":false, "d":false, "e":false, "f":false, "g":false, "h":false, "i":false, "k":false, "l":false, "m":false, "n":false, "o":false, "p":false, "q":false, "r": false, "s":false, "t":false, "u":false, "v":false, "w":false, "x":false, "y":false, "z":false
//     }

//     let seenLetters = new Map();

//     for(let element of strings){
//         let uniqueStringChars = new Set(element);
//         for(char of uniqueStringChars){
//             //having issues converting python to js
//             if(!char in seenLetters){
//                 seenLetters[char] = 0;
//             }
//             seenLetters[char] += 1;
//         }
//     }

//     return seenLetters;
//   }
  
function commonCharacters(strings) {
    // Write your code here.
    let map = new Map();
  
    for(let word of strings){
        let set = new Set();
        let i = 0;
        let value = 1;
        for(let letter of word){
            set.add(letter);
        }
        if(!map.has(set[i])){
            map.set(letter,value);
            i++;
        }else{
            map.set(letter,value++);
            i++;
        }
        
    }
    

    return map;
  }
  
  // Do not edit the line below.
  exports.commonCharacters = commonCharacters;
  

 console.log(commonCharacters(["abc", "bcd", "cbaccd"]));
