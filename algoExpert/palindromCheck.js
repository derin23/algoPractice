function isPalindrome(string) {
    // Write your code here.
    let localCopy = "";
    for(let i = string.length-1; i >= 0; i--){
        localCopy += string[i];
    }
    if (string == localCopy){
        return true;
    }
    return false;
  }

  //console.log(isPalindrome("abcdcba"));

  function isPalindrome1(string) {
    // Write your code here.
    let localArray = [];
    for(let i = string.length-1; i >= 0; i--){
        localArray.push(string[i]);
    }
    if (string == localArray.join("")){
        return true;
    }
    return false;
  }

  //console.log(isPalindrome1("abcdcba"));

  function isPalindromeOptimal(string) {
    // Write your code here.
    let first = 0;
    let last = string.length -1;
    let mid = ((last + first)/2);
    // let answer = true;
    while(first < mid && last > mid){
      if(string[first] != string[last]){
        return false;
      }else{
        first++;
        last--;
      }
    }
    return true;

  }

  console.log(isPalindromeOptimal("ab"));

  //made a small change on while loop condition
  function isPalindromeOptimal1(string) {
    // Write your code here.
    let first = 0;
    let last = string.length -1;
    let mid = ((last + first)/2);
    // let answer = true;
    while(first < last){
      if(string[first] != string[last]){
        return false;
      }else{
        first++;
        last--;
      }
    }
    return true;

  }

  console.log(isPalindromeOptimal1("aba"));

module.exports = {
  isPalindrome : isPalindrome,
  isPalindrome1 : isPalindrome1,
  isPalindromeOptimal : isPalindromeOptimal,
  isPalindromeOptimal1 : isPalindromeOptimal1
}