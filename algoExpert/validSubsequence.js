
//steps
//1)
function isValidSubsequence(array, sequence) {
    // let sequenceLength = sequence.length;
    // let numOfSameItems = 0;
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < sequence.length; j++) {
            // if(sequence[j] === array[i]){
            //     numOfSameItems++;
            // }
            
        }
    }
    // if(sequenceLength == numOfSameItems){
    // return true}

  }

  module.exports = {
    isValidSubsequence : isValidSubsequence
  }

  console.log(isValidSubsequence([1,2,3,4,5],[2,1]));