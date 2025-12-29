/**
 * Checks whether a given string is a palindrome.
 *
 * Rules:
 * - Ignores case sensitivity
 * - Ignores spaces and special characters
 *
 * @param input - The value to check
 * @returns True if the input is a palindrome, otherwise false
 */
function checkPalindrome(input: string): boolean {
    // Normalize the input: lowercase and remove non-alphanumeric characters
    const cleaned: string = input
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    // Compare the cleaned string with its reversed version
    return cleaned === cleaned.split("").reverse().join("");
}

// Test cases
console.log(checkPalindrome("hello")); // false
console.log(checkPalindrome("RaceCar")); // true
console.log(checkPalindrome("A man, a plan, a canal: Panama")); // true
