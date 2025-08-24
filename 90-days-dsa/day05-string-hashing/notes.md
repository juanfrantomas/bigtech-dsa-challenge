# DAY 05 STRING HASHING

## Concept
String hashing is a way to convert a string into a numeric "fingerprint"
Instead of companing entire string(slow), we compare their hash values (fast);

## Common uses
* Detect if two string are equal in O(1) (after hashing)
* Substring search (Rabin-Karp)
* Detect repeat substrings
* Grouping (anagram, duplicates)

## Key Ideas
1. Polynomial Rolling Hash:

```bash
hash(s) = (s[0]*p^0 + s[1]*p^1 + ... + s[n-1]*p^(n-1)) mod M

p = 10
M = 97 (Always using large primes)

hash("abc") = (a * 10^0 + b * 10^1 + c * 10^2) mod 97
```
`mod` is the remainder of a division

2. Prefix Hashes
   1. Precompute prefix hashes to get any substrings hash in O(1)
3. Collision handling
   1. Different string may map to the same hash
   2. To reduce risk: use large prime M or double hashing

