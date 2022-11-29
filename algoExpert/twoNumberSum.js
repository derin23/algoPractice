function twoNumberSum(array, targetSum) {
    
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

  module.exports = {
    twoNumberSum : twoNumberSum  
  }

  console.log(twoNumberSum([1,3,5,7,8,0,4,2],15))
