//Link to original problem: https://www.algoexpert.io/questions/product-sum

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array) {
    // Write your code here.

    
  }
  
  //[x, y]       => x + y
  //[x, [y,z]]   => x + 2 * (y + z)
  //[x,[y, [z]]] => x + 2 * (y + 3z)
//[x,[y, [a, z]]] => x + 2 * (y + 3 * (a + z))

//[x, y]
// i
// we need to keep count of how many levels
// we need idx

function practice(arr, idx = 0){
    if(arr.length < 2){
        return arr[0];
    }
    if(idx > arr.length - 1){
        return 0;
    }
    return arr[idx] + practice(arr, idx + 1);
}

function arrCheck(arr) {
    for (let num of arr) {
        console.log('check: ',Array.isArray(num))
        if (Array.isArray(num)) {
            console.log('is array ', num)
        } else {
            console.log('is num ', num)
        }
    }
}

const arr = [1,2,[3,4,[5,6]]]

arrCheck(arr)
console.log(practice([5,7]))