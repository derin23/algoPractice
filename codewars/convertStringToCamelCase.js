// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){

    let answer = "";
    let localStrArray = str;

    for(let i = 0; i < localStrArray.length; i++){
        if(localStrArray[i] == "-" || localStrArray[i] == "_"){
            localStrArray.charAt(i + 1).toUpperCase() + str.slice(1);
            //localStrArray.splice(i,1);
        }
    }

    for(let j = 0; j < localStrArray.length; j++){
        answer = answer + localStrArray[j];
    }

   

    return answer;
    
}

console.log(toCamelCase("some-thing"))

module.exports = {
    toCamelCase : toCamelCase
}