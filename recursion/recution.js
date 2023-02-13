// Course: https://www.youtube.com/watch?v=IJDJ0kBx2LM&ab_channel=freeCodeCamp.org

class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

let nodes = new Node(1,new Node(2,new Node(3,new Node(4,new Node(5,null)))));

function countNodes(node){
    if(node == null){
        return 0;
    }

    return countNodes(node.next) + 1;
}

console.log(countNodes(nodes));