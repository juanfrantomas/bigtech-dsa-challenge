// day04-strings-palidrome-anagram/examples.ts
// Bun + TypeScript playground for today's concept

export function isPalindrome(s: string): boolean {
  let l: number = 0, r: number = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) return false
    l++, r--;
  }
  return true;
}

export function isSimplePalindrome(s: string): boolean {
  return s === s.split("").reverse().join("");
}


// Anagram check (HashMap)
export function isAnagram(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;

  const count: Record<string, number> = {};
  
  for(const c of s1) count[c] = (count[c]! || 0) + 1;
  for (const c2 of s2) {
    if (!count[c2]) return false;
    count[c2]--;
  }


  return true;
}

export function areAnagrams(a: string, b: string): boolean {
  return a.split("").sort().join("") === b.split("").sort().join("");
}


// Run locally
if (import.meta.main) {
  console.log("Running examples for day04-strings-palidrome-anagram...");
  console.log(isPalindrome("abba"));
  console.log(isPalindrome("abca"));
  console.log(isAnagram("listen", "silent"));
  console.log(isAnagram("rat", "car"));

}
