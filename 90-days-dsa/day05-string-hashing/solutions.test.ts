// day05-string-hashing/solutions.test.ts
import { describe, expect, it } from "bun:test";
import { strStr } from "./solutions";
describe("Find the Index of the First Occurrence in a String", () => {
  it('haystack = "sadbutsad", needle = "sad" should return 0', () => {
    expect(strStr('sadbutsad', 'sad')).toBe(0);
  });

  it('haystack = "leetcode", needle = "leeto" should return -1', () => {
    expect(strStr('leetcode', 'leeto')).toBe(-1);
  });
  it('haystack = "aaa", needle = "aaaa" should return -1', () => {
    expect(strStr('aaa', 'aaaa')).toBe(-1);
  });
  it('haystack = "mississippi", needle = "issip" should return 4', () => {
    expect(strStr('mississippi', 'issip')).toBe(4);
  });
  it('haystack = "mississippi", needle = "issipi" should return -1', () => {
    expect(strStr('mississippi', 'issipi')).toBe(-1);
  });
  it('haystack = "mississippi", needle = "pi" should return 9', () => {
    expect(strStr('mississippi', 'pi')).toBe(9);
  });

})


