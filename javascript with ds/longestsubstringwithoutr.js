function longestSubstringWithoutRepeating(s) {
    const charMap = {}; // Map to store characters and their positions
    let maxLength = 0;
    let start = 0; // Start index of the current substring

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        // If the character is already in the map and its index is after the start of the current substring
        if (charMap[currentChar] !== undefined && charMap[currentChar] >= start) {
            // Move the start index to the right of the last occurrence of the character
            start = charMap[currentChar] + 1;
        }

        // Update the character's position in the map
        charMap[currentChar] = end;
        
        // Update the maximum length of the substring without repeating characters
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:
const inputString = "abcabcbb";
console.log("Length of Longest Substring Without Repeating Characters:", longestSubstringWithoutRepeating(inputString)); // Output: 3 (for "abc")
