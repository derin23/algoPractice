// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
//steps
//1) create answer array to store pairs.
//2) create varible to look at current pair
//3) parse through string and if the length is odd split it and add to array
//4) if length is even add _
//5) return answer array
//ex) abc 

function solution(str){ //time complexity: o(n), space complexity: o(n)
    
    let answer = [];
    let moddedStr = str;
    let currentPair = "";

    if ((!str.length % 2) == 0){
        moddedStr = moddedStr + "_";
    }

    for( let i = 0; i < moddedStr.length; i++){
       
        if((i % 2) == 0) {
            currentPair += moddedStr[i];
        } else {
            currentPair += moddedStr[i];
            answer.push(currentPair);
            currentPair = "";
        }
    }
    return answer;

}
solution("abc");
module.exports = solution;