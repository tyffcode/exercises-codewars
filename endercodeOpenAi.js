function duplicateEncode(word) {
    let replaceWord = "";
    const positions = positionLetterDuplicate(word); // [1,3,5]
  
    for (let i = 0; i < word.length; i++) {
      if (positions.includes(i)) {
        replaceWord += ")";
      } else {
        replaceWord += "(";
      }
    }
  
    return replaceWord;
  }
  
  const positionLetterDuplicate = (word) => {
    let letterDuplicate = [];
    for (let i = 0; i < word.length - 1; i++) {
      for (let j = i + 1; j < word.length; j++) {
        if (word[i] == word[j]) {
          letterDuplicate.push(i, j);
        }
      }
    }
    const uniquePositions = letterDuplicate.filter(
      (element, index) => letterDuplicate.indexOf(element) === index
    );
    return uniquePositions;
  }
  
  const result = duplicateEncode("recede");
  console.log(result); // Output: "()()()"