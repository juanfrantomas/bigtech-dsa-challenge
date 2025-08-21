// day03-sliding-window/examples.ts

// Example 1: Fixed-size window
// Max sum of subarray of length k
export function maxSumFixedWindow(nums: number[], k: number) {
  let windowSum = 0;
  let maxSum = -Infinity;

  // first window
  for (let i = 0; i < k; i++) {
    windowSum += nums[i]!;
  }
  maxSum = windowSum;

  // slide the window
  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i]! - nums[i - k]!;
    maxSum = Math.max(maxSum, windowSum);
  }


  return maxSum;
}

// Example: Variable-size window
// Longest substring without repeating characters
export function longestUniqueSubstring(s: string): number {
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

// Run locally
if (import.meta.main) {
  console.log("Running examples for day03-sliding-window...");
  console.log("Fixed-size (max sum of k):");
  console.log(maxSumFixedWindow([1, 12, -5, -6, 50, 3], 4)); // 51

  console.log("Variable-size (longest unique substring):");
  console.log(longestUniqueSubstring("abcabcbb")); // 3 ("abc")
  console.log(longestUniqueSubstring("bbbbb"));    // 1 ("b")
}
