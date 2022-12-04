
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
  console.log(isValidSubsequence1([1, 1, 1, 1, 1],[1,1,1]));