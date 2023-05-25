const sumOfNumbers = [15, 16, 17, 18, 19];
sumOfNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    10, // value initial 
);

// methoed reduce()
const grow = (array) => array.reduce((product, num) => product * num, 1)


//ECMASCRIPT+6
const grow = (array) => {
    let result = 1;
    array.forEach(element => result *= element)
    return result;
}

//ECMASCRIPT+6
const grow = (array) => {
    let result = 1;
    for(const element of array){
        result *= element;
    }
    return result;
}

function grow(array){
    let result = 1;
    for(const index of array){
        result *= index;
    }
    return result;
}

function grow(array){
    let result = 1;
    array.forEach(element => {
        result *= element;
    });
    return result;
}

const myArray = [1,2,3,4,5];
grow(myArray);
