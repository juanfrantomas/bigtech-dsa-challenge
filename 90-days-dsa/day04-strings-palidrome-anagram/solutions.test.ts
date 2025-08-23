// day04-strings-palidrome-anagram/solutions.test.ts
import { describe, expect, it } from "bun:test";
import { isAnagram, isPalindrome } from "./solutions";
describe("Valid Palindrome", () => {
  it("'A man, a plan, a canal: Panama' should return true", () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it("'race a car' should return false", () => {
    expect(isPalindrome('race a car')).toBe(false);
  });
})
describe("Valid Anagram", () => {
  it(' s = "anagram", t = "nagaram" should return true', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  it('s = "rat", t = "car" should return false', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });
})


