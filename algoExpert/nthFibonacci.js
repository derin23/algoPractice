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

  //better solution using memoization -- Time complexity: O(n), Space complexity: O(n)
  function getNthFib1(n, memoize = {1:0, 2: 1}) {
    // Write your code here.
   if(n in memoize){
    return memoize[n];
   }else{
    memoize[n] = getNthFib(n-1, memoize) + getNthFib(n -2, memoize);
    return memoize[n];
   }

  }
  
  console.log(getNthFib1(6));

  //iterative solution, best option if recursion is not required -- Time: O(n), Space: O(1)
  function getNthFib2(n) {
    // Write your code here.
   let lastTwo = [0,1];
   let counter = 3;

   while(counter <=n){
    let nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter ++;
   }
   if(n>1){
    return lastTwo[1];
   }else{
    lastTwo[0];
   }
  }
  
  console.log(getNthFib2(6));


  
module.exports = {
    getNthFib : getNthFib,
    getNthFib1 : getNthFib1,
    getNthFib2 : getNthFib2
  }