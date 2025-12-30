/**
 * Recursively flattens a nested array of any depth into a single-level array.
 * 
 * @template T - The type of the elements inside the nested array
 * @param {NestedArray<T>} input - The array which may contain nested arrays
 * @returns {T[]} - A new flattened array containing all elements
 */
type NestedArray<T> = (T | NestedArray<T>)[];

function flattenArray<T>(input: NestedArray<T>): T[] {
    // Initialize an array to hold the flattened result
    const outputArr: T[] = [];

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
console.log(flattenArray<number>([1, [2, 3], [4, [5, 6]]]));
// Output: [1, 2, 3, 4, 5, 6]

console.log(flattenArray<number>([[1], [2, [3, [4]]]]));
// Output: [1, 2, 3, 4]

console.log(flattenArray<number>([1, 2, 3]));
// Output: [1, 2, 3]

// Can also work with strings
console.log(flattenArray<string>([['a'], ['b', ['c']]]));
// Output: ['a', 'b', 'c']
