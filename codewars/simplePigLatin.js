// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

//steps
function pigIt(str){
    let answer = "";
    let pigLatinArray = [];

    pigLatinArray = str.split(" ");
    console.log(pigLatinArray);
    for(let i = 0; i < str.length; i++){

    }
}
pigIt("Pig Latin is cool");
module.exports = {
  pigIt : pigIt
};

//figure out why my pushes from mac do not show up on profile as my changes
