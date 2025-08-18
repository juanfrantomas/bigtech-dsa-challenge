// index.ts
// Run with: bun run index.ts

import { mkdir, writeFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const ROOT_DIR = process.cwd();
const BASE_DIR = path.join(ROOT_DIR, "90-days-dsa");

const WELCOME = `
-----------------------------------------------
👋 Hi and welcome to the 90-day DSA challenge!
-----------------------------------------------
`;

const TIPS = `👉 Example: day02-two-pointers, day03-sliding-window, etc.
`;

function isValidSlug(slug: string): boolean {
  // Expect pattern like: dayXX-topic-words
  // - starts with "day"
  // - two digits
  // - dash and at least one word character
  return /^day\d{2}-[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(slug.trim());
}

async function pathExists(p: string): Promise<boolean> {
  try {
    await access(p, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

function makeNotesTemplate(slug: string): string {
  return `# ${slug.replace(/-/g, " ").replace(/^day(\d{2})/, "Day $1").toUpperCase()}

## Concept
- What is it?
- Why it matters?
- Time & Space Complexity (Big-O)

## Key Patterns
- …

## Pseudocode
\`\`\`txt
// outline your approach(s) here
\`\`\`

## TypeScript Tips
- …

## Reflections
- What I learned:
- What confused me:
- What to review tomorrow:
`;
}

function makeExamplesTemplate(slug: string): string {
  return `// ${slug}/examples.ts
// Bun + TypeScript playground for today's concept

// Example: basic pattern demo
export function demo() {
  const arr: number[] = [2, 5, 7, 10];
  // Access O(1)
  console.log("arr[2] =", arr[2]);
}

// Run locally
if (import.meta.main) {
  console.log("Running examples for ${slug}...");
  demo();
}
`;
}

function makeSolutionsTemplate(slug: string): string {
  return `// ${slug}/solutions.ts
// Place your LeetCode solutions for the day here.
// Tip: export each solution as a function and include a small test.
//////////////////////
// Problem 1
//////////////////////

export function solutionOne(/* params */) {
  // TODO: implement
  return null;
}

//////////////////////
// Problem 2
//////////////////////

export function solutionTwo(/* params */) {
  // TODO: implement
  return null;
}
`;
}

function makeTestsTemplate(slug: string): string {
  return `// ${slug}/solutions.test.ts
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


`;
}

async function ensureBaseDir() {
  if (!(await pathExists(BASE_DIR))) {
    await mkdir(BASE_DIR, { recursive: true });
  }
}

async function createDayScaffold(slug: string) {
  await ensureBaseDir();

  const dayDir = path.join(BASE_DIR, slug);
  if (await pathExists(dayDir)) {
    throw new Error(
      `The folder already exists: ${path.relative(ROOT_DIR, dayDir)}`
    );
  }

  await mkdir(dayDir, { recursive: true });

  const files = [
    { name: "notes.md", content: makeNotesTemplate(slug) },
    { name: "examples.ts", content: makeExamplesTemplate(slug) },
    { name: "solutions.ts", content: makeSolutionsTemplate(slug) },
    { name: "solutions.test.ts", content: makeTestsTemplate(slug) },
  ];

  await Promise.all(
    files.map((f) => writeFile(path.join(dayDir, f.name), f.content, "utf8"))
  );

  return dayDir;
}

async function main() {
  console.log(WELCOME);
  console.log("Which day will you study today? (suggested format: dayXX-topic)\n");
  console.log(TIPS);

  const rl = readline.createInterface({ input, output });

  try {
    const answer = (await rl.question("➡  Enter day slug (e.g., day02-two-pointers): ")).trim();

    if (!isValidSlug(answer)) {
      console.error(
        `\n❌ Invalid slug "${answer}". Expected pattern like "day02-two-pointers".`
      );
      console.error("Try again with: dayNN-some-topic (NN = two digits).\n");
      return;
    }

    console.log(`\nCreating scaffold for: ${answer} …`);
    const dayDir = await createDayScaffold(answer);

    console.log("\n✅ Done!");
    console.log(`📂 Created: ${path.relative(ROOT_DIR, dayDir)}`);
    console.log("📝 Files:");
    console.log(`   - notes.md`);
    console.log(`   - examples.ts`);
    console.log(`   - solutions.ts\n`);

    console.log("Tip: commit your progress:");
    console.log(`   git add ${path.relative(ROOT_DIR, dayDir)} && git commit -m "chore: add ${answer} scaffold"\n`);
  } catch (err: any) {
    console.error(`\n❌ Error: ${err?.message ?? err}`);
  } finally {
    rl.close();
  }
}

main();
