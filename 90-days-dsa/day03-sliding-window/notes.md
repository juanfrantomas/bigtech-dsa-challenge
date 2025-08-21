# DAY 03 SLIDING WINDOW

## 📘 Concept

The **Sliding Window** technique is used when dealing with **contiguous subarrays/substrings** in arrays or strings.
Instead of recalculating from scratch every time, you “slide” a window (interval `[l, r]`) across the input while updating state efficiently.

**When to use:**

* Maximum / minimum / average of subarrays.
* Count of distinct elements in substring.
* Longest substring/sequence with some property.

**Two types:**

1. **Fixed-size window** — subarray length is given (e.g., "max sum of k elements").
2. **Variable-size window** — expand/shrink dynamically based on constraints (e.g., "longest substring without repeating characters").

---

## ⏱️ Complexity

* **Time:** O(n) (each element enters and leaves window at most once).
* **Space:** O(1) or O(k), depending on data structure used (like a hashmap or set).

---

## Reflections
It's important keep the data of window and work with the data on the sides of the window. `findMaxAverage() solutions.ts:28`