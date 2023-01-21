function firstNonRepeatingCharacter(string) {
    // Write your code here.
    let map1 = new Map();

    for(let i = 0; i < string.length; i++){
        let letter = string[i];
        if(!map1.has(letter)){
            
            map1.set(letter,i);

        }else{
            map1.set(letter,"repeating");
        }
    }
   
    for(let [key, value] of map1){
        
        if(map1.get(key) !== "repeating"){
            return value;
        }
    }
    return -1
    
  }

  //optimal solution
  function firstNonRepeatingCharacter1(string) {
    // Write your code here.
    let characterFrequencies = new Map();

    for(let character of string){
        characterFrequencies[character] = (characterFrequencies[character] || 0)+1;
    }
   
    for(let idx = 0; idx < string.length; idx++){
        
       let character = string[idx];
       if(characterFrequencies[character] === 1){
        return idx
       }
    }
    return -1
    
  }

  module.exports = {
    firstNonRepeatingCharacter : firstNonRepeatingCharacter,
    firstNonRepeatingCharacter1 : firstNonRepeatingCharacter1
  }

  console.log(firstNonRepeatingCharacter1("abcdcaf"));