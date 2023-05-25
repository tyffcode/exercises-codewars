const dog = {name:"dog",legs:4,color:"white"};
const cock = {name:"cock",legs:2,color:"red"};
const rabbit = {name:"rabbit",legs:4,color:"gray"};

const animalObj = (animal) => {
    return `This ${animal.color} ${animal.name} has ${animal.legs} legs.`; 
}

let result = animalObj(dog);
let result1 = animalObj(cock);
let result2 = animalObj(rabbit);

// diferents result 
console.log(result);
console.log(result1);
console.log(result2);