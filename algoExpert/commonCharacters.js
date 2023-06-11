//Link to problem: https://www.algoexpert.io/questions/common-characters

//run elements through a set then add each letter to a map as a key and have the value as the count.
//If the count does equal number of elements then we add it to an array then return the array.
//Time: O(n^2), Space: O(n)
function commonCharacters(strings) {
    // Write your code here.
    let result = new Array();
    let map = new Map();
    
    for(let word of strings){
        let element = word.split("");
        let set = new Set(element);

    

        let dummyArr = [];
      
       
        console.log("dummyArr",dummyArr)
        const iterableSet = [...set];
        for(let letter of iterableSet){
            console.log(letter);
            if(!map.has(letter)){
                map.set(letter,1);
                //console.log(map)
            }else{
              //  console.log('get letter', map.get(letter))
                map.set(letter, (map.get(letter)+1));
            }
        }
    }

    for(let [key,value] of map){
        if(value == strings.length){
            result.push(key);
        }
    }

    return result;
}




// 'abc', 'bcd', 'cbaccd'

//abc => set(abc)
// map{a:1, b:1, c:1}

//bcd => set(bcd)
// map{a:1, b:2, d:1}

let arr = ['abc', 'bcd', 'cbaccd'];
console.log(commonCharacters(arr));

