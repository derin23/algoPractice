// (did not find this from codewars), given a string reverse it!
//steps
//1) split argument into an array of chars
//2) store it in a variable
//3) create variable to store final string
//3) loop through the array variable from back to front and push items to final string
//4) join the final string and return it
function switcheroo(x){
if(x == undefined || x.length == 0 || x == null ||  typeof(x) != "string"){
    return "Something is wrong with the arugment. Please check the string that was passed in!";
}

let stringItems = x.split("");
let stringArray = [];
let finalString ="";

for(let i = stringItems.length - 1; i >= 0; i --){
    stringArray.push(stringItems[i]);
} 
finalString = stringArray.join("");
return finalString;

}

console.log(switcheroo("abc"));
module.exports = switcheroo;