function mergeSort(array){
   
    if(array.length <= 1){return array;}
    let middleIdx = Math.floor(array.length/2);
    
    let leftHalf = array.slice(0,middleIdx);
    let rightHalf = array.slice(middleIdx);

    return mergeSortedArrays(mergeSort(leftHalf),mergeSort(rightHalf));

}

function mergeSortedArrays(leftHalf,rightHalf){
    let sortedArray = [];
    let sortedArrayIdx = 0, leftHalfIdx = 0, rightHalfIdx = 0;

    while((leftHalfIdx < leftHalf.length) && (rightHalfIdx < rightHalf.length)){
        if(leftHalf[leftHalfIdx] <= rightHalf[rightHalfIdx]){
            sortedArray[sortedArrayIdx] = leftHalf[leftHalfIdx];
            leftHalfIdx++;
        }else{
            sortedArray[sortedArrayIdx] = rightHalf[rightHalfIdx];
            rightHalfIdx++;
        }
        sortedArrayIdx++;
    }
    while(leftHalfIdx < leftHalf.length){
        sortedArray[sortedArrayIdx] = leftHalf[leftHalfIdx];
        leftHalfIdx++;
        sortedArrayIdx++;
    }
    while(rightHalfIdx < rightHalf.length){
        sortedArray[sortedArrayIdx] = rightHalf[rightHalfIdx];
        rightHalfIdx++;
        sortedArrayIdx++;
    }
    return sortedArray;
}

console.log(mergeSort([]));

module.exports = {
    mergeSort : mergeSort
  }