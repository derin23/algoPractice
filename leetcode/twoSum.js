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
const towSumOptimal = function(nums, target){
   const numsMap = {};
   for( let p=0; p<nums.length; p++){
    const currentMapVal = numsMap[nums[p]];  
    if(currentMapVal >= 0){
        console.log([currentMapVal,p]);
        return [currentMapVal, p];
    }else{
        const numToFind = target-nums[p];
        numsMap[numToFind] = p;
    }
   } 
   return null;
}

towSumOptimal([1,2,3,5,7], 12);

//twoSum trying to solve on my own
const towSumOptimal1 = function(nums,target){
    let map = {};
    for(let i = 0; i < nums.length; i++){
        // const currentMapVal = ;
        if(map[nums[i]] !== undefined){
            console.log([map[nums[i]],i]);
            return [map[nums[i]], i];
        }else{
            const numToFind = target-nums[i];
            map[numToFind] = i;
            console.log(map);
        }
    }
    return null;
}

// towSumOptimal([1,2,3,5,7], 12);







let twoSumEx = function(nums,target){
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[j] + nums[i] == target ){
                console.log([i,j]);
                return [i,j];
            }
        }
    }
    console.log("null")
    return null;
}

//twoSumEx([2,7,11,15],13);


let towSumOptimalEX = function(nums, target){

    let map = {};
    for(let i = 0; i<nums.length; i++){
        if(map[nums[i]] !== undefined){
            console.log("answer: "+[map[nums[i]],i]);
            return [map[nums[i]], i];
        }else{
            let oppositePair = target - nums[i];
            console.log("before: ");
            console.log(map);
            map[oppositePair]= i;
            console.log("after: ");
            console.log(map);
        }
    }
    console.log("null");
    return null;

}

// towSumOptimalEX([4,6,2,7,5],10);

function anotherFunChallenge(input, output) {
  let a = 5;
  let b = 10;
  let c = 50;
  for (let i = 0; i < input.length; i++) {
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;

  }
  for (let j = 0; j < output.length; j++) {
    let p = j * 2;
    let q = j * 2;
  }
  let whoAmI = "I don't know";
}





// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// practice with King
function twoSuw(nums, target) {
    // let i = 0;
    let answer = [];
    let counter = 1;
    for( let i = 0; i < nums.length; i++) {
                console.log("i = "+i);
                console.log("counter "+counter);
                console.log(nums[i] + nums[counter]);
            if(counter < nums.length && nums[i] + nums[counter] == target)  {
                
                answer =  [i, counter];  
            } else {
                counter ++;
             }
    }
    return answer; 
}

//  1,2,3,4,5
//  2 

//console.log(twoSuw([3,7,11,15], 14));

function twoSumDj(nums, target){
    const map = {}
    for (let i = 0; i < nums.length; i++){
        let currentMapVal = map[nums[i]];
        console.log(currentMapVal);
        if(currentMapVal !=undefined){
            console.log([currentMapVal, i]);
        }else{
            const ntf = target - nums[i];
            //map.key = ntf;
            //map.value = i;
           
            map[ntf] = i;
            console.log(map);

        }
    }
}

// twoSumDj([1,2,3,4,5],9);


// twoSum
// num target
// two indexes where sum equals target

// 1. need to store index(value) and value(key) in map
// 2. need to be able to loop the array
// 3. create variable that stores ntf 
// 4. check if ntf is available in map, if true return ntf and index, else add ntf as key and index as value 


function twoSum2(nums, target) {
    let keyVal = {};
    for(let i = 0; i < nums.length; i++) {
        let currentMapVal = keyVal[nums[i]];
        if(currentMapVal >= 0){
            return [currentMapVal, i];
        }else{
            let ntf = target - nums[i];
            keyVal[ntf] = i; 
        }
    }
}


//  console.log(twoSum2([1,2], 3));

// let mapx = {}
// mapx.key = "y";
// mapx.key = "X";
// mapx.value = "z";   
// console.log(mapx);


function sumTwo(nums, target){ //time complexity: o(n), space complexity: o(n)
    let wmap = {};
    
    for(let i = 0; i < nums.length; i++){
        let currentMapValue = wmap[nums[i]];
        if(currentMapValue !== undefined){
            return [currentMapValue, i];
        }else{
            let pair = target - nums[i];
            wmap[pair] = i;
        }
    }
    return null;
}

console.log(sumTwo([1,2,3,4,5,6], 12));