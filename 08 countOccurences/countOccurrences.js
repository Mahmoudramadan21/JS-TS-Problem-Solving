function countOccurrences(arr) {
    // Create a Map to store the frequency of each number
    const frequencyMap = new Map();

    // Iterate through the array and update the count in the map
    arr.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });

    // Convert the Map to a regular object and return it
    return Object.fromEntries(frequencyMap);
}

console.log(countOccurrences([1, 2, 2, 3, 3, 3, 4]));
// Output: { 1: 1, 2: 2, 3: 3, 4: 1 }
