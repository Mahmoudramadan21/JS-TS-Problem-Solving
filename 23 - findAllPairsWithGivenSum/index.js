/**
 * Find all unique pairs of numbers whose sum equals the given target.
 *
 * Idea:
 * For each number, check if the number needed to reach the target
 * (target - currentNumber) has already been seen.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums - Array of numbers
 * @param {number} target - Target sum
 * @returns {number[][]} Array of unique pairs
 */
function findAllPairsWithGivenSum(nums, target) {
    // A Set to store numbers we have already visited
    const seen = new Set();

    // Array to store the resulting pairs
    const pairs = [];

    // Iterate through each number in the array
    for (const num of nums) {
        // Calculate the number needed to reach the target
        const complement = target - num;

        // If the complement was seen before, we found a valid pair
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

console.log(findAllPairsWithGivenSum([10, 6, 3, 7], 13));
// Output: [ [10, 3], [6, 7] ]
