/**
 * Find the first non-repeating character in a string.
 *
 * @param str - Input string
 * @returns First non-repeating character or null
 */
function findFirstNonRepeatingCharacter(str: string): string | null {
    const charCount: Map<string, number> = new Map();

    // Count occurrences of each character
    for (const char of str) {
        charCount.set(char, (charCount.get(char) ?? 0) + 1);
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
