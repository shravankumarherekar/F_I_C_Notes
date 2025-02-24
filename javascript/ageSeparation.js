let group = [
  { name: "shravan", age: "14" },
  { name: "kumar", age: "20" },
  { name: "javascript", age: "20" },
];

function checkage(p) {
  let check = {};
  p.forEach((item) => {
    if (!check[item.age]) {
      check[item.age] = [item];
    } else {
      check[item.age].push(item);
    }
  });
  return check;
}
console.log(checkage(group));

// This function takes an array (p) as an argument and processes it. Here's what it does:

// Initialize an empty object (check):

// The check object will be used to group people by their age. The idea is that the age will be the key and the value will be an array of people with that age.
// Loop over each item in the array (p):

// The forEach() method loops through each object (item) in the group array.
// Check if the check object already has that age key:

// The condition if (!check[item.age]) checks if the check object does not yet have an entry for that particular age.

// If the age doesn't exist as a key in check, it creates a new key with that age and assigns an array with the current item as the first element.

// Example:

// If age is "14", check becomes: { "14": [{ name: "shravan", age: "14" }] }.
// If the age already exists in check, it simply pushes the current item into the existing array of that age.

// Example:

// If age is "20", check might become: { "14": [...], "20": [{ name: "kumar", age: "20" }, { name: "javascript", age: "20" }] }.
// Return the check object:

// After looping through all the items, the function returns the check object, which contains the grouped people by their age.
