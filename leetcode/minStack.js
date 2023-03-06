/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(n)
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

var MinStack = function() {
    this.elements = [];
  };
  
  /**
  
   @param {number} x
   @return {void}
   */
  MinStack.prototype.push = function(x) {
    this.elements.push({
      value: x,
      min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
    });
  };
  /**
  
   @return {void}
   */
  MinStack.prototype.pop = function() {
    this.elements.pop();
  };
  /**
  
   @return {number}
   */
  MinStack.prototype.top = function() {
    return this.elements[this.elements.length - 1].value;
  };
  /**
  
   @return {number}
   */
  MinStack.prototype.getMin = function() {
    return this.elements[this.elements.length - 1].min;
  };
  /** 
   * Your MinStack object will be instantiated and called as such:
   * var obj = new MinStack()
   * obj.push(val)
   * obj.pop()
   * var param_3 = obj.top()
   * var param_4 = obj.getMin()
   */