function firstDuplicate(arr) {
    // Create a Set to track seen numbers
    const seenNumbers = new Set();

    // Iterate through the array
    for (const num of arr) {
        // If the number is already in the set, return it as the first duplicate
        if (seenNumbers.has(num)) return num;

        // Otherwise, add the number to the set
        seenNumbers.add(num);
    }

    // Return -1 if no duplicates are found
    return -1;
}

console.log(firstDuplicate([1, 2, 3, 4, 2, 5]));
// Output: 2
