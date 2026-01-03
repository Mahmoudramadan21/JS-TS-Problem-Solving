/**
 * Checks if two strings are anagrams of each other
 * using frequency counting (O(n) time).
 *
 * @param str1 - First string
 * @param str2 - Second string
 * @returns True if strings are anagrams, false otherwise
 */
function isAnagramTS(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;

    const freq: Record<string, number> = {};

    for (const char of str1) {
        freq[char] = (freq[char] ?? 0) + 1;
    }

    for (const char of str2) {
        if (!freq[char]) return false;
        freq[char]--;
    }

    return true;
}

// Tests
console.log(isAnagramTS("listen", "silent"));       // true
console.log(isAnagramTS("hello", "world"));         // false
console.log(isAnagramTS("triangle", "integral"));   // true
console.log(isAnagramTS("aabb", "ab"));             // false
