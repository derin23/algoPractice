function tournamentWinner(array) {
    // Write your code here.
    // Do not understand the question fully yet!

    let minDiff =0;
    for(let i = 0; i < array.length; i++){
      for(let j = i+1; j < array.length; j++){
        minDiff = Math.min(minDiff, Math.abs(array[i] - array[j]));
      }
    }
    return minDiff
  }

  module.exports = {
    tournamentWinner : tournamentWinner
  }


  console.log(tournamentWinner([1,2,3,4]));


//   findmindiff_bug1
// What's the bug in this function that should find the absolute minimum difference between any two elements?

// **Javascript**

// ```js
function findMinDifference(array) {
  let minDiff = 0; // LINE 1

  for (let i = 0; i < array.length; i++) { // LINE 2
    for (let j = i + 1; j < array.length; j++) { // LINE 3
      minDiff = Math.min(minDiff, Math.abs(array[j] - array[i])); // LINE 4
    }
  }

  return minDiff;
}


console.log(findMinDifference([1,3,7]));
