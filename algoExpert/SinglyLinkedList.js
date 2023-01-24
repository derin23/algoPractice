import {Node} from './node.js';


// let head1 = new Node(1, new Node(3))
// let node = new Node(2);

// console.log(head1);
// console.log(node);

class SinglyLinkedList {
    constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value){
    let newNode = new Node(value);
  }
}