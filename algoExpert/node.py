# This is an input class. Do not edit.
class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None


# Feel free to add new properties and methods to the class.
class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def setHead(self, node):
        if self.head is None:
            self.head = node 
        else:
            node.next = self.head
            self.head = node

    def setTail(self, node):
        if self.head is None:
            self.head = node 
        else:
            curNode = self.head
            while curNode:
                curNode = curNode.next 
            node.prev = curNode
            curNode.next = node 

    def insertBefore(self, node, nodeToInsert):
        # sentNode = Node(0)
        # sentNode.next = self.head 
        # curNode = sentNode 
        
        # while curNode.next:
        #     if curNode.next.value == node.value:
        #         nodeToInsert.next = curNode.next
        #         curNode = nodeToInsert
        #     curNode = curNode.next 
        curNode = self.head
        while curNode:
            if curNode.value == node.value:
                prevNode = curNode.prev
                curNode.prev = nodeToInsert
                nodeToInsert.next = curNode
                if prevNode:
                    prevNode.next = nodeToInsert
                    nodeToInsert.prev = prevNode     
            curNode = curNode.next


    '''
    A-B--T--D-C-G  t=D nn=T
            c.prev = nn
         nn.next =c
         nn.prev =p
      p.next = nn     
    '''
    def insertAfter(self, node, nodeToInsert):
        if self.head is None:
            self.head = nodeToInsert 
            return
        curNode = self.head
        while curNode:
            if curNode.value == node.value:
                nodeToInsert.next = curNode.next
                curNode.next = nodeToInsert 
                nodeToInsert.prev = curNode
                return
            curNode = curNode.next 

    def insertAtPosition(self, position, nodeToInsert):
        if self.head is None:
            self.head = nodeToInsert
            return
        curNode = self.head 
        while curNode:
            if curNode.value == position.data:
                position.next = curNode
                position.prev = curNode.prev
                curNode.prev = position 
                curNode.next = curNode.next.next
                return
            curNode = curNode.next 
            
    def removeNodesWithValue(self, value):
        curNode = self.head 
        while curNode:
            if curNode.value == value:
                curNode = curNode.next 
                curNode.prev = None
                return
            curNode = curNode.next 

    def remove(self, node):
        curNode = self.head 
        while curNode:
            if curNode.value == node.value:
                lastNode = curNode.prev
                lastNode.next = curNode.next 
                curNode = curNode.next 
                curNode.prev = lastNode
                return
            curNode = curNode.next 
            
    def containsNodeWithValue(self, value):
        curNode = self.head 
        while curNode:
            if curNode.value == value:
                return True
            curNode = curNode.next
        return False
    
    def print_list(self):
        nodesStr = ''
        curNode = self.head 
        while curNode.next:
            nodesStr += f'{curNode.value}->'
            curNode = curNode.next 
        nodesStr += curNode.value 
        print(nodesStr)  
            



x = DoublyLinkedList()
x.setHead(Node('A'))
x.insertAfter(Node('A'), Node('B'))
x.insertAfter(Node('A'), Node('C'))
x.insertAfter(Node('A'), Node('D'))
x.insertAfter(Node('A'), Node('E'))
#x.print_list()
#print(x.containsNodeWithValue('E'))
x.insertBefore(Node('A'), Node('A'))
x.print_list()

