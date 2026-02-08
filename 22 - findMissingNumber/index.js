/**
 * Find the missing number in an array of consecutive numbers starting from 1.
 * 
 * @param {number[]} nums - An array of unique numbers with one missing number
 * @returns {number} The missing number
 */
function findMissingNumber(nums) {
    // Calculate the expected length including the missing number
    const n = nums.length + 1;

    // Use the formula for the sum of first n natural numbers: n * (n + 1) / 2
    const totalSum = (n * (n + 1)) / 2;

    // Calculate the actual sum of numbers in the array
    const sumArray = nums.reduce((acc, num) => acc + num, 0);

    // The missing number is the difference between expected sum and actual sum
    return totalSum - sumArray;
}

// Examples
console.log(findMissingNumber([1, 2, 4, 5, 6])); // Output: 3
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // Output: 6
