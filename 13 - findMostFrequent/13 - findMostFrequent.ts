function findMostFrequent(numbers: number[]): number | null {
    if (numbers.length === 0) return null;  // If the array is empty, return null
    
    // Create an object to store the frequency of each number
    let frequency: { [key: number]: number } = {};
  
    // Loop through the numbers and count their occurrences
    numbers.forEach(num => {
      frequency[num] = (frequency[num] || 0) + 1;
    });
  
    // Find the number with the highest frequency
    let maxFrequency: number = Math.max(...Object.values(frequency));
  
    // Filter numbers that have the max frequency
    let mostFrequentNumbers: number[] = Object.keys(frequency)
      .filter(num => frequency[parseInt(num)] === maxFrequency)
      .map(num => parseInt(num));
  
    // Return the smallest number with the highest frequency
    return Math.min(...mostFrequentNumbers);
  }
  
  console.log(findMostFrequent([1, 3, 3, 1, 2, 2, 2]));  // Expected output: 2
  console.log(findMostFrequent([1, 2, 3, 3, 1, 1]));  // Expected output: 1
  console.log(findMostFrequent([5, 5, 5, 2, 2]));  // Expected output: 5
  console.log(findMostFrequent([]));  // Expected output: null
  