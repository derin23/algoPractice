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

  module.exports = {
    firstNonRepeatingCharacter : firstNonRepeatingCharacter
  }

  console.log(firstNonRepeatingCharacter("abcdcaf"));