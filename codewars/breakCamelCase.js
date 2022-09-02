// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// steps
// 1)create answer string var
// 2)parse through the string that is passed in.
// 3)check each char for upper case, if upper case add space plus current char to 
// answer, else push current char 
function solution(string) { //time complexity: O(n) // Space complexity: O(n)
    
    let answer = ""; //O(1)
    
    if (string == undefined || string == null){
        return "input is not correct"; //O(1) //O(1)
    }
    for(let i = 0; i < string.length; i++) { //O(n) //O(1)

        if(string[i].toUpperCase() == string[i]) { //0(1)
            answer += " " + string[i]; //O(n)
        } else {                      //O(1)
            answer += string[i]; //O(n)
        }
    }
    return answer; //O(1) //
}

console.log(solution("undefinedSSasS"));
module.exports = {
    solution: solution
};

