// day05-string-hashing/examples.ts
// Bun + TypeScript playground for today's concept

export function simpleHash(s: string): number {
  let hash = 0;
  const P = 31;
  const M = 1e9 + 7;
  for (let i = 0; i < s.length; i++) {
    hash = (hash * P + s.charCodeAt(i)) % M;
  }
  return hash;
}

if (import.meta.main) {
  console.log(simpleHash("abc")); // same input => same hash
  console.log(simpleHash("acb")); // different string => different hash
}
