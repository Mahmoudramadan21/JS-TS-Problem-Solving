/**
 * Rotates an array to the right by k positions.
 * Returns a new array without modifying the original array.
 * Handles cases where k is larger than the array length or zero.
 *
 * @param arr - The input array to rotate
 * @param k - Number of positions to rotate
 * @returns The rotated array
 */
function rotateArray<T>(arr: T[], k: number): T[] {
    const n = arr.length;

    // Return empty array immediately if input is empty
    if (n === 0) return arr;

    // Ensure k is within array bounds
    k = k % n;

    // If k is 0, return a shallow copy of the original array
    if (k === 0) return [...arr];

    // Slice the last k elements and the first n-k elements, then merge
    return [...arr.slice(-k), ...arr.slice(0, n - k)];
}

// Examples:
console.log(rotateArray<number>([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log(rotateArray<string>(["a", "b", "c", "d"], 1)); // ["d", "a", "b", "c"]
console.log(rotateArray<number>([1, 2, 3], 3)); // [1, 2, 3]
console.log(rotateArray<number>([1, 2, 3], 5)); // [2, 3, 1]
console.log(rotateArray<number>([], 2)); // []
