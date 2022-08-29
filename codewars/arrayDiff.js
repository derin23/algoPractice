
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//steps
/**
 * 1. create an empty array named answer. We will store the the non-matching numbers in this variable
 * 2.parse through array b
 * 3.parse through array a. if match is found, do nothing. If match is not found, push the current value of array a to answer array.
 * 4. return answer array 
 */
 function arrayDiff(a,b) { //time complexity: o(n^2), Space complexity: idk?
    let answer = a;
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
            if(b[i] == a[j]){
                answer.splice(i,1);
            }
        }      
    }
    return answer;
}

module.exports = arrayDiff;

console.log(arrayDiff([1,2,3],[1,2])); //[3]