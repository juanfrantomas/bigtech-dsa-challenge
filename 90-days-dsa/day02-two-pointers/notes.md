# DAY 02 TWO POINTERS

## Concept
**Two pointers** is a pattern where you keep **two indices** that move through a sequence (or two sequences) to solve problems efficiently—often in **O(n)** instead of O(n²).
Common setups:

* **Opposite ends** (left/right) on sorted arrays to find a target.
* **Same direction** (fast/slow) to compact, partition, or skip duplicates.
* **Meet-in-the-middle** variants for palindrome checks, etc.

**When to use:** array or string problems that mention *sorted*, *pairs/sum*, *remove/skip*, *window-like movement*, or *palindrome*.

**Complexities:**

* Time: typically **O(n)**
* Space: **O(1)** (in-place)

## Core patterns

1. **Opposite Ends (sorted arrays)**

   * Move `l` and `r` inward based on a condition (e.g., sum too small → `l++`, too big → `r--`).
2. **Same Direction (stable compaction)**

   * `slow` marks the place to write; `fast` scans. Great for removing elements or duplicates.
3. **Fast/Slow (Floyd’s)**

   * Detect cycles or find middle (`fast += 2`, `slow += 1`).

### 🔎 When to use opposite-ends vs same-direction

- **Opposite-ends (`left`/`right`)**
  - Use when the **array/string is sorted** or when moving inward makes the target **monotonic** (e.g., sum increases if you move `left++`, decreases if `right--`).
  - Typical tasks: **pair sum**, **closest pair**, **palindrome checks**, **Container With Most Water**.
  - Mental model: shrink the search space from both sides based on a comparison.

- **Same-direction (`slow`/`fast`)**
  - Use when you need **stable compaction** or **single pass transformation**.
  - Typical tasks: **remove/move elements** (e.g., move zeroes), **remove duplicates**, **partitioning**, **merge in-place**.
  - Mental model: `fast` scans; `slow` marks the next write position or valid boundary.

---

### 🧭 Why “sorted” matters for sum/pairs

- With a **sorted** array, the sum `nums[left] + nums[right]` is **orderable**:
  - If the sum is **too small**, increasing `left` **increases** the sum.
  - If the sum is **too big**, decreasing `right` **decreases** the sum.
- This monotonic behavior lets you **discard ranges** in O(1) per step, yielding an **O(n)** overall solution instead of trying all pairs (**O(n²)**).
- Without sorting, left/right moves do **not** guarantee monotonic change → you can’t safely prune; you’d need a hashmap or sort first.

---

### ⏱️ Complexity summary

- **Time:** typically **O(n)** (single pass; each pointer moves at most `n` steps).  
- **Space:** **O(1)** (in-place; only a few indices).
