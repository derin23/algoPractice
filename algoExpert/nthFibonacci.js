//Link to orginal question: https://www.algoexpert.io/questions/nth-fibonacci

//brute force -- Time complexity: O(2^n), Space complexity: O(n)
function getNthFib(n) {
    // Write your code here.
    if(n == 2){
        return 1
    }else if(n == 1){
        return 0;
    }else{
        return getNthFib(n-1) + getNthFib(n-2);
    }

  }
  
  console.log(getNthFib(6));

  
module.exports = {
    getNthFib : getNthFib
  }