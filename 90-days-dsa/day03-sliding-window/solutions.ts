// day03-sliding-window/solutions.ts
// Place your LeetCode solutions for the day here.
//////////////////////
// Maximum Average Subarray I
// url: https://leetcode.com/problems/maximum-average-subarray-i/description/
// time: 16m
//////////////////////

export function findMaxAverageBruteForce(nums: number[], k: number): number {
  let maxNum = -Infinity;

  for (let right = 0; right < nums.length; right++) {
    let left = right + k;

    if (left > nums.length && nums.length > 1) {
      continue;
    }
    let newMaxNum = 0;
    for (let j = right; j < left; j++) {
      newMaxNum += nums[j]!;
    }
    maxNum = Math.max(maxNum, newMaxNum / k);
  }

  return maxNum;
}

export function findMaxAverage(nums: number[], k: number): number {
  let sum = 0;
  for (let left = 0; left < k; left++) {
    sum += nums[left]!;
  }
  let maxSum = sum;
  for (let right = k; right < nums.length; right++) {
    // Slide the window and substrat the previous one from the window
    sum += nums[right]! - nums[right - k]!;
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum / k;
}

//////////////////////
// Longest Substring Without Repeating Characters
// url: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
// time: 22m
//////////////////////

export function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let seen = new Set<string>();
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    // shrink until contraint satisfied
    while (seen.has(s[right]!)) {
      seen.delete(s[left]!);
      left++;
    }

    // expand window
    seen.add(s[right]!);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

