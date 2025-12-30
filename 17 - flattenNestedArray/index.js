/**
 * Recursively flattens a nested array into a single-level array.
 * 
 * @param {Array} input - The array which may contain nested arrays.
 * @returns {Array} - A new flattened array containing all elements.
 */
function flattenArray(input) {
    // Initialize an array to hold the flattened result
    let outputArr = [];

    // Iterate through each element in the input array
    for (const i of input) {
        if (Array.isArray(i)) {
            // If the element is an array, recursively flatten it
            // and merge the result into the output array using spread
            outputArr.push(...flattenArray(i));
        } else {
            // If the element is not an array, push it directly
            outputArr.push(i);
        }
    }

    // Return the fully flattened array
    return outputArr;
}

// Example usages:
console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));
// Output: [1, 2, 3, 4, 5, 6]

console.log(flattenArray([[1], [2, [3, [4]]]]));
// Output: [1, 2, 3, 4]

console.log(flattenArray([1, 2, 3]));
// Output: [1, 2, 3]
