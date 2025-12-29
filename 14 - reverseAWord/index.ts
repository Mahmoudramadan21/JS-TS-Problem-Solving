/**
 * Reverses a given string.
 *
 * @param str - The string to be reversed.
 * @returns The reversed string.
 */
function reverseString(str: string): string {
    // Step 1: Convert the string into an array of characters
    const charactersArray: string[] = str.split("");
  
    // Step 2: Reverse the array
    const reversedArray: string[] = charactersArray.reverse();
  
    // Step 3: Join the array back into a string
    const reversedString: string = reversedArray.join("");
  
    // Step 4: Return the reversed string
    return reversedString;
}
  
// Example usage:
console.log(reverseString("hello"));              // Output: "olleh"
console.log(reverseString("Frontend Developer")); // Output: "repoleveD dnetnorF"
  