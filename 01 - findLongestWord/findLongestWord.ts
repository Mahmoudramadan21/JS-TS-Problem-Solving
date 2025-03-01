function findLongestWord(sentence: string): string {
    // Split the sentence into words and find the longest one
    return sentence.split(" ").reduce((longestWord: string, currentWord: string) =>
        currentWord.length >= longestWord.length ? currentWord : longestWord, "");
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));
// Output: "jumps"