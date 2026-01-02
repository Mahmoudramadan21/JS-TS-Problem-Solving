/**
 * Counts the frequency of each character in a string.
 *
 * @param {string} input - The input string
 * @returns {Map<string, number>} A map containing character frequencies
 */
function countChars(input) {
    const countMap = new Map();

    for (const char of input) {
        countMap.set(char, (countMap.get(char) || 0) + 1);
    }

    return countMap;
}

// Examples:
console.log(countChars("hello"));
// Map { 'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1 }

console.log(countChars("javascript"));
// Map { 'j' => 1, 'a' => 2, 'v' => 1, 's' => 1, 'c' => 1, 'r' => 1, 'i' => 1, 'p' => 1, 't' => 1 }

console.log(countChars(""));
// Map {}
