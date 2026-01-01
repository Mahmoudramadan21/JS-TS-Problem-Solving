/**
 * Removes duplicate values from an array while preserving the original order.
 *
 * @param {Array} input - The input array that may contain duplicates
 * @returns {Array} A new array with unique values only
 */
function removeDuplicates(input) {
    return [...new Set(input)];
}

// Examples:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// → [1, 2, 3, 4, 5]

console.log(removeDuplicates(["a", "b", "a", "c", "b"]));
// → ["a", "b", "c"]

console.log(removeDuplicates([1, 1, 1, 1]));
// → [1]

console.log(removeDuplicates([]));
// → []
