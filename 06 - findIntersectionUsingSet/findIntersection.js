function findIntersection(arr1, arr2) {
    // Convert the first array into a Set for quick lookup
    const uniqueNumbers = new Set(arr1);

    // Filter the second array to keep only elements that exist in the first array
    return arr2.filter(num => uniqueNumbers.has(num));
}

console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
// Output: [3, 4]
