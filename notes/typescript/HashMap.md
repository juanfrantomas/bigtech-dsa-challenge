## 🔹 What is a Hash Map?

A **hash map** (also called a **hash table** or **dictionary** in Python) is a **data structure** that stores information in **key–value pairs**:

* **Key** → a unique identifier (like a name, ID, or email).
* **Value** → the data associated with that key.

👉 The key is passed through a **hash function**, which turns it into an **index (a number)** that points to a slot inside an internal array.
That’s why we can find values **very quickly** (average time: **O(1)**).

## 🔹 Advantages

* **Fast lookups**: finding a value by key is usually **O(1)**.
* **Fast insertions and deletions**.
* Very useful for **counters, indexes, databases in memory**, etc.

---

## 🔹 Drawbacks

1. **Collisions**

   * Two different keys might generate the same index.
   * Solutions: *chaining* (linked lists inside a bucket) or *open addressing*.

2. **Order**

   * Traditionally, hash maps don’t keep order.

👉 In short:
A **hash map** is like a set of **numbered drawers**.

* You use a **key** (like `"Alice"`)
* The **hash function** decides *which drawer* it goes into.
* You can open that drawer and instantly find the value (like her age `20`).

Perfect 👌 Let’s go through **hash maps in TypeScript** using `Map` and plain objects `{}`.

# Examples with Typescript

## 🔹 1. Using a plain object (`{}`)

In TypeScript (and JavaScript), the simplest hash map is just an object:

```ts
// A hash map of students and their ages
const students: { [key: string]: number } = {
  "Alice": 20,
  "Bob": 22,
  "Charlie": 19
};

// Access a value
console.log(students["Alice"]); // 20

// Insert a new pair
students["Diana"] = 21;

// Delete a pair
delete students["Bob"];

// Check if a key exists
console.log("Charlie" in students); // true
```

Here:

* The **keys** are strings (`"Alice"`, `"Bob"`, …).
* The **values** are numbers (ages).
* Lookups, insertions, deletions are on average **O(1)**.

---

## 🔹 2. Using `Map<K, V>`

TypeScript also has the built-in **`Map` class**, which is more powerful than plain objects because keys can be *any type* (not just strings).

```ts
// A Map of students and their ages
const students = new Map<string, number>();

// Insert
students.set("Alice", 20);
students.set("Bob", 22);
students.set("Charlie", 19);

// Access
console.log(students.get("Alice")); // 20

// Delete
students.delete("Bob");

// Check existence
console.log(students.has("Charlie")); // true
```

---

## 🔹 Real Example: Word Counter

Let’s use a hash map (`Map`) to count word frequencies, like in an anagram problem:

```ts
function countWords(text: string): Map<string, number> {
  const counter = new Map<string, number>();
  const words = text.split(" ");

  for (const word of words) {
    counter.set(word, (counter.get(word) || 0) + 1);
  }

  return counter;
}

const text = "apple orange apple banana orange apple";
const counter = countWords(text);

console.log(counter); 
// Map(3) { 'apple' => 3, 'orange' => 2, 'banana' => 1 }
```

---

✅ In summary:

* Use **plain objects `{}`** for simple string → value maps.
* Use **`Map<K, V>`** when you need more flexibility (any type of key, ordered iteration).