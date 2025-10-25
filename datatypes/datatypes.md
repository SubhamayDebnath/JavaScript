# 🧠 JavaScript Data Types — Complete Notes

JavaScript data types define the kind of value a variable can hold.  
They are broadly divided into **Primitive** and **Non-Primitive (Reference)** types.

---

## 📘 Table of Contents
1. [Primitive Data Types](#1-primitive-data-types)
2. [Reference (Non-Primitive) Data Types](#2-reference-non-primitive-data-types)
3. [Type Checking (`typeof` Operator)](#3-type-checking-typeof-operator)
4. [Memory Storage (Stack vs Heap)](#4-memory-storage-stack-vs-heap)
5. [Copy by Value vs Copy by Reference](#5-copy-by-value-vs-copy-by-reference)
6. [Type Conversion and Coercion](#6-type-conversion-and-coercion)
7. [Interview Tips & Common Questions](#7-interview-tips--common-questions)

---

## 1️⃣ Primitive Data Types

Primitive values are **immutable** and stored **by value**.  
They are directly stored in the **stack memory**.

| Type | Description | Example | `typeof` |
|------|--------------|----------|-----------|
| **String** | Sequence of characters | `"Hello"`, `'World'`, `` `Hi ${name}` `` | `"string"` |
| **Number** | Integer or floating-point | `42`, `3.14`, `-10` | `"number"` |
| **BigInt** | Integers larger than `2^53 - 1` | `9007199254740991n` | `"bigint"` |
| **Boolean** | True or False | `true`, `false` | `"boolean"` |
| **Undefined** | Declared but not assigned | `let a;` | `"undefined"` |
| **Null** | Intentional absence of value | `let b = null;` | `"object"` *(JS bug)* |
| **Symbol** | Unique and immutable value | `let id = Symbol("id");` | `"symbol"` |

---

### 🧩 Example
```js
let name = "Subhamay"; // String
let age = 25;          // Number
let isDev = true;      // Boolean
let salary = null;     // Null
let address;           // Undefined
let bigNumber = 12345678901234567890n; // BigInt
let id = Symbol("id"); // Symbol
```

---

## 2️⃣ Reference (Non-Primitive) Data Types

Non-primitive types are **mutable** and stored **by reference**.  
They are kept in the **heap memory**, while a reference (pointer) is stored in the **stack**.

| Type | Description | Example | `typeof` |
|------|--------------|----------|-----------|
| **Object** | Key–value pairs | `{ name: "John", age: 25 }` | `"object"` |
| **Array** | Ordered collection | `[1, 2, 3]` | `"object"` |
| **Function** | Block of reusable code | `function greet(){}` | `"function"` |
| **Date** | Date and time object | `new Date()` | `"object"` |
| **Map / Set** | Data structures for collections | `new Map()`, `new Set()` | `"object"` |

---

### 🧩 Example
```js
let person = { name: "John", age: 25 }; // Object
let numbers = [1, 2, 3];                // Array
function greet() { return "Hello"; }    // Function
let date = new Date();                  // Date
let map = new Map();                    // Map
```

---

## 3️⃣ Type Checking (`typeof` Operator)

Use the `typeof` operator to determine the data type of a variable.

```js
typeof 42;           // "number"
typeof "hello";      // "string"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof null;         // "object"  <-- historical bug
typeof {};           // "object"
typeof [];           // "object"
typeof function(){}; // "function"
```

🧠 **Note:** Arrays and functions are technically **objects**, but `typeof` gives `"function"` for functions for convenience.

---

## 4️⃣ Memory Storage (Stack vs Heap)

| Type | Memory | Stored As | Example |
|------|---------|------------|----------|
| **Primitive** | Stack | Value directly stored | `let a = 10;` |
| **Reference** | Heap (reference in stack) | Address (pointer) to value | `let obj = {name: "JS"};` |

### 💡 Visual Concept

```
Primitive Type:
a → [10]

Reference Type:
obj → [0x1A2B] → { name: "JS" }
```

---

## 5️⃣ Copy by Value vs Copy by Reference

### ✳️ Copy by Value (Primitive)
Each variable has its own copy.
```js
let a = 10;
let b = a;
b = 20;

console.log(a); // 10
console.log(b); // 20
```

### ✳️ Copy by Reference (Non-Primitive)
Both variables point to the same memory location.
```js
let user1 = { name: "Subhamay" };
let user2 = user1;

user2.name = "Dev";

console.log(user1.name); // "Dev"
console.log(user2.name); // "Dev"
```

---

## 6️⃣ Type Conversion and Coercion

### 🔸 Explicit Conversion
Use built-in functions to convert types:
```js
String(123); // "123"
Number("42"); // 42
Boolean(0);   // false
```

### 🔸 Implicit Conversion (Coercion)
JavaScript automatically converts types when needed.
```js
"5" + 2;   // "52" (string concatenation)
"5" - 2;   // 3   (string to number)
1 == "1";  // true (type coercion)
1 === "1"; // false (strict check)
```

---

## 7️⃣ Interview Tips & Common Questions

### 🧩 Common Questions:
1. **What’s the difference between `null` and `undefined`?**
   - `undefined`: variable declared but not assigned.  
   - `null`: explicitly set to “no value”.

2. **Why does `typeof null` return `"object"`?**
   - Historical bug from the first JS implementation.

3. **What’s the difference between `==` and `===`?**
   - `==` → compares values (performs type conversion).  
   - `===` → compares both value and type.

4. **How are primitives and references stored in memory?**
   - Primitives → stack (value).  
   - References → heap (reference in stack).

5. **What is a Symbol used for?**
   - For creating unique property keys in objects.

---

## ✅ Summary Table

| Category | Type | Stored In | Mutable | Example |
|-----------|------|------------|----------|----------|
| Primitive | String, Number, BigInt, Boolean, Undefined, Null, Symbol | Stack | ❌ | `"JS"`, `42` |
| Reference | Object, Array, Function, Map, Set | Heap | ✅ | `{}`, `[]`, `function() {}` |

---

### 🧾 Quick Reminder:
> **Primitive → Value-based (Immutable)**  
> **Reference → Address-based (Mutable)**

---
