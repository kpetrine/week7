
Const getEvenNumbers = array => {
    let evenNumbers = [array]; 
}

let evenNumbers = [];

for (let i of array) {
if (i % 2 === 0) {
evenNumbers.push(i);
}
}
return evenNumbers;
}

console.log(getEvenNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10])); // expected output: [2, 4, 6, 8, 10]

