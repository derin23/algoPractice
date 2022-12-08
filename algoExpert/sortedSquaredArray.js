function sortedSquaredArray(array) {
    // Write your code here.
    let answer = [];
    for(let i = 0; i < array.length; i++){
        answer.push((array[i]) * (array[i]));
    }
    return answer.sort((a, b) => a - b);
  }


module.exports = {
    sortedSquaredArray: sortedSquaredArray
}

console.log(sortedSquaredArray([1,2,3,5,6,8,9]));