function groupAnagrams(words: string[]): string[][] {
    // Create a map to store anagram groups
    const anagramGroups = new Map<string, string[]>();

    words.forEach(word => {
        // Sort the characters of the word to create a key
        const sortedWord = word.split("").sort().join("");

        // If the key doesn't exist, create a new array
        if (!anagramGroups.has(sortedWord)) {
            anagramGroups.set(sortedWord, []);
        }

        // Add the original word to the corresponding anagram group
        anagramGroups.get(sortedWord)!.push(word);
    });

    // Return all grouped anagrams as an array
    return Array.from(anagramGroups.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]