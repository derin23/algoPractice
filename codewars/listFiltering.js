// List Filtering
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//steps
// 1)create a new variable
// 2)loop through the given array
// 3)check type of each element
// 4)add elements that are int to the created variable
// 5)if no numbers are found return "no numbers in array!"
// 6)return variable

function filter_list(l) {
    // Return a new array with the strings filtered out
    let finalArray = [];
    for(let i = 0; i < l.length; i++){
      if(typeof l[i] == "number"){
        finalArray.push(l[i]);
      }
    }
    if(finalArray.length == 0){
      return "no numbers in array!";
    }else{
    return finalArray;
    }
  }

console.log(filter_list([1,"a",2]));  
module.exports = filter_list;