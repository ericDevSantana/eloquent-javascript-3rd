// Array of arrays to be flattened
let myArray = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];

// Reduce method:
// input = array of arrays
// output = one array containing all elements of all arrays inside input's array
let flattened = myArray.reduce(function (accumulator, currentItem) {
    return accumulator.concat(currentItem);
}, []);

// Show result
console.log(flattened);