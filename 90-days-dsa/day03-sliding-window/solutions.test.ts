// day03-sliding-window/solutions.test.ts
import { describe, expect, it } from "bun:test";
import { findMaxAverage, lengthOfLongestSubstring } from "./solutions";

describe("Longest Substring Without Repeating Characters", () => {
  it("'abcabcbb' should return 3", ()=>{
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  })
  it("'bbbbb' should return 1", ()=>{
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  })
  it("'pwwkew' should return 3", ()=>{
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  })
  it("'aab' should return 2", ()=>{
    expect(lengthOfLongestSubstring("aab")).toBe(2);
  })
  it("'dvdf' should return 3", ()=>{
    expect(lengthOfLongestSubstring("dvdf")).toBe(3);
  })
});

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


