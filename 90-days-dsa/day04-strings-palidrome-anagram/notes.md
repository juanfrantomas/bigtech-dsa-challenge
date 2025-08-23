# DAY 04 STRINGS PALIDROME ANAGRAM

## Concept
Strings are one of the most common data structures in coding interview.

1. Palindrome: A word / phrase that reads the same formwar and backward.
   1. Use two pointers (l,r) to compare characters.
   2. Complexity: O(n) time, o(1) space. (more info in `time_space.md`)
2. Anagram: Two strings are anagrams if they contain the same characters in the same frequency.
   1. Use a *Hash Map* or *array counter* (O(n) time)
   2. Sorting approach works too, but is *O(n log n)*

### Complexity
## Palindrome
* O(n) time: The algorithms running time grows linearly with the size of the input `n`.
* O(1) space: The algorithm only uses a constant amount of extra memory, regardless of input size.