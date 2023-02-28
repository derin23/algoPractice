// Feel free to add new properties and methods to the class.
class MinMaxStack {

  constructor(){
    this.data = [];
    this.min = [Infinity];
    this.max = [-Infinity];
  }
 
  
    peek() {
      // Write your code here.
      if((this.data).length > 0){
        return this.data[this.data.length-1];
      }else{
        return null;
      }
    }
  
    pop() {
      // Write your code here.
      if(this.min.length > 0){
        this.min.pop();
      }
      if(this.max.length > 0){
        this.max.pop();
      }
      if((this.data).length > 0){
        return this.data.pop();
      }else{
        return null;
      }
    }
  
    push(number) {
      // Write your code here.
      if(number < this.min[this.min.length -1]){
        this.min.push(number)
      }
      if(number > this.max[this.max.length -1]){
        this.max.push(number)
      }
      this.data.push(number);
    }
  
    getMin() {
      // Write your code here.
      if(this.min.length > 0){
        return this.min[this.min.length-1];
      }else{
        return null;
      }
    }
  
    getMax() {
      // Write your code here.
      if(this.max.length > 0){
        return this.max[this.max.length-1];
      }else{
        return null;
      }
    }
  }
  