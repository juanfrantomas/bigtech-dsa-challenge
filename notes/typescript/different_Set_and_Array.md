### 🔹 `Array ([])`

* An **ordered list of elements**.
* **Allows duplicates**.
* Each element has an **index (position)**.
* Great when you need **ordering** or **access by position**.

📌 Example:

```ts
const numbers: number[] = [1, 2, 3, 3, 4];
console.log(numbers[2]); // 3 (index 2)
console.log(numbers.length); // 5
```

---

### 🔹 `Set`

* A **collection of unique values** (no duplicates allowed).
* **No indexes**, you iterate over it.
* Preserves **insertion order**, but you can’t access by position.
* Great when you need **uniqueness** and **fast checks**.

📌 Example:

```ts
const numbers = new Set<number>();
numbers.add(1);
numbers.add(2);
numbers.add(2); // ignored (already exists)
console.log(numbers.size); // 2
console.log(numbers.has(1)); // true
```

---

### ⚖️ Quick Comparison

| Feature           | `Array []`                | `Set`                           |
| ----------------- | ------------------------- | ------------------------------- |
| Allows duplicates | ✅ Yes                     | ❌ No                            |
| Indexed access    | ✅ Yes                     | ❌ No                            |
| Keeps order       | ✅ Yes                     | ✅ Yes (insertion order)         |
| Useful methods    | `map`, `filter`, `reduce` | `add`, `delete`, `has`, `clear` |
| Best for          | Ordered lists, duplicates | Unique collections              |

---

### 🔄 Converting Between `Array` and `Set`

**Array → Set (remove duplicates):**

```ts
const arr = [1, 2, 2, 3, 4];
const set = new Set(arr);
console.log(set); // Set { 1, 2, 3, 4 }
```

**Set → Array:**

```ts
const set = new Set([1, 2, 3]);
const arr = Array.from(set);
// or: const arr = [...set];
console.log(arr); // [1, 2, 3]
```

---

👉 So, use **Array** when you care about **order & duplicates**,
and **Set** when you care about **uniqueness** and quick lookups.