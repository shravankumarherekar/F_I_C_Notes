// Example: Multiply each element of an array by 2 using map
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Example: Filter even numbers from an array using filter
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Example: Sum all elements of an array using reduce
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

// Example: Chain map, filter, and reduce to calculate the total of squares of even numbers
const numbers = [1, 2, 3, 4, 5];
const totalSquareOfEvenNumbers = numbers
    .filter(num => num % 2 === 0) // Filter even numbers
    .map(num => num ** 2) // Square each number
    .reduce((acc, curr) => acc + curr, 0); // Sum all squared numbers
console.log(totalSquareOfEvenNumbers); // Output: 20 (4^2 + 2^2)
