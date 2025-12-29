/**
 * Checks whether a given string is a palindrome.
 * 
 * Rules:
 * - Ignores case sensitivity
 * - Ignores spaces and special characters
 * 
 * @param {string} input - The input string to check
 * @returns {boolean} - True if palindrome, otherwise false
 */
function checkPalindrome(input) {
    // Convert input to string, normalize case, and remove non-alphanumeric characters
    const cleaned = String(input)
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    // Reverse the cleaned string and compare with the original
    return cleaned === cleaned.split("").reverse().join("");
}

// Test cases
console.log(checkPalindrome("hello")); // false
console.log(checkPalindrome("RaceCar")); // true
console.log(checkPalindrome("A man, a plan, a canal: Panama")); // true
