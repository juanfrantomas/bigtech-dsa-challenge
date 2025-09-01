// day05-string-hashing/solutions.test.ts
import { describe, expect, it } from "bun:test";
import { repeatedSubstringPattern, strStr } from "./solutions";
describe("Find the Index of the First Occurrence in a String", () => {
  it.skip('haystack = "sadbutsad", needle = "sad" should return 0', () => {
    expect(strStr('sadbutsad', 'sad')).toBe(0);
  });

  it.skip('haystack = "leetcode", needle = "leeto" should return -1', () => {
    expect(strStr('leetcode', 'leeto')).toBe(-1);
  });
  it.skip('haystack = "aaa", needle = "aaaa" should return -1', () => {
    expect(strStr('aaa', 'aaaa')).toBe(-1);
  });
  it.skip('haystack = "mississippi", needle = "issip" should return 4', () => {
    expect(strStr('mississippi', 'issip')).toBe(4);
  });
  it.skip('haystack = "mississippi", needle = "issipi" should return -1', () => {
    expect(strStr('mississippi', 'issipi')).toBe(-1);
  });
  it.skip('haystack = "mississippi", needle = "pi" should return 9', () => {
    expect(strStr('mississippi', 'pi')).toBe(9);
  });
  it.skip('abab should return true', () => {
    expect(repeatedSubstringPattern('abab')).toBe(true);
  });
  it.skip('aba should return false', () => {
    expect(repeatedSubstringPattern('aba')).toBe(false);
  });
  it.skip('abcabcabcabc should return true', () => {
    expect(repeatedSubstringPattern('abcabcabcabc')).toBe(true);
  });
  it.skip('abcdab should return false', () => {
    expect(repeatedSubstringPattern('abcdab')).toBe(false);
  });
  it.skip('ababab should return true', () => {
    expect(repeatedSubstringPattern('ababab')).toBe(true);
  });
  it('zzz should return true', () => {
    expect(repeatedSubstringPattern('zzz')).toBe(true);
  });
  
})


