/**
 * Returns the longest word in a sentence.
 * If multiple words have the same length, the first one is returned.
 *
 * @param {string} sentence - Input sentence
 * @returns {string} The longest word
 */
function longestWord(sentence) {
    // Remove punctuation and normalize spacing
    const words = sentence
        .replace(/[^\w\s]/g, "")
        .split(/\s+/);

    let longest = "";

    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

console.log(longestWord("I love JavaScript so much"));
console.log(longestWord("Frontend development is awesome!"));
console.log(longestWord("Hi"));
