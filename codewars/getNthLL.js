// Linked Lists - Get Nth
// Implement a GetNth() function that takes a linked list and an integer index and returns the node stored at the Nth index position. GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on.

// So for the list 42 -> 13 -> 666, GetNth(1) should return Node(13);

// getNth(1 -> 2 -> 3 -> null, 0).data === 1
// getNth(1 -> 2 -> 3 -> null, 1).data === 2
// The index should be in the range [0..length-1]. If it is not, or if the list is empty, GetNth() should throw/raise an exception (ArgumentException in C#, InvalidArgumentException in PHP, Exception in Java).

class ListNode{
  constructor(data,next = null){
    this.data = data;
    this.next = next;
  }
  }
  
  function getNth(node, index) {
    // Your code goes here.
    if(!node){
      return new Error("no nodes available");
    }
    if(!index){
      return new Error("no index available");
    }

    // let curr = node;
    let i = 0;
    while(node){
      if(index === i){
        return node.data;
      }

      node = node.next;
      i++;
    }


  }

  
  let ll = new ListNode(1,new ListNode(2, new ListNode(3,new ListNode(4,null))));

  console.log(getNth(ll,1));


// actual codewars solution

function Node(data) {
  this.data = data;
  this.next = null;
}

  function getNthRecursive(node, index) {
    // Your code goes here.
    if (!node) throw new Error('Invalid node at ' + index);
    
    return (index === 0) ? node : getNthRecursive(node.next, index - 1);
    
  }
  