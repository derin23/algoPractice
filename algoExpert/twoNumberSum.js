function twoNumberSum(array, targetSum) { //time complexity: o(n log n) space complexity: o(1)
    
  array.sort(function (a,b) {
    return a - b; // Ascending  
    });
  

     let left = 0;
     let right = array.length - 1;

     while(left <= right){
      let currentSum = array[left] + array[right];
      if( currentSum == targetSum){
        return [array[left],array[right]];
      }else if(currentSum < targetSum){
        left ++;
      }else{
        right --;
      }
     }

     return [];
     
  }

  //console.log(twoNumberSum([1,3,5,7,8,0,4,2],15))
  
  function twoNumberSum1(array,targetSum){ // time complexity: o(n), space complexity: o(n)
    let map = {}

    for(let i =0; i < array.length; i++){
      let numToFind = targetSum - (array[i]);

      if(map[numToFind] != undefined){
        return [numToFind, array[i]];
      }else{
        map[array[i]] = true;
      }
    }
    return [];
  }

  // console.log(twoNumberSum1([1,3,5,7,8,0,4,2],15))

  module.exports = {
    twoNumberSum  : twoNumberSum,
    twoNumberSum1 : twoNumberSum1  
  }


