###   

## 1\. Boolean Basics

### 

`const a = true; const b = false;  console.log(typeof a); // "boolean" console.log(typeof b); // "boolean"`

* * *

## 2\. Falsy and Truthy Values

### Falsy Values (convert to false)

### 

*   `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`
    

`Boolean(0);       // false Boolean("");      // false Boolean(null);    // false Boolean(undefined); // false Boolean(NaN);     // false`

### Truthy Values (convert to true)

### 

*   Anything else, e.g., `1`, `"Hello"`, `[]`, `{}`, `Infinity`
    

`Boolean(1);       // true Boolean("false"); // true (non-empty string!) Boolean([]);      // true Boolean({});      // true`

* * *

## 3\. Boolean Conversion Tricks

### 

`!!"Hello";   // true !!0;         // false !![];        // true !!{};        // true !!null;      // false`

> `!!value` → fastest way to convert **any value to boolean**

* * *

## 4\. Comparison Operators

### 

`5 > 3;      // true 5 < 3;      // false 5 == "5";   // true  (loose equality) 5 === "5";  // false (strict equality) 0 == false; // true 0 === false;// false`

> ⚠️ **Tricky:** Always use `===` in interviews to avoid type coercion mistakes.

* * *

## 5\. Logical Operators

### 

`const a = true; const b = false;  a && b;  // false → AND a || b;  // true  → OR !a;      // false → NOT  // Short-circuiting false && console.log("won't print"); true || console.log("won't print");`

* * *

## 6\. Boolean Objects (Avoid in Practice)

### 

`const boolObj = new Boolean(false); console.log(boolObj);        // [Boolean: false] console.log(typeof boolObj); // "object"  if (boolObj) {   console.log("Runs!"); // Runs because objects are always truthy }`

> ⚠️ Tricky: `new Boolean(false)` is truthy → can confuse conditions!

* * *

## 7\. Tricky Boolean Questions for Interviews

### 

1.  **Truthy/falsy confusion**
    

`if ("0") console.log("Hello"); // Runs! → "0" is non-empty string → truthy`

2.  **Empty array/object**
    

`if ([]) console.log("Array is truthy"); // Runs! if ({}) console.log("Object is truthy"); // Runs!`

3.  **Logical OR**
    

`console.log(false || 0 || "" || null || undefined); // undefined → last falsy value console.log(false || 0 || "" || "Hello");          // "Hello" → first truthy value`

4.  **Double negation**
    

`console.log(!!"");        // false console.log(!!"false");   // true → non-empty string console.log(!!0);         // false console.log(!![]);        // true → empty array is truthy`

5.  **Boolean vs Number**
    

`console.log(true + false);   // 1 → true=1, false=0 console.log(true * 2);       // 2 → true=1 console.log(false - 1);      // -1 → false=0`

6.  **Falsy numbers**
    

`if (-0) console.log("Runs?"); // Doesn't run → -0 is falsy`

* * *

### ✅ Key Tips

### 

*   Always know **truthy vs falsy** values.
    
*   Use `===` for strict equality.
    
*   Avoid `new Boolean()` in conditions.
    
*   Short-circuiting is useful in **default values**:
    

`const name = userName || "Guest"; // if userName falsy → "Guest"`