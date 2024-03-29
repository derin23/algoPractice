// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  //O(n) time O(1) space
  function removeDuplicatesFromLinkedList(linkedList) {

    let currentNode = linkedList; 
    
    while (currentNode !== null){
        let nextDistintNode = currentNode.next; 

        while(nextDistintNode !== null && nextDistintNode.value === currentNode.value){
            nextDistintNode = nextDistintNode.next;
        }

        currentNode.next = nextDistintNode;
        currentNode = nextDistintNode;
    }
    return linkedList;
  }
  

  module.exports = {
    removeDuplicatesFromLinkedList : removeDuplicatesFromLinkedList
  }

  

  let test = {
    "linkedList": {
      "head": "1",
      "nodes": [
        {"id": "1", "next": "1-2", "value": 1},
        {"id": "1-2", "next": "1-3", "value": 1},
        {"id": "1-3", "next": "2", "value": 1},
        {"id": "2", "next": "3", "value": 3},
        {"id": "3", "next": "3-2", "value": 4},
        {"id": "3-2", "next": "3-3", "value": 4},
        {"id": "3-3", "next": "4", "value": 4},
        {"id": "4", "next": "5", "value": 5},
        {"id": "5", "next": "5-2", "value": 6},
        {"id": "5-2", "next": null, "value": 6}
      ]
    }
  }


  console.log(removeDuplicatesFromLinkedList(test));