// Opposite ends: pair sum in sorted array
export function twoSumSorted(nums: number[], target: number): [number, number] | null {
  let l = 0, r = nums.length - 1;

  while (l < r) {
    const sum = nums[l]! + nums[r]!;
    if (sum === target) return [l, r];
    if (sum < target) l++;
    else r--;
  }

  return null;
}

if (import.meta.main) {
  //  console.log(twoSumSorted([1, 2, 4, 6, 10], 8));  // [1,3]
  //  console.log(twoSumSorted([1, 3, 4, 4], 7)); // [1,3]
}

// Same direction: move zeroes (stable)
export function moveZeroes(nums: number[]): void {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      // Swap destructuring JS/TS more info in destructuring.md
      [nums[slow], nums[fast]] = [nums[fast]!, nums[slow]!];
      slow++;
    }
  }
}

/* if (import.meta.main) {
  const arr = [0, 1, 0, 3, 12];
  moveZeroes(arr);
  console.log(arr); // [1,3,12,0,0]
} */


// Opposite ends: container with most water
// This exercise: https://leetcode.com/problems/container-with-most-water/description/

export function maxArea(height: number[]): number {
  let l = 0, r = height.length - 1, best = 0;
  while ( l < r) {
    // Min value between the two points
    const minValue = Math.min(height[l]!, height[r]!);
    best = Math.max(best, minValue * (r - l));

    // move the smaller height to try to find a taller wall
    if (height[l]! < height[r]!) l++
    else r--;
  }

  return best;

}

if (import.meta.main) {
  console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
}