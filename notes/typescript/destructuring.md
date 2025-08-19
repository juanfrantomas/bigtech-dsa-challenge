# 🔎 Destructuring in JavaScript / TypeScript

**Destructuring assignment** is a syntax that lets you **extract values** from arrays or **properties** from objects into distinct variables, in a concise way.

---

## 1. Array Destructuring

```ts
const arr = [10, 20, 30, 40];

const [a, b] = arr;          // a=10, b=20
const [, , c] = arr;         // skipping elements: c=30
const [head, ...tail] = arr; // head=10, tail=[20,30,40] (rest)
```

* **Swap values**:

```ts
let x = 1, y = 2;
[x, y] = [y, x]; // x=2, y=1
```

* **Default values** (applied only if value is `undefined`, not `null`):

```ts
const [p = 99, q = 0] = [undefined, null];
// p=99, q=null
```

* **Tuples in TypeScript**:

```ts
function getPoint(): [number, number] {
  return [3, 4];
}
const [xCoord, yCoord] = getPoint(); // typed as number, number
```

---

## 2. Object Destructuring

```ts
const user = { id: 7, name: 'Ada', role: 'admin' };

const { id, name } = user;          // id=7, name="Ada"
const { role: r } = user;           // rename: r="admin"
const { missing = 'N/A' } = user;   // default if undefined
const { id: userId, ...rest } = user; // rest={ name:"Ada", role:"admin" }
```

* **Nested destructuring**:

```ts
const data = { user: { profile: { email: 'a@b.com' } } };
const { user: { profile: { email } } } = data;
```

* **Computed property names**:

```ts
const key = 'name';
const { [key]: value } = user; // value="Ada"
```

* ⚠️ If the object on the right is `undefined` or `null`, it will throw:

```ts
// ❌ runtime error
const { a } = undefined as any;

// ✅ safe with fallback
const obj: { a?: number } | undefined = undefined;
const { a = 0 } = obj ?? {};
```

---

## 3. Assignment vs Declaration

When you already declared variables and want to assign from an object, wrap in parentheses:

```ts
let a, b;
({ a, b } = { a: 1, b: 2 }); // parentheses needed
```

(Not required with arrays.)

---

## 4. Function Parameters

* **Objects**:

```ts
type Options = { retries?: number; timeout: number };

function fetchWithRetry({ retries = 3, timeout }: Options) {
  // ...
}
```

* **Arrays/Tuples**:

```ts
function distance([x, y]: [number, number]) {
  return Math.hypot(x, y);
}
```

---

## 5. With Map/Set and Loops

```ts
const map = new Map<string, number>([['a', 1], ['b', 2]]);
for (const [k, v] of map) {
  // k='a', v=1 …
}
```

---

## 6. Key Differences & Gotchas

* **Default only triggers on `undefined`**, not `null`.
* **`...rest`** in objects only copies own enumerable properties.
* **Evaluation order matters** for defaults:

```ts
const { a = 1, b = a + 1 } = {}; // a=1, b=2
```

* **Non-null assertion (`!`)** is a TypeScript feature: tells the compiler “this isn’t null/undefined”. It doesn’t protect from runtime errors:

```ts
[nums[i], nums[j]] = [nums[j]!, nums[i]!];
```

If `nums[j]` is actually `undefined`, you’ll still crash.

---

## 7. Equivalents & Use Cases

* **Classic swap**:

```ts
const temp = nums[slow]!;
nums[slow] = nums[fast]!;
nums[fast] = temp;
```

* **Returning multiple values**:

```ts
function divmod(a: number, b: number): [q: number, r: number] {
  return [Math.trunc(a / b), a % b] as const;
}
const [q, r] = divmod(13, 5);
```

---

## 8. Best Practices in TypeScript

* Annotate types at the **variable level**, not inside destructuring, unless needed:

```ts
const { id, name }: { id: number; name: string } = getUser();
// better:
interface User { id: number; name: string }
const { id, name }: User = getUser();
```

* Avoid crashing when destructuring optional objects:

```ts
const cfg: { port?: number } | undefined = undefined;
const { port = 3000 } = cfg ?? {};
```

---

### 🔑 Summary

* **Array destructuring**: extract by position.
* **Object destructuring**: extract by property name.
* Supports **defaults, renaming, rest elements, nested values**.
* Great for **swapping, tuple returns, config objects, loops**.
* In TS, be mindful of **`!` non-null assertions** and **optional properties**.