/**
 * Counts the number of vowels in a given string.
 *
 * Rules:
 * - Case insensitive
 * - Ignores non-vowel characters
 *
 * @param input - The string to analyze
 * @returns Number of vowels found
 */
function countVowels(input: string): number {
    const vowels: Set<string> = new Set(["a", "e", "i", "o", "u"]);
    let count: number = 0;

    for (const char of input.toLowerCase()) {
        if (vowels.has(char)) {
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
