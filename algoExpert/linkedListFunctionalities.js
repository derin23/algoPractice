//import { Node } from "./node";

class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }
    node = new Node();
    
    setHead(node){
        this.node.head = node.value
    }
}


