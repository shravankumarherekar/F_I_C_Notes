// Example: Using template literals
const name = "John";
const age = 30;
console.log(`Hello, my name is ${name} and I am ${age} years old.`);
// Output: Hello, my name is John and I am 30 years old.

// Example 1: Destructuring an array
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first, second, third); // Output: 1 2 3

// Example 2: Destructuring an object
const person = { name: "Alice", age: 25 };
const { name, age } = person; //desturcture with keys
console.log(name, age); // Output: Alice 25

// Example 1: Spread operator (arrays)
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

// Example 2: Spread operator (objects)
const obj1 = { name: "John", age: 30 };
const obj2 = { ...obj1, city: "New York" };
console.log(obj2); // Output: { name: 'John', age: 30, city: 'New York' }

// Example 3: Rest parameter (collecting arguments)
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
