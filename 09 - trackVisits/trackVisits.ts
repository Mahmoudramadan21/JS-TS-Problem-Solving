function trackVisits(arr: number[]): Map<number, number> {
    // Create a Map to store the visit count for each unique number
    const visitMap = new Map<number, number>();

    // Iterate through the array and update the visit count
    arr.forEach(num => visitMap.set(num, (visitMap.get(num) || 0) + 1));

    return visitMap;
}

console.log(trackVisits([101, 102, 101, 103, 101, 102]));
// Output: Map { 101 => 3, 102 => 2, 103 => 1 }
