function sumOddNumbers(numbers: number[]): number { 
    let sum: number = 0;
  
    // Loop through the array and add odd numbers to the sum
    numbers.forEach((number: number) => {
      if (number % 2 !== 0) {  // Check if the number is odd
        sum += number;
      }
    });
  
    return sum;
}

console.log(sumOddNumbers([1, 2, 3, 4, 5])); // Expected output: 9
