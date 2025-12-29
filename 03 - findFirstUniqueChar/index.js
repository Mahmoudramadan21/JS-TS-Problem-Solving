function findFirstUniqueChar(word) {
    // Create an object to store character frequencies
    const charFrequency = {};

    // Count occurrences of each character
    for (const char of word) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    // Find and return the first unique character
    for (const char of word) {
        if (charFrequency[char] === 1) return char;
    }

    // Return null if no unique character is found
    return null;
}

console.log(findFirstUniqueChar("javascript")); // Output: "j"
console.log(findFirstUniqueChar("aabbcc"));     // Output: null
