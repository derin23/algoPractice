// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){

    let strArray;    

    if(str.indexOf("-") !== -1){
        strArray = str.split("-");
    }else{
        strArray = str.split("_");
    }
    
    let answer = strArray[0];
    
    for(let i = 1; i <strArray.length; i++){
        answer += capStr(strArray[i]);
    }
    
    function capStr(string){
        return string[0].toUpperCase() + string.slice(1);
    }
    return answer;
}

console.log(toCamelCase("some-thing"))

module.exports = {
    toCamelCase : toCamelCase
}