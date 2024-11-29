function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false; // Anagrams must have the same length
    }

    const charMap = {}; // Map to store character frequencies

    // Count frequencies of characters in str1
    for (let char of str1) {
        charMap[char] = (charMap[char] || 0) + 1;
    }

    // Compare frequencies with str2
    for (let char of str2) {
        if (!charMap[char]) {
            return false; // Found a character not present in str1
        }
        charMap[char]--;
    }

    return true; // All characters in str2 found in str1 with correct frequencies
}

// Example usage:
const str1 = "listen";
const str2 = "silent";
console.log("Are they anagrams?", isAnagram(str1, str2)); // Output: true
