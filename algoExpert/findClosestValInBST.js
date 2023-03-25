//link to problem: https://www.algoexpert.io/questions/find-closest-value-in-bst

function findClosestValueInBst(tree, target) {
    // Write your code here.
    let closest = Infinity; 
    function helper(tree,target,closest){
      if(!tree){
        return closest;
      }
  
      var closest = counts.reduce(function(prev, curr) {
      return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
  });
    }
  }
  
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.findClosestValueInBst = findClosestValueInBst;
  