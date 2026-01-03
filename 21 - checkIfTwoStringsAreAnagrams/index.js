/**
 * Checks if two strings are anagrams of each other
 * using frequency counting (O(n) time).
 *
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {boolean} True if strings are anagrams, false otherwise
 */
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    const freq = {};

    // Count characters in str1
    for (const char of str1) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Subtract characters based on str2
    for (const char of str2) {
        if (!freq[char]) return false; // char missing or extra
        freq[char]--;
    }

    return true;
}

// Tests
console.log(isAnagram("listen", "silent"));       // true
console.log(isAnagram("hello", "world"));         // false
console.log(isAnagram("triangle", "integral"));   // true
console.log(isAnagram("aabb", "ab"));             // false
