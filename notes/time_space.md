### What does **Complexity: O(n) time, O(1) space** mean?

* **O(n) time** → The algorithm’s running time grows linearly with the size of the input `n`.

  * Example: If you double the size of the list, the runtime roughly doubles.

* **O(1) space** → The algorithm only uses a constant amount of extra memory, regardless of input size.

  * Example: Even if the list has millions of elements, the algorithm only keeps a few variables in memory.

📌 Example: summing all elements in an array

```python
def sum_array(arr):
    total = 0
    for x in arr:
        total += x
    return total
```

* Time: goes through all elements once → **O(n)**.
* Space: only stores `total` → **O(1)**.

---

### Common Big-O Complexities (Table)

| Complexity     | Time Example                             | Space Example                          | Description                               |
| -------------- | ---------------------------------------- | -------------------------------------- | ----------------------------------------- |
| **O(1)**       | Accessing an element in an array         | Using a fixed number of variables      | Constant → independent of input size      |
| **O(log n)**   | Binary search in a sorted array          | Recursion stack in binary search       | Grows very slowly as input increases      |
| **O(n)**       | Looping through an array                 | Storing a few counters                 | Linear growth with input size             |
| **O(n log n)** | Merge sort, quicksort (average case)     | Storing temporary arrays in merge sort | Efficient sorting                         |
| **O(n²)**      | Nested loops (e.g., comparing all pairs) | 2D array storage                       | Quadratic growth → much slower            |
| **O(2ⁿ)**      | Recursive Fibonacci                      | Large recursion tree                   | Exponential growth → impractical          |
| **O(n!)**      | Traveling Salesman brute force           | Storing all permutations               | Factorial growth → impossible for large n |