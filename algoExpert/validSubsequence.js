
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

 // console.log(isValidSubsequence([1,2,3,4,5],[2,1]));

  function isValidSubsequence1(array, sequence) {
    let map = {}
    for(let i = 0; i < array.length; i++){
      map[i] = array[i];
    }  
    
    for(let j = 0; j < sequence.length; j++){
        if(Object.values(map).includes(sequence[j])){
          return true
        }else return false;
    }
  }
  // console.log(isValidSubsequence1([1, 1, 1, 1, 1],[1,1,1]));

// this works
  function isValidSubsequence2(array, sequence) {
    
    let pointerA = 0;
    let pointerB = 0;

    while(pointerA <= array.length) {
      if (pointerB == sequence.length ) {
        return true;
      } else if(sequence[pointerB] == array[pointerA]) {
        pointerA ++;
        pointerB ++;
      } else {
        pointerA++;
      }
    }
    return false;
  }

  // console.log(isValidSubsequence2([5, 1, 22, 25, 6, 8, 10, 11],[1, 6, 10,11]));
//this also works
  function isValidSubsequence3(array, sequence) {
    let arrIdx = 0;
    let seqIdx = 0;
    while (arrIdx < array.length && seqIdx < sequence.length){
      if(array[arrIdx] == sequence[seqIdx]){
        seqIdx++;
      }
      arrIdx++;
    }
    return seqIdx == sequence.length;
  }

  console.log(isValidSubsequence3([5, 1, 22, 25, 6, 8, 10, 11],[1, 6, 10,11]));
