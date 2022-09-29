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