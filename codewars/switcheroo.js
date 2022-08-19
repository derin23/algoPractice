// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

//steps
//1)split argument into array of chars
//2)create an array
//3)loop throug split array of chars 
//4)when a is found push b and when b is found push a
function switcheroo(x){

    let arrayChars = x.split("");
    let answerArray = [];
    if(x == null || x == undefined || x == ""){
        return "Please check argument!";
    }
    for(let i = 0; i < arrayChars.length; i++){
        if(arrayChars[i] == "a"){
            answerArray.push("b");
        }else if(arrayChars[i] == "b"){
            answerArray.push("a");
        }else if(arrayChars[i] == "c"){
            answerArray.push(arrayChars[i]);
        }else{
            return "Please pass in letters a,b,c only!";
        }
    }
    return answerArray.join("");
}

console.log(switcheroo("acb"));

module.exports = switcheroo;