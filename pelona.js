// const replaceWord = (word) => {
//     let palabra = ""  
//     for(let i = 0; i < word.length; i++){
//         if(word[i] === word[word.length - 2]){
//             console.log(word[i]);
//             word = word.replace(word[i], "n");
//         }
//         console.log(word);
//     }
// }

const replaceWord = (word) => {
    let palabra = "";
    let i = 0
    while(word[i] !== word[word.length - 2]){
        console.log(word);
        i++;
    }
    palabra = word.replace(word[i], "n");
    console.log(palabra);
}
replaceWord("pelota");