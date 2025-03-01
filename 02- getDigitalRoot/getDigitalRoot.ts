function getDigitalRoot(number: number): number {
    // Base case: if the number is a single digit, return it
    if (number < 10) return number;

    // Convert number to string, split into digits, convert to numbers, and sum them
    const digitSum = number.toString()
        .split("")
        .map(Number)
        .reduce((total, digit) => total + digit, 0);

    // Recursively call the function until a single-digit number is obtained
    return getDigitalRoot(digitSum);
}

console.log(getDigitalRoot(987));
// Output: 6