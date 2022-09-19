
// The Array's reverse() method has gone missing! Re-write it, quick-sharp!

// When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.

// Here's an example:

// var input = [1, 2, 3, 4];
// input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
// input;           // == [4, 3, 2, 1]  // items reordered in the original array

//steps
//1) create local array and make it equal the array this func was called on
//2) create answer array
//3) loop through local array
//4) take last item from the array and push to answer array
//4) return answer array
Array.prototype.reverse = function() { //time complexity o(n) because of the for loop, space complexity: o(n) worst case because I am creating a local variable answer
    let answer = [];

    for(let i = this.length -1; i >= 0; i--){
        answer.push(this[i]);
    }
    return answer;
  };

let x = [1,2,3];
console.log(x.reverse());

module.exports = Array.prototype.reverse;