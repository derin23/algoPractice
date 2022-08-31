// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// steps
// 1)create answer string var
// 2)parse through the string that is passed in.
// 3)check each char for upper case, if upper case add space plus current char to answer, else push current char 
function solution(string) {
    
}

function solTest(string) {
    return 'camel Casing';
}

module.exports = {
    solution: solution, 
    solTest: solTest
};