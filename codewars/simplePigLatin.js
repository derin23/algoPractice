// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

//steps
function pigIt(str){
    let answer = "";
    let pigLatinArray = str.split(" ").split("");
    console.log(typeof(pigLatinArray));
    
  //  answer = pigLatinArray.join(" ");
 
    //console.log(pigLatinArray);
    for(let i = 0; i < pigLatinArray.length; i++){
      let currentPig = pigLatinArray[i];
      // let charPig = currentPig.split("");
      // console.log(charPig);
      // currentPig.push(pigLatinArray[i].split(" "));
      // answer = currentPig.join('');
      console.log(typeof(currentPig));
      

      for(let j = 0; j < 1; j++){
        // let firstLetter = charPig[0]; 
        // console.log(typeof(charPig));
       // answer = charPig.replace(firstLetter, "");
        
      }
    }

  
    
}
pigIt("Pig Latin is cool");
module.exports = {
  pigIt : pigIt
};

//figure out why my pushes from mac do not show up on profile as my changes
