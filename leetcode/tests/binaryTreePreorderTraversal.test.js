const binaryTreePreorderTraversalTest = require("../binaryTreePreorderTraversal");

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let treeStructure = new TreeNode(1,
    null,
    new TreeNode(2,
      new TreeNode(3),
      null
    )
  );
test("Input: root = [1,null,2,3] should Output: [1,2,3]", ()=>{
    expect(binaryTreePreorderTraversalTest.preorderTraversal(treeStructure)).toStrictEqual([1,2,3]);
})

test("Input: null should Output: []", ()=>{
    expect(binaryTreePreorderTraversalTest.preorderTraversal(null)).toStrictEqual([]);
})