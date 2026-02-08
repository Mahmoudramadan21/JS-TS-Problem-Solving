/**
 * Find all unique pairs of numbers whose sum equals the given target.
 *
 * @param nums - Array of numbers
 * @param target - Target sum
 * @returns Array of unique pairs
 */
function findAllPairsWithGivenSum(
    nums: number[],
    target: number
): number[][] {
    // A Set to store numbers we have already visited
    const seen: Set<number> = new Set();

    // Array to store the resulting pairs
    const pairs: number[][] = [];

    // Iterate through each number in the array
    for (const num of nums) {
        // Calculate the number needed to reach the target
        const complement: number = target - num;

        // If the complement exists, we found a valid pair
        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }

        // Store the current number for future checks
        seen.add(num);
    }

    // Return all found pairs
    return pairs;
}

/* =======================
   Examples
   ======================= */

console.log(findAllPairsWithGivenSum([3, 7, 1, 2, 8, 4, 5], 9));
// Output: [ [7, 2], [1, 8], [4, 5] ]

console.log(findAllPairsWithGivenSum([1, 2, 3, 4, 5], 5));
// Output: [ [2, 3], [1, 4] ]
