# Algorithm Practice Repository

A comprehensive collection of algorithm solutions and data structure implementations for technical interview preparation. This repository contains solutions from multiple platforms including LeetCode, AlgoExpert, CodeWars, and NeetCode, organized by difficulty and topic.

## 📊 Repository Statistics

- **Total Problems Solved**: 100+ algorithms
- **Platforms**: LeetCode, AlgoExpert, CodeWars, NeetCode
- **Languages**: JavaScript (primary), Python
- **Test Coverage**: Comprehensive test suite with Jest
- **Categories**: Arrays, Strings, Linked Lists, Trees, Sorting, Searching, Dynamic Programming, and more

## 🗂️ Repository Structure

```
algos/
├── algoExpert/          # AlgoExpert problems (24 problems)
├── leetcode/           # LeetCode problems (50+ problems)
├── codewars/           # CodeWars challenges (20+ problems)
├── neetcode/           # NeetCode problems (10+ problems)
├── binarySearch/       # Binary search specific problems
├── recursion/          # Recursion practice and visualizations
├── primeAlgos/         # Prime number algorithms
├── tests/              # Test files for each category
└── coverage/           # Test coverage reports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
git clone https://github.com/derin23/algoPractice.git
cd algoPractice
npm install
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test
```

## 📚 Problem Categories

### 🔥 AlgoExpert (24 Problems)

Advanced algorithm problems with detailed explanations and multiple solution approaches.

**Key Problems:**

- `twoNumberSum.js` - Two Sum problem with O(n) and O(n log n) solutions
- `mergeSort.js` - Merge sort implementation with O(n log n) complexity
- `findClosestValInBST.js` - Binary search tree operations
- `linkedListConstruction.js` - Complete linked list implementation
- `minMaxStackConstruction.js` - Stack with min/max tracking
- `branchSums.js` - Binary tree branch sum calculation
- `caesarCipherEncryptor.js` - String manipulation and encryption
- `commonCharacters.js` - Character frequency analysis
- `firstNonRepeatingCharacter.js` - Hash map optimization
- `nodeDepths.js` - Tree traversal and depth calculation
- `nonConstructibleChange.js` - Greedy algorithm approach
- `nthFibonacci.js` - Dynamic programming and memoization
- `palindromCheck.js` - String palindrome validation
- `productSum.js` - Nested array processing
- `removeDuplicatesFromLinkedList.js` - Linked list manipulation
- `removeKthNodeFromEnd.js` - Two-pointer technique
- `smallestDifference.js` - Array comparison algorithms
- `sortedSquaredArray.js` - Array transformation
- `tournamentWinner.js` - Hash map and data processing
- `validSubsequence.js` - Sequence validation

### 🎯 LeetCode (50+ Problems)

Comprehensive collection of LeetCode problems covering all difficulty levels.

**Easy Problems:**

- `twoSum.js` - Two Sum (multiple implementations)
- `validAnagram.js` - Anagram detection
- `containsDuplicate.js` - Duplicate detection
- `firstUniqueCharInStr.js` - Character frequency
- `romanToInteger.js` - Roman numeral conversion
- `closestToZero.js` - Array processing
- `lengthOfLastWord.js` - String manipulation
- `plusOne.js` - Array arithmetic
- `singleNumber.js` - Bit manipulation
- `powerOfThree.js` - Mathematical optimization

**Medium Problems:**

- `longestSubstringWithoutRepeatingCharacters.js` - Sliding window
- `longestCommonPrefix.js` - String comparison
- `mergeTwoSortedLists.js` - Linked list merging
- `generateParentheses.js` - Backtracking
- `permutations.js` - Recursive generation
- `dailyTemp.js` - Stack-based solution
- `binaryTreePreorderTraversal.js` - Tree traversal
- `searchInsertPosition.js` - Binary search
- `removeDuplicatesFromSortedArr.js` - Array manipulation

**Advanced Problems:**

- `binarySearch.js` - Binary search implementation
- `firstBadVersion.js` - Binary search variant
- `mergeSortedArray.js` - In-place merging
- `minStack.js` - Stack with auxiliary data structure
- `validParentheses.js` - Stack-based validation
- `backspaceStringCompare.js` - String processing with stack

### ⚔️ CodeWars (20+ Problems)

Kata challenges focusing on practical programming skills and code optimization.

**String Manipulation:**

- `anagramDetection.js` - Anagram checking
- `breakCamelCase.js` - String formatting
- `convertStringToCamelCase.js` - Case conversion
- `reverseString.js` - String reversal
- `simplePigLatin.js` - Pig Latin conversion
- `stringEndsWith.js` - String suffix checking
- `vowelCount.js` - Character counting

**Array Processing:**

- `arrayDiff.js` - Array difference calculation
- `arrayInArray.js` - Nested array handling
- `arrayPrototypeReverse.js` - Array prototype extension
- `descendingOrder.js` - Array sorting
- `listFiltering.js` - Array filtering
- `movingZerosToTheEnd.js` - Array reordering

**Data Structures:**

- `getNthLL.js` - Linked list operations
- `dictionaryFromTwoLists.js` - Object creation from arrays

**Advanced:**

- `extractTheDomainNameFromAURL.js` - URL parsing
- `splitStrings.js` - String splitting algorithms
- `switcheroo.js` - Character swapping
- `yourOrderPlease.js` - String sorting by numbers

### 🧠 NeetCode (10+ Problems)

Curated problems following the NeetCode learning path for systematic interview preparation.

**Core Problems:**

- `twoSum.js` - Two Sum implementation
- `validAnagram.js` - Anagram validation
- `longestCommonPrefix.js` - Common prefix finding
- `isSubsequence.js` - Subsequence validation
- `duplicateInteger.js` - Duplicate detection
- `sumOfTwoNumbers.js` - Basic arithmetic
- `concatenationOfArray.js` - Array concatenation
- `lengthOfLastWord.js` - String processing
- `replaceElementsWithGreatest.js` - Array transformation
- `mySum.js` - Custom sum implementation

## 🧪 Testing

Each problem category includes comprehensive test suites:

```bash
# Run specific test suites
npm test algoExpert/
npm test leetcode/
npm test codewars/
npm test neetcode/
```

Test files follow the naming convention: `[problemName].test.js`

## 📈 Complexity Analysis

Most solutions include detailed complexity analysis:

- **Time Complexity**: O(n), O(n log n), O(n²), etc.
- **Space Complexity**: O(1), O(n), O(log n), etc.
- **Approach**: Brute force, optimized, multiple solutions

## 🎯 Learning Path

### For Beginners:

1. Start with **NeetCode** problems
2. Move to **CodeWars** for practical skills
3. Progress to **LeetCode Easy** problems
4. Advance to **AlgoExpert** fundamentals

### For Intermediate:

1. Focus on **LeetCode Medium** problems
2. Practice **AlgoExpert** advanced problems
3. Master **CodeWars** optimization challenges

### For Advanced:

1. Tackle **LeetCode Hard** problems
2. Implement complex **AlgoExpert** algorithms
3. Focus on system design and optimization

## 🔧 Development Tools

- **Testing**: Jest with coverage reporting
- **Linting**: ESLint (if configured)
- **Version Control**: Git with organized commits
- **Documentation**: Comprehensive README and inline comments

## 📝 Notes

- Each solution includes multiple approaches when applicable
- Comments explain the thought process and optimization techniques
- Test cases cover edge cases and typical scenarios
- Solutions are optimized for both readability and performance

## 🤝 Contributing

This is a personal practice repository, but suggestions and improvements are welcome!

## 📄 License

This project is licensed under the ISC License.

---

**Happy Coding! 🚀**

_Keep practicing, keep learning, and ace those technical interviews!_
