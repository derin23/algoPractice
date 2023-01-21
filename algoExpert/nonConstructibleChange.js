function nonConstructibleChange(coins) {
    // Write your code here.

    coins.sort((a,b)=>a-b);
    let minChange = 0;
    for(let i = 0; i < coins.length; i++){
        if(coins[i] > minChange +1){
            return minChange +1;
        }
        minChange += coins[i];
    }
    return minChange +1;
  }
  


module.exports = {
    nonConstructibleChange : nonConstructibleChange
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))