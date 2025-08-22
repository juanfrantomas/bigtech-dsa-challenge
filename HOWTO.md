# ⚡ Setup Guide – Bun + 90 Days of DSA

This document explains how to set up **Bun**, run your code, and use the `index.ts` helper script in this repository.

---

## 📦 1. Install Bun

Bun is a fast all-in-one JavaScript runtime, package manager, and bundler.

### macOS / Linux
Run in your terminal:
```bash
curl -fsSL https://bun.sh/install | bash
````

Then restart your terminal and check the version:

```bash
bun --version
```

### Windows

Install via [Bun’s official guide](https://bun.sh).

---

## ▶️ 2. Run TypeScript Files with Bun

You can run `.ts` files directly without compiling:

```bash
bun run file.ts
```

Example:

```bash
bun run 90-days-dsa/day01-arrays-basics/examples.ts
```

---

## 🛠️ 3. Using `index.ts`

The file `index.ts` is a **helper script** to scaffold your daily progress.

Run it with:

```bash
bun run index.ts
```
or 
```bash
npm run newday
```

You will see:

```
-----------------------------------------------
👋 Hi and welcome to the 90-day DSA challenge!
-----------------------------------------------

👉 Example: day02-two-pointers, day03-sliding-window, etc.

➡  Enter day slug (e.g., day02-two-pointers):
```

---

## 📂 4. What `index.ts` Does

When you enter a valid day slug:

1. Creates a new folder inside `90-days-dsa/` (e.g., `90-days-dsa/day02-two-pointers`).
2. Inside the folder, it generates 3 files:

   * `notes.md` → space for your explanations and theory.
   * `examples.ts` → small TypeScript demos of the DSA concept.
   * `solutions.ts` → your LeetCode solutions for the day.
   * `solutions.test.ts` → your LeetCode solution tests for the day.
  
3. Prevents overwriting if the folder already exists.
4. Prints a confirmation message and a **git command hint** to commit progress.

---

## 🧪 5. Running Tests in `solutions.ts`

Each `solutions.ts` file includes placeholders for your **LeetCode solutions**.
You can also add **quick smoke tests** to check correctness locally with Bun.

Example (`solutions.ts`):

```ts
// Problem 1 – Two Sum
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
}

// Quick test
if (import.meta.main) {
  console.log("Running local tests...");

  console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
  console.log(twoSum([3, 2, 4], 6));       // [1, 2]
}
```
Run it once:

```bash
bun run 90-days-dsa/day01-arrays-basics/solutions.ts
```

---

## 👀 6. Using Bun Watcher

Bun has a built-in watcher.
This automatically re-runs your code whenever you save changes.

Run with:

```bash
bun --watch run 90-days-dsa/day01-arrays-basics/solutions.ts
```

Now every time you edit `solutions.ts`, Bun will re-run it instantly. 🚀

You can also set up a script in `package.json`:

```json
{
  "scripts": {
    "start": "bun run index.ts",
    "watch:day1": "bun --watch run 90-days-dsa/day01-arrays-basics/solutions.ts"
  }
}
```

Then run:

```bash
bun run watch:day1
```

---

## 🧩 7. VS Code Integration with Bun

To get the most out of this setup, make sure to configure **Visual Studio Code** for Bun.

1. **Install the Extension**
   → Get **[Bun for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=oven.bun-vscode)** from the Marketplace.

2. **Debugging with `launch.json`**

   * Open any `*.test.ts` file and press **F5** to run it in the **Debug Console**.
   * Set **breakpoints** in `solutions.ts` (or any other file) and step through your code while tests run.

3. **Why It Matters**
   This makes it easy to:

   * Catch and fix **logic errors** early.
   * Inspect variables and execution flow.
   * Validate your solutions against checkpoints more reliably. 🧭🔍

---

## ✅ My Daily Workflow

1. **Scaffold the day 🏗️**

   ```bash
   bun run newday
   ```

   → enter the slug, e.g. `day02-two-pointers`

2. **Study the concept of the day 📚**

   * Write a short summary in `notes.md`.
   * Try small snippets in `examples.ts`.
     Debug them in VS Code by pressing **F5 ▶️**, using **breakpoints 🎯** and the **Debug Console 🖥️** to understand what’s happening.

3. **Open the LeetCode problem 🔑**

   * In `solutions.ts`, **export** the function signature that LeetCode specifies.
   * In `solutions.test.ts` 🧪, **prepare** the matching `expect` and `it` cases for that exercise.

4. **Run the test file under the debugger**

   * Press **F5 ▶️** to run `solutions.test.ts`.
   * Install the **Bun for Visual Studio Code** extension if you haven't yet (see the integration section above).
   * Ensure you have a `.vscode/launch.json` configured (in this file includes the recommended Bun `launch.json`). This makes F5 run the current file in watch mode and shows output in the Debug Console.
   * While the tests run, set **breakpoints** inside `solutions.ts` and step through the code — highly recommended for diagnosing logic errors and verifying checkpoints. 🧭🔍

5. **Start the LeetCode timer ⏱️**

   * Hit the timer and begin reading/solving the exercise.

6. **Commit progress 💾**

   ```bash
   git add 90-days-dsa/day02-two-pointers
   git commit -m "Day 02 – Two Pointers"
   ```

---
## ⚠️ Mandatory - Disable GitHub Copilot ⚠️

To prevent automatic suggestions from interfering with your examples and solutions, please disable GitHub Copilot before using the challenge files: 
1. Open the Command Palette with **Ctrl+Shift+P**
2. Type **"Toggle Completions"**
3. Run the command to turn completions off. 🔌

___

🎯 With this setup, each day of your 90-day challenge will have its **own folder, notes, examples, solutions, and automatic re-run watcher** — fully organized and ready to share on GitHub.