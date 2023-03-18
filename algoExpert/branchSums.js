// Link to original question: https://www.algoexpert.io/questions/branch-sums

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    // Write your code here.
    let output = [];
    let curr = root;
    let currSum = root.value;
    let stack = [[curr,currSum]];
  
    while(stack.length){
      [curr,currSum] = stack.pop();
      if(!curr.left && !curr.right){
        output.push(currSum);
        continue;
      }
      if(curr.right) stack.push([curr.right, currSum + curr.right.value]);
      if(curr.left) stack.push([curr.left, currSum + curr.left.value]);
    }
    return output;
  }
  
