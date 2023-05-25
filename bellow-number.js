function solution(number){
    let sumOfNumbers = 0; 
    const numbers  = [];
    if(number < 0) return 0;
    for(let i = 0; i < number; i++){
      numbers.push(i);
      if(numbers[i] % 3 === 0 && numbers[i] !== 1){
        sumOfNumbers += numbers[i];
        console.log(sumOfNumbers);
      }else if(numbers[i] % 5 === 0 && numbers[i] !== 1){
        sumOfNumbers += numbers[i];
      }
    }
    return sumOfNumbers;
}

function solution(number) {
    if (number < 0) return 0;
    
    const sumOfNumbers = sumOfMultiples(number, 3) + sumOfMultiples(number, 5) - sumOfMultiples(number, 15);
    
    return sumOfNumbers;
}

//  la suma de una progresión aritmética
function sumOfMultiples(number, divisor) {
    const p = Math.floor((number - 1) / divisor);
    return divisor * p * (p + 1) / 2;
}


solution(10);