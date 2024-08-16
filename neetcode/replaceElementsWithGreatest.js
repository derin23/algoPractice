// 1299. Replace Elements with Greatest Element on Right Side
// Easy
// Topics
// Companies
// Hint
// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

 

// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
// Explanation: 
// - index 0 --> the greatest element to the right of index 0 is index 1 (18).
// - index 1 --> the greatest element to the right of index 1 is index 4 (6).
// - index 2 --> the greatest element to the right of index 2 is index 4 (6).
// - index 3 --> the greatest element to the right of index 3 is index 4 (6).
// - index 4 --> the greatest element to the right of index 4 is index 5 (1).
// - index 5 --> there are no elements to the right of index 5, so we put -1.
// Example 2:

// Input: arr = [400]
// Output: [-1]
// Explanation: There are no elements to the right of index 0.
 

// Constraints:

// 1 <= arr.length <= 104
// 1 <= arr[i] <= 105
/**
 * 
//possible solutions:
1. pointer for current index
2. arr for greatestNums
3. currGreatestNum for current greatest num
4. traverse array starting at pointer and comparing elements in array to curr
    if next num is greater than curr, curr = nextNum
once we get to end of arr, push -1 to greatestNums
return greatestNums

Time: O(logN)
Space O^n

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.


 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if((arr == null) || (arr == undefined) || (arr.length < 1)){
        return [-1];
    }

    let pointer = 0;
    let greatestNums = new Array();
    let currGreatestNum = -1;
    

    for (let i = 0; i < arr.length; i++) {i
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] > currGreatestNum) {
                currGreatestNum = arr[j];
            }
        }
        greatestNums.push(currGreatestNum)
        currGreatestNum = -1
    }

    // greatestNums.push(-1);
    return greatestNums;
};

var replaceElementsV2 = function(arr) {
    if((arr == null) || (arr == undefined) || (arr.length < 1)){
        return [-1];
    }
    let rightMax = -1;

    for(let i = arr.length - 1; i >= 0; i--){
        let newMax = Math.max(rightMax, arr[i]);
        arr[i] = rightMax;
        rightMax = newMax;
    }
    return arr;
}
 let arr = [17];
//let arr = null;
console.log(replaceElementsV2(arr));