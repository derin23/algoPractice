class Solution {
    solve1(nums,k){
        let map = {};

        for(let i = 0; i < nums.length; i++){
            let oppositeNum = k - nums[i];

            if(map[nums[i]] !== undefined){
                return true;
            }else{
                map[oppositeNum] = i;
            }
        }
        return false;
    }

    solve2(nums,k){
        let map = {};

        for(let i = 0; i < nums.length; i++){
            let oppositeNum = k - nums[i];

            if(map[nums[i]] == undefined){
                map[oppositeNum] = i;
                
            }else{
                return true;
            }
        }
        return false;
    }

   
}

 //testing a js feature 

function doSomething(){
    let some = "1,2,3";
    const split =  new splitArray(some);
    return split;
}


 function splitArray(some) {
        array.split(",");
}

console.log(doSomething());