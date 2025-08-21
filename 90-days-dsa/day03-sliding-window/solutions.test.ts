// day03-sliding-window/solutions.test.ts
import { describe, expect, it } from "bun:test";
import { findMaxAverage } from "./solutions";

describe("Maximum Average Subarray I", () => {
  it.skip("nums = [1,12,-5,-6,50,3], k = 4 should return 12.75000", () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toEqual(12.75000);
  });

  it.skip("nums = [5], k = 1 should return 5.00000", () => {
    expect(findMaxAverage([5], 1)).toEqual(5.00000);

  });
  it.skip("nums = [0,1,1,3,3], k = 4 should return 2.00000", () => {
    expect(findMaxAverage([0,1,1,3,3], 4)).toEqual(2.00000);

  });
})


