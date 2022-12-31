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

  function isPalindromeRecursion(string) {
    // Write your code here.

  }

  //console.log(isPalindrome1("abcdcba"));
