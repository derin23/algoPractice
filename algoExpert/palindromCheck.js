function isPalindrome(string) {
    // Write your code here.
    let localCopy = "";
    for(let i = string.length; i >= 0; i--){
        localCopy += string[i];
    }
    console.log(localCopy)
    if (string == localCopy){
        return true;
    }
    return false;
  }

  console.log(isPalindrome("abcdcba"));