//problem 3
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//steps
// take length of ending argument
// create variable to hold chopped str
// compare variable with second argument
function solution(str, ending){
  const lengthOfEnding = ending.length;
  const choppedStr = str.split("");
  let lengthOfEnding1 = ending.length -1
  let compareAnswer = [];
  for(let i = str.length - 1; i > 0; i--){
    //if(str[i] == ending[lengthOfEnding1 || ]){
      compareAnswer.push(str[i])
      lengthOfEnding1--
    //}
  }

  let finalAnswer = compareAnswer.reverse().join("");
  console.log("finalAnswer = "+finalAnswer)
  console.log(ending);

  //console.log(compareAnswer);
  if(finalAnswer == ending){
    return true;
  }else{
  return false;
  }

}

//Time o(n), space o(1)
function betterSolution(str, ending){ 
  let reversedStr = str.split("").reverse();
  let reversedArg = ending.split("").reverse();
  let status = true;
  
  for(let i = 0; i < reversedArg.length; i++) {
      if(reversedArg[i] != reversedStr[i]) {
      status = false;
  }
}
  return status;
}


console.log(solution("abc","bc"));
module.exports = solution;