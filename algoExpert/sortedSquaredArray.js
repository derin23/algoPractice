function sortedSquaredArrayBrute(array) {
    // Write your code here.
    let answer = [];
    for(let i = 0; i < array.length; i++){
        answer.push((array[i]) * (array[i]));
    }
    return answer.sort((a, b) => a - b);
}


function sortedSquaredArray(array) {
    // Write your code here.
    let answer = [];

    let start = 0;
    let end = array.length - 1;

    while(start <= end){
        
        let smallNum = array[start];
        let largeNum = array[end];

        if(Math.abs(smallNum) < Math.abs(largeNum)){
            answer.unshift(largeNum * largeNum);
            end--;
        }else{
            answer.unshift(smallNum * smallNum);
            start++;
        }
    }
    
    return answer;

}


module.exports = {
    sortedSquaredArrayBrute: sortedSquaredArrayBrute,
    sortedSquaredArray: sortedSquaredArray
}

console.log(sortedSquaredArray([-7,-5,-4,3,6,8,9]));