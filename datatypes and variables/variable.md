# JavaScript Variables

A **variable** is a named storage for data in your program. You can store numbers, strings, objects, arrays, and more.

---

## 1. Ways to Declare Variables

### a) `var`

- Function-scoped
- Can be **re-declared** and **updated**
- Hoisted (initialized as `undefined`)

```javascript
var name = "Subhamay";
console.log(name); // Subhamay

var name = "Debnath"; // re-declaration allowed

console.log(name); // Debnath
console.log(age); // undefined (hoisted)
var age = 25;
```

### b) let

- Block-scoped

- Can be updated but cannot be re-declared

- Hoisted but in Temporal Dead Zone (TDZ)

```js
let age = 25;
age = 26; // ✅ update
console.log(age); // 26

// let age = 30; // ❌ Error
```

### b) const

- Block-scoped

- Cannot be updated or re-declared

- Must be initialized

- Objects/arrays can modify contents, but not reassign

```js
const PI = 3.14;
// PI = 3.1415; // ❌ Error

const user = { name: "Subhamay" };
user.name = "Debnath"; // ✅ allowed
console.log(user.name); // Debnath
```

### 2.Scope

| Keyword | Scope    | Hoisting | Re-declaration |
| ------- | -------- | -------- | -------------- |
| `var`   | Function | Yes      | Yes            |
| `let`   | Block    | TDZ      | No             |
| `const` | Block    | TDZ      | No             |

```js
function testVar() {
	var x = 1;
	if (true) {
		var x = 2; // same variable
		console.log(x); // 2
	}
	console.log(x); // 2
}

function testLet() {
	let y = 1;
	if (true) {
		let y = 2; // different variable
		console.log(y); // 2
	}
	console.log(y); // 1
}
```

### 3.Host

```js
console.log(a); // undefined
var a = 5;

console.log(b); // ❌ ReferenceError
let b = 10;

console.log(c); // ❌ ReferenceError
const c = 15;
```

### 4. Best Practices

- Prefer let and const over var.

- Use const by default; only use let if the value changes.

- Give meaningful names (username instead of x).

- Avoid unnecessary global variables.

- Initialize variables when possible.

```js
const PI = 3.14;
let radius = 5;
var area = PI * radius * radius;

console.log("Radius:", radius); // 5
console.log("Area:", area);     // 78.5

radius = 7;
console.log("New Radius:", radius);           // 7
console.log("New Area:", PI * radius * radius); // 153.86

```