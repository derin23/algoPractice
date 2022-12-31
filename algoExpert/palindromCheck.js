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

  console.log(isPalindrome("abcdcba"));