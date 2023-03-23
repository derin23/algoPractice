//Link to problem: https://www.algoexpert.io/questions/node-depths

function nodeDepths(root) {
    // Write your code here.
    let totalDepth = 0;
    stack = [{
        "node": root,
        "depth": 0
    }]

    while(stack.length > 0){
        let nodeInfo = stack.pop();
        let node = nodeInfo["node"];
        let depth = nodeInfo["depth"];

        if(node == null){
            continue;
        }
        totalDepth += depth;
        stack.push({"node": node.left, "depth":depth + 1});
        stack.push({"node": node.right, "depth":depth + 1});
    }

    return totalDepth;
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  let tree = new BinaryTree(1,
    new BinaryTree(2, new BinaryTree(4, new BinaryTree(6,new BinaryTree(5,null)))),
    new BinaryTree(2, new BinaryTree(4))
  )
  
  console.log(nodeDepths(tree))