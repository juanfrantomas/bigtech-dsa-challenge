# 🧠 90 Days of Data Structures & Algorithms (DSA)

Welcome to my **90-day DSA learning journey**!  
The goal of this repository is to **master core data structures and algorithms** for:
- Competitive programming
- Technical interviews (Big Tech level)
- Becoming a stronger Software Engineer

I will be studying **one DSA concept per day** (sometimes two days for harder topics).  
Each day includes:
1. **Concept explanation** (in English).
2. **Examples + TypeScript (Bun) implementation**.
3. **2 related LeetCode problems (free)**.
4. **Notes and reflections**.

---

## 📅 Study Plan Overview

The roadmap is divided into **13 thematic weeks (90 days total)**:

### Week 1 – Fundamentals
- Arrays (basics, two pointers, sliding window)
- Strings (palindrome, anagram, hashing)
- Linked Lists (singly, doubly, fast/slow pointer)

### Week 2 – Stacks, Queues, Hashing
- Stack, Queue
- Monotonic stack/queue
- Hash Table, Set, Map
- Recursion & Backtracking

### Week 3 – Sorting & Binary Search
- Sorting algorithms (merge, quick, heap, counting)
- Binary search (classic + on answer)

### Week 4 – Trees
- Binary Trees (traversals)
- BST (insert, delete, LCA)
- Heap / Priority Queue

### Week 5–6 – Graphs
- DFS, BFS, connected components, topological sort
- Dijkstra, Bellman-Ford, Floyd-Warshall
- Minimum Spanning Trees (Kruskal, Prim)
- Union-Find (DSU)

### Week 7–9 – Dynamic Programming & Greedy
- 1D/2D DP (fibonacci, climbing stairs, knapsack, coin change)
- DP on strings (LCS, edit distance, palindrome problems)
- Greedy algorithms (interval scheduling, Huffman coding)

### Week 10 – Segment Trees & Fenwick Tree
- Segment tree (range queries, lazy propagation)
- Binary Indexed Tree (Fenwick Tree)

### Week 11 – Tries & String Algorithms
- Trie (prefix tree, autocomplete)
- KMP, Rabin-Karp
- Z-function, prefix-function

### Week 12 – Advanced Graphs & Flow
- Strongly Connected Components (Kosaraju, Tarjan)
- Bridges & articulation points
- Network Flow (Ford-Fulkerson, Edmonds-Karp, Dinic)

### Week 13 – Math & Final Review
- GCD, LCM, extended Euclidean algorithm
- Modular arithmetic, modular inverse
- Sieve of Eratosthenes
- Combinatorics (nCr, Pascal’s triangle)
- Mixed problem review

---

## 📂 Repository Structure

```

📦 90-days-dsa
┣ 📂 day01-arrays-basics
┃ ┣ 📜 notes.md         # My explanations and notes
┃ ┣ 📜 examples.ts      # Bun + TypeScript implementations
┃ ┗ 📜 solutions.ts     # LeetCode problem solutions
┣ 📂 day02-two-pointers
┃ ┣ 📜 notes.md
┃ ┣ 📜 examples.ts
┃ ┗ 📜 solutions.ts
┣ 📂 ...
┣ 📜 README.md          # This file

```

---

## ✅ Daily Routine

1. **Scaffold the day** 🏗️

	```bash
	bun run index.ts
	```

	→ enter the slug, e.g. `day02-two-pointers`

2. **Study the concept of the day** 📚

	- Write a short summary in `notes.md`.
	- Try small snippets in `examples.ts` and debug them in VS Code by pressing **F5**, using **breakpoints** and the **Debug Console**.

3. **Open the LeetCode problems** 🔑

	- In `solutions.ts`, **export** the function signature that LeetCode specifies.
	- In `solutions.test.ts`, **prepare** the matching `expect` and `test` cases for that exercise.

4. **Run the test file under the debugger**

	- Press **F5** to run `solutions.test.ts`.
	- Make sure you have the **Bun for Visual Studio Code** extension installed and a `.vscode/launch.json` configured so F5 runs the file in watch mode and shows output in the Debug Console.
	- Set **breakpoints** inside `solutions.ts` and step through the code while tests run — highly recommended for diagnosing logic bugs and verifying checkpoints. 🧭🔍

5. **Start the LeetCode timer** ⏱️

	- Hit the timer and begin reading/solving the exercise.

6. **Commit progress** 💾

	```bash
	git add 90-days-dsa/dayXX-topic
	git commit -m "Day XX – Topic"
	```

---

## 🏆 Progress Tracker

| Day | Topic | Problems Solved |
|-----|-------|-----------------|
| 1   | Arrays (basics) | Two Sum, Remove Duplicates from Sorted Array |
| 2   | Two Pointers    | Move Zeroes, Container With Most Water |
| 3   | Sliding Window  | Maximum Average Subarray I, Longest Substring Without Repeating Characters |
| ... | ...             | ... |
---
You can follow the progress in `progress_tracker_table.md`

## ⚙️ Tech Stack

- **Language:** TypeScript  
- **Runtime:** [Bun](https://bun.sh)  
- **Problems:** [LeetCode](https://leetcode.com)  

---

## 🎯 Goal

By the end of this journey, I will:  
- Have implemented **90+ DSA concepts** in TypeScript.  
- Solved **180+ LeetCode problems**.  
- Be prepared for **Big Tech interviews** and **competitive programming contests**.  

---

⭐ Feel free to follow my journey or fork this repo, and use the `start-challenge` branch if you want to take on the challenge too!