# Feel free to add new properties and methods to the class.
class MinMaxStack:
    def __init__(self):
        self.data = []

    
    def peek(self):   
        if len(self.data) > 0: 
            return self.data[-1] 
        return None

    def pop(self):
        if len(self.data) > 0:
            return self.data.pop()
        else:
            return None

    def push(self, number):
        self.data.append(number)


    def getMin(self):
        # Write your code here.
        min = float('inf')
        for num in self.data:
            if num < min:
                min = num 
        return min

    def getMax(self):
        # Write your code here.
        max = -float('inf')
        for num in self.data:
            if num > max:
                max = num 
        return max


# data = [1,2]
# print(data[-1])


x = MinMaxStack()
x.push(5)
x.push(2)
x.push(7)
x.push(1)
x.push(8)
x.push(3)
x.push(9)
x.getMax()
x.getMin()
