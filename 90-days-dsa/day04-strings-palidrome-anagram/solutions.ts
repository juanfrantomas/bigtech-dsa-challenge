// day04-strings-palidrome-anagram/solutions.ts
// Place your LeetCode solutions for the day here.
// Tip: export each solution as a function and include a small test.
//////////////////////
// Valid Palindrome
// url: https://leetcode.com/problems/valid-palindrome/
// time: 2m
//////////////////////

export function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    return s === s.split("").reverse().join("");
};

//////////////////////
// Valid Anagram
// url: https://leetcode.com/problems/valid-anagram/
// time: 5m
//////////////////////

export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const count: Record<string, number> = {};
  
  for(const c of s) count[c] = (count[c]! || 0) + 1;
  for (const c2 of t) {
    if (!count[c2]) return false;
    count[c2]--;
  }


  return true;
}