# JS & TS Problem Solving

This repository contains solutions to various JavaScript and TypeScript coding challenges. Each challenge is implemented in both JavaScript and TypeScript for better understanding and comparison.

## Problems List

### 1. Longest Word

**Description:** Finds the longest word in a given sentence.

**Example:**

```js
longestWord("The quick brown fox jumps over the lazy dog");
// Output: "jumps"
```

---

### 2. Sum of Digits (Recursively)

**Description:** Recursively sums the digits of a number until a single digit is obtained.

**Example:**

```js
sumDigits(987);
// Output: 6 (9+8+7=24 → 2+4=6)
```

---

### 3. First Unique Character

**Description:** Finds the first non-repeating character in a word.

**Example:**

```js
firstUniqueChar("javascript");
// Output: "j"
```

---

### 4. Group Anagrams

**Description:** Groups words that are anagrams of each other.

**Example:**

```js
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
```

---

### 5. Count Words

**Description:** Counts the occurrences of each word in a sentence.

**Example:**

```js
countWords("hello world hello");
// Output: { 'hello': 2, 'world': 1 }
```

---

### 6. Find Intersection using Set

**Description:** Finds the intersection of two arrays using a Set.

**Example:**

```js
findIntersection([1, 2, 3, 4], [3, 4, 5, 6]);
// Output: [3, 4]
```

---

### 7. First Duplicate

**Description:** Finds the first duplicate number in an array.

**Example:**

```js
firstDuplicate([1, 2, 3, 4, 2, 5]);
// Output: 2
```

---

### 8. Count Occurrences

**Description:** Counts how many times each number appears in an array.

**Example:**

```js
countOccurrences([1, 2, 2, 3, 3, 3, 4]);
// Output: { 1: 1, 2: 2, 3: 3, 4: 1 }
```

---

### 9. Track Visits

**Description:** Tracks the number of visits for each unique ID.

**Example:**

```js
trackVisits([101, 102, 101, 103, 101, 102]);
// Output: Map { 101 => 3, 102 => 2, 103 => 1 }
```

---

## How to Run

1. Clone the repository:
   ```sh
   git clone https://github.com/Mahmoudramadan21/JS-TS-Problem-Solving.git
   cd js-ts-challenges
   ```
2. Run JavaScript files using Node.js:
   ```sh
   node filename.js
   ```
3. Run TypeScript files:
   ```sh
   tsc filename.ts && node filename.js
   ```

## Contributions

Feel free to submit pull requests if you have improvements or additional challenges to add!

---

Happy coding! 🚀
