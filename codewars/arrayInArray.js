// DESCRIPTION:
// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

// Examples:

// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false
// const arrCheck = value =>
function arrCheck(value) {
  if(value == null || value == undefined || value == ""){
    return false
  }  
  let count = 0;
    for(let i = 0; i < value.length; i++){
      if(Array.isArray(value[i]) == true) {count++}  
    }
    if(count == value.length){;
      return true;
    }
  return false;
}

console.log(arrCheck([[2],[1]]));
module.exports = arrCheck;