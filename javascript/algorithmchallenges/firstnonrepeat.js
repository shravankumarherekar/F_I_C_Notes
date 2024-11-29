function firstNonRepeatingChar(str) {
    const charCount = {};

    // Count occurrences of each character in the string
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeating character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // Return null if no non-repeating character found
}

// Example usage:
const inputString = 'hello world';
const firstNonRepeatChar = firstNonRepeatingChar(inputString);
console.log("First non-repeating character:", firstNonRepeatChar);
