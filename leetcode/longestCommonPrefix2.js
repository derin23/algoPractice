var longestCommonPrefix = function(strs) {
    
    let answer = strs[0];

    for(let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(answer) !==0){
            answer = answer.substring(0, answer.length - 1)
        }
    }

    return answer

};

console.log(longestCommonPrefix(["flower","flow","flight"]));