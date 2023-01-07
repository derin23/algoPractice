function caesarCipherEncryptor(string, k) {
    // Write your code here.
    const alphabets = alphabet();
    const ciphered = [];

    for(let i = 0; i < string.length; i++){
        let item = string[i]; 
        for(let j = 0; j < alphabets.length; j++) {
            if(item === alphabets[j]) {
                const total = k + j;
                const newIdx = total >= 25 ? (total - 25) - 1 : total;
            ciphered.push(alphabets[newIdx]);
            }
        }
        
    }

    return ciphered.join("");
  
}



function alphabet() {
    const alpha = Array.from(Array(26)).map((e, i) => i + 97);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    return alphabet;
}


console.log(caesarCipherEncryptor("xyz",2));