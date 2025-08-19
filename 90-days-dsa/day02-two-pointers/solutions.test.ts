// day02-two-pointers/solutions.test.ts
import { describe, expect, it } from "bun:test";
import { removeDuplicates } from "./solutions";
describe("Remove Duplicates from Sorted Array", () => {
  it("[0,0,1,1,1,2,2,3,3,4] should return 5", () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
  });

  it("[1,1,2] should return 2", () => {
    const nums: number[] = [1, 1, 2];
    const expectedNums: number[] = [1, 2,];

    const k = removeDuplicates(nums);
    for (let index = 0; index < k; index++) {
      expect(nums[index]).toBe(expectedNums[index]!);
    }
  });
})


