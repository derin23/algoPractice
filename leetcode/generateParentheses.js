// 22. Generate Parentheses
// Medium
// 15.9K
// 612
// company
// Amazon
// company
// Adobe
// company
// Apple
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8

//steps
//1)
var generateParenthesis = function(n) {
    const solution = [];

    const generateCombo = (leftPCount, rightPCount, partial)=>{
        if(leftPCount > rightPCount) return;
        if(!leftPCount && !rightPCount) {
            solution.push(partial);
            console.log('pcounts are == 0: ', partial);
        }
        if(leftPCount > 0) {
            generateCombo (leftPCount - 1, rightPCount, partial + '(');
            console.log('leftPCount > 0: ', partial);
        }
        if(rightPCount > 0) {
            generateCombo(leftPCount, rightPCount - 1, partial + ")");
            console.log('rightPCount > 0: ', partial);
        }
    }
    generateCombo(n,n,'');
    return solution;
};

module.exports = {
    generateParenthesis : generateParenthesis
}

console.log(generateParenthesis(3));
