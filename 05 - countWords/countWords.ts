function countWords(sentence: string): Map<string, number> {
    // Create a map to store word frequencies
    const wordFrequency = new Map<string, number>();

    // Split the sentence into words and count occurrences
    sentence.split(" ").forEach(word => {
        wordFrequency.set(word, (wordFrequency.get(word) || 0) + 1);
    });

    // Return the map containing word counts
    return wordFrequency;
}

console.log(countWords("hello world hello"));
// Output: Map { 'hello' => 2, 'world' => 1 }
