###   

## 1\. Number Types

### 

*   JavaScript has **only one number type**: `number` (floating-point, 64-bit IEEE 754).
    
*   Can represent **integers** and **decimals**.
    

**Examples:**

`const a = 42;      // integer const b = 3.14;    // float const c = -7;      // negative number`

*   Special numeric values:
    

`Infinity;        // positive infinity -Infinity;       // negative infinity NaN;             // Not-a-Number (invalid math operations)`

*   **Number Objects** (rarely used):
    

`const num2 = new Number('100'); console.log(num2);        // [Number: 100] console.log(typeof num2); // "object"`

> Tip: Prefer **primitive numbers**, not `new Number()`.

* * *

## 2\. Type Checking

### 

*   Check if a value is a number or valid:
    

`typeof 100;               // "number" Number.isInteger(100);    // true Number.isInteger(100.5);  // false Number.isFinite(100);     // true Number.isFinite(Infinity);// false Number.isNaN(NaN);        // true`

*   **Global functions**:
    

`isNaN('hello');      // true isFinite('hello');   // false`

* * *

## 3\. Converting Values to Numbers

### 

*   Convert strings or other types to numbers:
    

`Number('123');        // 123 parseInt('123.45');   // 123 (integer only) parseFloat('123.45'); // 123.45 (decimal) +'123.45';            // 123.45 (unary plus)`

* * *

## 4\. Number Methods

### 

*   **toFixed(n):** Round to `n` decimal places (returns **string**)
    

`const num = 234.5678; num.toFixed(2); // "234.57"`

*   **toPrecision(n):** Format number to `n` **significant digits**
    

`num.toPrecision(1); // "2e+2" → 1 significant digit in exponential form num.toPrecision(5); // "234.57"`

*   **toExponential(n):** Convert to **scientific notation**
    

`num.toExponential(3); // "2.346e+2"`

*   **toString(radix):** Convert number to string in a different base
    

`const n = 255; n.toString(2);  // "11111111" → binary n.toString(16); // "ff" → hexadecimal`

* * *

## 5\. Special Cases

### 

`0/0;      // NaN 1/0;      // Infinity -1/0;     // -Infinity`

*   **NaN** appears when an operation is invalid
    

`Math.sqrt(-1);  // NaN parseInt('hello'); // NaN`

* * *

## 6\. Number Constants

### 

| Constant | Description |
| --- | --- |
| Number.MAX_SAFE_INTEGER | 9007199254740991 → largest integer JS can safely represent |
| Number.MIN_SAFE_INTEGER | -9007199254740991 → smallest safe integer |
| Number.MAX_VALUE | 1.7976931348623157e+308 → largest numeric value possible |
| Number.MIN_VALUE | 5e-324 → smallest positive number possible |
| Number.EPSILON | 2.220446049250313e-16 → difference between 1 and the smallest float > 1 |











| Constant       | Description               | Example                             |
| -------------- | ------------------------- | ----------------------------------- |
| `Math.PI`      | π ≈ 3.141592653589793     | `Math.PI` → 3.141592653589793       |
| `Math.E`       | Euler’s number ≈ 2.718    | `Math.E` → 2.718281828459045        |
| `Math.LN2`     | Natural log of 2 ≈ 0.693  | `Math.LN2` → 0.6931471805599453     |
| `Math.LN10`    | Natural log of 10 ≈ 2.302 | `Math.LN10` → 2.302585092994046     |
| `Math.LOG2E`   | log₂(e) ≈ 1.442           | `Math.LOG2E` → 1.4426950408889634   |
| `Math.LOG10E`  | log₁₀(e) ≈ 0.434          | `Math.LOG10E` → 0.4342944819032518  |
| `Math.SQRT1_2` | √(1/2) ≈ 0.707            | `Math.SQRT1_2` → 0.7071067811865476 |
| `Math.SQRT2`   | √2 ≈ 1.414                | `Math.SQRT2` → 1.4142135623730951   |


| Method          | Description                       | Example               |
| --------------- | --------------------------------- | --------------------- |
| `Math.round(x)` | Rounds to nearest integer         | `Math.round(4.7)` → 5 |
| `Math.floor(x)` | Rounds **down**                   | `Math.floor(4.7)` → 4 |
| `Math.ceil(x)`  | Rounds **up**                     | `Math.ceil(4.2)` → 5  |
| `Math.trunc(x)` | Removes decimal part              | `Math.trunc(4.7)` → 4 |
| `Math.sign(x)`  | Returns sign of number (-1, 0, 1) | `Math.sign(-5)` → -1  |
