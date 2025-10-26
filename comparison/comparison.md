# ⚙️ Implicit vs Explicit Type Conversion in JavaScript

## 🧩 1. What’s the Difference?

| Type | Meaning | Who Converts the Type? |
| --- | --- | --- |
| Implicit Conversion | JavaScript automatically converts data types. | JS Engine |
| Explicit Conversion | You manually convert data types using functions. | Developer |

* * *

## 🔄 2. Implicit Type Conversion (Type Coercion)

JavaScript automatically changes one data type to another when required.

### 💡 Example 1: String + Number

`console.log('5' + 2); // "52"`

➡️ JS converts `2` → `'2'`, then concatenates → `"52"`

* * *

### 💡 Example 2: Number + Boolean

`console.log(5 + true); // 6`

➡️ `true` → `1`, so → `5 + 1 = 6`

* * *

### 💡 Example 3: Equality Comparison

`console.log('5' == 5); // true`

➡️ `'5'` (string) is converted to `5` (number) before comparison.

* * *

### 💡 Example 4: Falsy Values

`if ('') console.log("Hello"); // ❌ Won’t run`

➡️ Empty string `''` is **implicitly converted** to `false`.

* * *

## ✋ 3. Explicit Type Conversion (Type Casting)

You manually convert the data type using built-in functions.

### 💡 Example 1: String → Number

`console.log(Number('123'));     // 123 console.log(parseInt('123'));   // 123 console.log(parseFloat('123.45')); // 123.45`

* * *

### 💡 Example 2: Number → String

`console.log(String(123));       // "123" console.log((123).toString());  // "123"`

* * *

### 💡 Example 3: Boolean Conversion

`console.log(Boolean(1));   // true console.log(Boolean(0));   // false console.log(Boolean(''));  // false console.log(Boolean('JS')); // true`

* * *

### 💡 Example 4: Explicit Comparison

`console.log(Number('5') === 5); // true`

➡️ `'5'` is explicitly converted to a number before comparison.

* * *

## ⚔️ 4. Implicit vs Explicit — Side-by-Side

| Feature | Implicit Conversion | Explicit Conversion |
| --- | --- | --- |
| Who converts | JavaScript Engine | Developer |
| Control | Automatic | Manual |
| Example | '5' + 2 → "52" | Number('5') + 2 → 7 |
| Risk | Can cause unexpected results | Safer and predictable |
| Used in | ==, arithmetic, conditions | Number(), String(), Boolean() |

* * *

## 🧮 5. Combined Example

`// Implicit Conversion let result1 = '10' * 2; // 20 (string is automatically converted to number)  // Explicit Conversion let result2 = Number('10') * 2; // 20 (you converted it manually)  console.log(result1, result2);`

✅ Both print `20`,  
but the first is **implicit**, and the second is **explicit**.