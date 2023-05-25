
const duplicateEncode = (word) => { // recede
    let replaceWord = "";
    word = word.toLowerCase();
    const positions = positionLetterDuplicate(word); // [1,3,5]
    for(let i = 0; i < word.length; i++){
        if(positions.includes(i)){
            replaceWord += ")";
        } else{
            replaceWord += "(";
        }
    }
   
    return replaceWord;
}

const positionLetterDuplicate = (word) => {
    let = letterDuplicate = [];
    for(let i = 0; i < word.length - 1; i++){ // 
        //console.log(`${i} vuelta: ${word[i]}`);
        for(let j = i+1; j < word.length; j++){
            if(word[i] == word[j]){
                letterDuplicate.push(i,j);
            }; 
            //console.log(word[j]);
    
        }
        //console.log(letterDuplicate);
    }
    
    const posta = letterDuplicate.filter((element, index) => 
        letterDuplicate.indexOf(element) ==  index); 
    //console.log(posta);
    return posta;
}

let result = duplicateEncode("recede");
let result1 = duplicateEncode("din");
let result2 = duplicateEncode("(())())"); ")())())"
let result3 = duplicateEncode("Success"); 
let result4 = duplicateEncode("(( @");


console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
