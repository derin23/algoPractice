
//steps
//1)
function isValidSubsequence(array, sequence) {
    let check = true;
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < sequence.length; j++) {
            if (sequence[j] === array[i]) {
                check = true;
                break;
            } else {
                check = false;
            }
        }
    }
return check;

  }

  module.exports = {
    isValidSubsequence : isValidSubsequence
  }

  console.log(isValidSubsequence([1,2,3,4,5],[2]));