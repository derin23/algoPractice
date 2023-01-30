class Node{
    constructor(val,next = null){
        this.val = val;
        this.next = next;
    }
}

function lengthOfLL(node){
    let counter = 0;
    let copy = node;
    while(copy){
        counter++
        copy = copy.next;
    }
    return counter;
}

function recLength(node){
    if(!node) {
        return 0;
    }
    else {
        return  1 + recLength(node.next)
    }
}
//did not pass all test cases
function removeKthNodeFromEnd(head, k) {
    // Write your code here.
    let nodeToRemove = lengthOfLL(head) - k;
    let currNode = head;
    // console.log(lengthOfLL(head) == k)
    if(nodeToRemove == 0) {
        head = head.next;
        return head;
    }
    while(currNode) {
        if (nodeToRemove == 1) {
            currNode.next = currNode.next.next;
            return head
        } else {
            currNode = currNode.next;
            nodeToRemove--;
        }
    }
    return head
  }
  



const nodes = new Node(9,new Node(2,new Node(3,new Node(4,new Node(5)))))

 console.log(removeKthNodeFromEnd(nodes,5));
 
//---------passes all test cases---------
 class LinkedList {
    constructor(value,next=null) {
      this.value = value;
      this.next = next;
    }
  }
  function lengthOfLL(node){
      let counter = 0;
      let copy = node;
      while(copy){
          counter++
          copy = copy.next;
      }
      return counter;
  }
  
  
  function removeKthNodeFromEnd(head, k) {
    let nodeToRemove = lengthOfLL(head) - k;
    let currNode = head;
    
      if(nodeToRemove == 0) {
        
          head.value = head.next.value;
          head.next = head.next.next;
        
          return head
      }
      while(currNode) {
          if (nodeToRemove == 1) {
              currNode.next = currNode.next.next;
              return head
          } else {
              currNode = currNode.next;
              nodeToRemove--;
          }
      }
      return head
  }