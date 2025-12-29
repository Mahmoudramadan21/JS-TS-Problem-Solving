/**
 * Counts the number of vowels in a given string.
 *
 * Rules:
 * - Case insensitive
 * - Ignores non-vowel characters
 *
 * @param {string} input - The string to analyze
 * @returns {number} Number of vowels found
 */
function countVowels(input) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (const char of input.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Test cases
console.log(countVowels("hello"));        // 2
console.log(countVowels("JAVASCRIPT"));   // 3
console.log(countVowels("bcdfg"));        // 0
console.log(countVowels("TypeScript!"));  // 2
