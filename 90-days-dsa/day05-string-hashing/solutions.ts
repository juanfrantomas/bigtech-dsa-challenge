// day05-string-hashing/solutions.ts
//////////////////////
// Find the Index of the First Occurrence in a String
// url: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
// time: 34m
//////////////////////

export function strStr(haystack: string, needle: string): number {
  if (needle.length > haystack.length) return -1;
  let position = -1;
  let posn = 0;
  let inside = false;

  for (let l = 0; l < haystack.length; l++) {
    if (posn === needle.length) {
        break;
    }
    if (needle[posn]! === haystack[l]) {
      if (posn === 0) {
        position = l;
        inside = true;
      }
      posn++;
    } else {
      if (inside) {
        l = position;
      }
      inside = false;
      position = -1;
      posn = 0;
    }
  }

  if (inside === true && posn <= needle.length - 1) {
    position = -1;
  }


  return position;
};
//////////////////////
// Repeated Substring Pattern
// url: https://leetcode.com/problems/repeated-substring-pattern/description/
// time: 
//////////////////////

export function repeatedSubstringPattern(s: string): boolean {
  // TODO: implement
  return false;
}
