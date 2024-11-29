function compressString(str) {
    let compressedString = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressedString += str[i] + count;
            count = 1; // Reset count for the next character
        }
    }

    // Check if compressed string is shorter than the original string
    return compressedString.length < str.length ? compressedString : str;
}

// Example usage:
const inputString = "aabcccccaaa";
console.log("Compressed String:", compressString(inputString)); // Output: "a2b1c5a3"
