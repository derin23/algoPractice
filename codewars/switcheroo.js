// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

//steps
//1) split argument into an array of chars
//2) store it in a variable
//3) create variable to store final string
//3) loop through the array variable from back to front and push items to final string
//4) join the final string and return it
function switcheroo(x){
let stringItems = x.split("");
let stringArray = [];
let finalString ="";

for(let i = stringItems.length - 1; i >= 0; i --){
    stringArray.push(stringItems[i]);
} 
finalString = stringArray.join("");
return finalString;

}

console.log(switcheroo("abcasasa"));
module.exports = switcheroo;