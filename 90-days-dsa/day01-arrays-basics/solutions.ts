export function twoSum(nums: number[], target: number): number[] {
  for (let index = 0; index < nums.length; index++) {
    for (let j = 0; j < nums.length; j++) {
      if (j != index && (nums[j]! + nums[index]! === target)) {
        return [index, j];
      }
    }
  }
  return [];
};

export function removeDuplicates(nums: number[]): number {
  let saveIndex: number = 0;
  for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
    if (nums[saveIndex] != nums[currentIndex]) {
      saveIndex++;
      nums[saveIndex] = nums[currentIndex]!;
    }
  }
  return saveIndex+1;
}