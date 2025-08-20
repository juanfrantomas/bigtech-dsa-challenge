// day02-two-pointers/solutions.test.ts
import { describe, expect, it } from "bun:test";
import { threeSum, validPalindrome } from "./solutions";

describe('3Sum return nums[i] + nums[j] + nums[k] == 0', () => {
  it("[-1,0,1,2,-1,-4] should is [[-1,-1,2],[-1,0,1]]", ()=> {
    expect(threeSum([-1,0,1,2,-1,-4])).toEqual([[-1,-1,2],[-1,0,1]])
  })
  it("[0,1,1] should is []", ()=> {
    expect(threeSum([0,1,1])).toEqual([]);
  })
  it("[0,0,0,0] should is [[0,0,0]]", ()=> {
    expect(threeSum([0,0,0,0])).toEqual([[0,0,0]]);
  })
  it("[-1,0,1,0] should is [[-1,0,1]]", ()=> {
    expect(threeSum([-1,0,1,0])).toEqual([[-1,0,1]]);
  })
  it("[1,-1,-1,0] should is [[-1,0,1]]", ()=> {
    expect(threeSum([1,-1,-1,0])).toEqual([[-1,0,1]]);
  })
});
describe("Valid Palindrome", () => {
  it.skip("'A man, a plan, a canal: Panama' is true", () => {
    expect(validPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it.skip("'race a car' is false", () => {
    expect(validPalindrome('race a car')).toBe(false);
  });
})


