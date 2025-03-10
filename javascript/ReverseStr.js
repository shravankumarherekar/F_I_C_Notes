// program to check if the string is palindrome or not

function checkPalindrome(string) {

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

// //take input
// const string = prompt('Enter a string: ');

// checkPalindrome(string);

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Compare original string with its reversed version
    for (let i = 0; i < cleanStr.length / 2; i++) {
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return false; // Not a palindrome
        }
    }
    return true; // Palindrome
}

// Example usage:
const testString1 = 'racecar';
const testString2 = 'hello';

console.log(testString1 + ' is a palindrome:', isPalindrome(testString1));
console.log(testString2 + ' is a palindrome:', isPalindrome(testString2));
