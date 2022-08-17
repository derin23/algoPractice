//second question  
function descendingOrder(n){
    //convert input number to string
    //separate each char into an array
    //convert it back to number
    //sort it from biggest value to smallest value
    //add answer to a variable then return it
    
    let nArray = Array.from(n.toString()).map(Number);
    
    let sorting = nArray.sort();
    let answer;
    
    for(let i = 0; i <sorting.length; i++){
      answer += sorting[i];
    }
  
    return answer;
    
  }
  
  console.log(descendingOrder(1234));