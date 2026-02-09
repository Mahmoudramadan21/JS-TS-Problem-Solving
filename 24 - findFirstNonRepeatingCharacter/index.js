/**
 * Find the first non-repeating character in a string.
 * Returns null if all characters repeat.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} str - Input string
 * @returns {string | null} First non-repeating character or null
 */
function findFirstNonRepeatingCharacter(str) {
    const charCount = new Map();

    // Count occurrences of each character
    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Find the first character with count === 1
    for (const char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }

    return null;
}

/* =======================
   Examples
   ======================= */

console.log(findFirstNonRepeatingCharacter("aabbccdeff")); // d
console.log(findFirstNonRepeatingCharacter("aabbcc"));     // null
console.log(findFirstNonRepeatingCharacter("javascript")); // j
console.log(findFirstNonRepeatingCharacter("Aa"));         // A
