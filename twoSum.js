//brute force
const twoSum = function(nums, target) {
    for (p1 = 0; p1 < nums.length; p1++) {
    
        const numToFind = target - nums[p1];
        
        for(p2 = p1+1; p2<nums.length; p2++){
            if(numToFind === nums[p2]){
                console.log([p1,p2]);
                return[p1,p2];
            }
            
        }
        
    }
    
    return null;
};

//twoSum([1,2,3,5,7], 12); 

//Optimal solution
// const towSumOptimal = function(nums, target){
//    const numsMap = {};
//    for( let p=0; p<nums.length; p++){
//     const currentMapVal = numsMap[nums[p]];  
//     if(currentMapVal >= 0){
//         console.log([currentMapVal,p]);
//         return [currentMapVal, p];
//     }else{
//         const numToFind = target-nums[p];
//         numsMap[numToFind] = p;
//     }
//    } 
//    return null;
// }

// towSumOptimal([1,2,3,5,7], 12);

//twoSum trying to solve on my own
const towSumOptimal = function(nums,target){
    let oppositePair = {};
    for(let i = 0; i < nums.length; i++){
        const currentMapVal = oppositePair[nums[i]];
        if(currentMapVal >= 0){
            console.log([currentMapVal,i]);
            return [currentMapVal, i];
        }else{
            const numToFind = target-nums[i];
            oppositePair[numToFind] = i;
            console.log(oppositePair);
        }
    }
    return null;
}

towSumOptimal([1,2,3,5,7], 12);
