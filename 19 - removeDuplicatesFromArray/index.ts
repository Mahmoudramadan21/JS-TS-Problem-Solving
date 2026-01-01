/**
 * Removes duplicate values from an array while preserving the original order.
 *
 * @template T - The type of elements in the array
 * @param {T[]} input - The input array that may contain duplicates
 * @returns {T[]} A new array with unique values only
 */
function removeDuplicates<T>(input: T[]): T[] {
    return [...new Set(input)];
}

// Examples:
console.log(removeDuplicates<number>([1, 2, 2, 3, 4, 4, 5]));
// → [1, 2, 3, 4, 5]

console.log(removeDuplicates<string>(["a", "b", "a", "c", "b"]));
// → ["a", "b", "c"]

console.log(removeDuplicates<number>([1, 1, 1, 1]));
// → [1]

console.log(removeDuplicates<number>([]));
// → []
