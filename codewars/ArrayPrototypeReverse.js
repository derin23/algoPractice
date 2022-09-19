
// The Array's reverse() method has gone missing! Re-write it, quick-sharp!

// When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.

// Here's an example:

// var input = [1, 2, 3, 4];
// input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
// input;           // == [4, 3, 2, 1]  // items reordered in the original array

//steps
//1) create local array
//2) look through the aray this func was called on
//3) take last item from the array and push to local array
//4) return new array as local array
Array.prototype.reverse = function() {
    let localArray = this;
    let answer = [];
    console.log(localArray.length);
    for(let i = localArray.length -1; i >= 0; i--){
        answer.push(this[i]);
    }
    return answer;
  };

let x = [1,2,3];
console.log(x.reverse());

module.exports = Array.prototype.reverse;