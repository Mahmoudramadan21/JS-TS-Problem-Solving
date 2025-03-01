function countOccurrences(arr: number[]): Record<number, number> {
    // Create a Map to store the frequency of each number
    const frequencyMap = new Map<number, number>();

    // Iterate through the array and update the count in the map
    arr.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });

    // Convert the Map to a regular object and return it
    return Object.fromEntries(frequencyMap) as Record<number, number>;
}

console.log(countOccurrences([1, 2, 2, 3, 3, 3, 4]));
// Output: { 1: 1, 2: 2, 3: 3, 4: 1 }
