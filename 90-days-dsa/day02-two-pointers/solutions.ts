// day02-two-pointers/solutions.ts
// Place your LeetCode solutions for the day here.
// Tip: export each solution as a function and include a small test.
//////////////////////
// Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/description/
// time: 10 minuts
//////////////////////

export function validPalindrome(s: string): boolean {
  const cleanPhrase = s.trim().replace(/[^a-z0-9]/gi, "").toLowerCase();
  let l = 0, r = cleanPhrase.length - 1;

  while (l < r) {
    if (cleanPhrase[l] !== cleanPhrase[r]) return false;
    l++;
    r--;
  }
  return true;
}

//////////////////////
// 3Sum
// https://leetcode.com/problems/3sum/description/
// time: 1h
//////////////////////
export function threeSum(nums: number[]): number[][] {
  nums.sort((a,b) => a - b);
  const result: number[][] = [];

  for (let left = 0; left < nums.length; left++) {
    if (left > 0 && nums[left] === nums[left - 1]) {
      continue;
    }

    let fast = left + 1;
    let right = nums.length - 1;

    while (fast < right) {
      let total = nums[left]! + nums[fast]! + nums[right]!;

      if (total > 0) {
        right--;
      } else if (total < 0) {
        fast++;
      } else {
        result.push([nums[left]!, nums[fast]!, nums[right]!]);
        fast++;

        while (nums[fast] === nums[fast - 1] && fast < right) {
          fast++;
        }
      }
    }
  }
  return result;
}