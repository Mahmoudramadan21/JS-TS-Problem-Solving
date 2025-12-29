/**
 * Reverses a given string.
 *
 * @param {string} str - The string to be reversed.
 * @returns {string} - The reversed string.
 */
function reverseString(str) {
  // Step 1: Convert the string into an array of characters
  const charactersArray = str.split("");

  // Step 2: Reverse the array
  const reversedArray = charactersArray.reverse();

  // Step 3: Join the array back into a string
  const reversedString = reversedArray.join("");

  // Step 4: Return the reversed string
  return reversedString;
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("Frontend Developer")); // Output: "repoleveD dnetnorF"
