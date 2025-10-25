### 1\. String Primitive

## 

Simple text value stored directly in memory.

`const str = "hello world"; console.log(typeof str); // "string" console.log(str[0]); // h console.log(str.charAt(6)); // w`

✅ Fast, immutable, and commonly used.

* * *

### 2\. String Object

## 

Created using the `new` keyword — becomes an object.

`const user = new String("Subhamay"); console.log(typeof user); // "object" console.log(user.length); // 8`

⚠️ Slower and not recommended.

* * *

### 3\. Comparison

## 

`const a = "hello"; const b = new String("hello"); console.log(a == b);  // true (same value) console.log(a === b); // false (different type)`

➡️ Always use `===` for strict comparison.

* * *

### 4\. Immutability

## 

Strings cannot be changed once created.

`str[0] = "H"; console.log(str); // still "hello world"`

* * *

### ✅ Summary

## 

| Feature | Primitive | Object |
| --- | --- | --- |
| Example | "hello" | new String("hello") |
| Type | string | object |
| Mutable | ❌ No | ❌ No |
| Recommended | ✅ Yes | ❌ No |


| Method                      | Description                                                 | Example                                        |
| --------------------------- | ----------------------------------------------------------- | ---------------------------------------------- |
| `charAt(index)`             | Returns character at given index                            | `"abc".charAt(1)` → `'b'`                      |
| `charCodeAt(index)`         | Unicode of character                                        | `"A".charCodeAt(0)` → `65`                     |
| `at(index)`                 | Modern alternative for `charAt()` (supports negative index) | `"abc".at(-1)` → `'c'`                         |
| `concat(str2)`              | Joins two strings                                           | `"Hello".concat(" World")`                     |
| `includes(substring)`       | Checks if substring exists                                  | `"hello".includes("he")` → `true`              |
| `startsWith(value)`         | Checks if string starts with given value                    | `"hello".startsWith("he")`                     |
| `endsWith(value)`           | Checks if string ends with given value                      | `"hello".endsWith("lo")`                       |
| `indexOf(value)`            | First index of substring                                    | `"hello".indexOf("l")` → `2`                   |
| `lastIndexOf(value)`        | Last index of substring                                     | `"hello".lastIndexOf("l")` → `3`               |
| `padStart(length, char)`    | Pads start until given length                               | `"5".padStart(3, "0")` → `"005"`               |
| `padEnd(length, char)`      | Pads end until given length                                 | `"5".padEnd(3, "0")` → `"500"`                 |
| `repeat(n)`                 | Repeats string `n` times                                    | `"ha".repeat(3)` → `"hahaha"`                  |
| `replace(a, b)`             | Replaces first match                                        | `"hi hi".replace("hi","hey")` → `"hey hi"`     |
| `replaceAll(a, b)`          | Replaces all matches                                        | `"hi hi".replaceAll("hi","hey")` → `"hey hey"` |
| `slice(start, end)`         | Extracts part of string                                     | `"abcdef".slice(1,4)` → `"bcd"`                |
| `substring(start, end)`     | Similar to slice (no negative index)                        | `"abcdef".substring(1,4)` → `"bcd"`            |
| `substr(start, length)`     | (Deprecated) Extracts part by length                        | `"abcdef".substr(1,3)` → `"bcd"`               |
| `split(separator)`          | Splits into array                                           | `"a,b,c".split(",")` → `["a","b","c"]`         |
| `toLowerCase()`             | Converts to lowercase                                       | `"HELLO".toLowerCase()`                        |
| `toUpperCase()`             | Converts to uppercase                                       | `"hello".toUpperCase()`                        |
| `trim()`                    | Removes spaces from both ends                               | `" hi ".trim()` → `"hi"`                       |
| `trimStart()` / `trimEnd()` | Removes spaces from one side                                | `" hi ".trimStart()`                           |
| `valueOf()`                 | Returns primitive value of string                           | `str.valueOf()`                                |
| `toString()`                | Returns string itself                                       | `(123).toString()` → `"123"`                   |



### reverse slice 


### 

`const user = "Subhamay";`

**String with positive indices:**

| Character | S | u | b | h | a | m | a | y |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| Negative | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 |

* * *

### slice(start, end) Rules

### 

1.  Extracts string from **`start` index up to (not including) `end` index**.
    
2.  **Negative index** counts from the end: -1 = last char, -2 = second last, etc.
    
3.  If `start >= end`, returns `""`.
    
4.  Does **not modify** original string.
    

* * *

### Positive index examples

### 

`user.slice(0, 3); // "Sub" → indices 0,1,2 user.slice(4, 7); // "ama" → indices 4,5,6 user.slice(3);    // "hamay" → from index 3 to end`

* * *

### Negative index examples

### 

`user.slice(-3);       // "may" → from index -3 (m) to end user.slice(-6, -1);   // "ubham" → indices -6(u) to -2(a) user.slice(-1, -6);   // "" → start is after end`

* * *

### Mix positive & negative indices

### 

`user.slice(2, -2); // "bham" → start at 2('b'), end at -2('a')`

* * *

### Visual Map

### 

`String:   S   u   b   h   a   m   a   y Index:    0   1   2   3   4   5   6   7 NegIdx:  -8  -7  -6  -5  -4  -3  -2  -1`

*   `slice(2, 5)` → `"bha"` → indices 2,3,4
    
*   `slice(-5, -2)` → `"ham"` → indices 3,4,5
    
*   `slice(-3)` → `"may"` → last 3 characters
    

* * *

✅ **Key Points**

1.  `start` included, `end` excluded
    
2.  Negative indices count from **right to left**
    
3.  Start ≥ end → returns empty string
    
4.  Always returns **new string**


### 1\. Accessing Characters

### 

*   `str[index]` → returns character at index
    
*   `str.charAt(index)` → returns character at index
    
*   `str.charCodeAt(index)` → returns Unicode of character
    

### 2\. Case Conversion

### 

*   `str.toLowerCase()` → lowercase
    
*   `str.toLocaleLowerCase()` → locale-aware lowercase
    
*   `str.toUpperCase()` → uppercase
    
*   `str.toLocaleUpperCase()` → locale-aware uppercase
    

### 3\. Trimming Spaces

### 

*   `str.trim()` → removes spaces both ends
    
*   `str.trimStart()` → removes spaces from start
    
*   `str.trimEnd()` → removes spaces from end
    

### 4\. Searching / Indexing

### 

*   `str.indexOf(substring)` → first occurrence
    
*   `str.lastIndexOf(substring)` → last occurrence
    
*   `str.includes(substring, startIndex)` → true/false
    
*   `str.startsWith(substring)` → check start
    
*   `str.endsWith(substring)` → check end
    

### 5\. Extracting Substrings

### 

*   `str.slice(start, end)` → extracts part (negative index allowed)
    
*   `str.substring(start, end)` → similar to slice but no negative index
    
*   `str.substr(start, length)` → (deprecated) extract by start + length
    

### 6\. Replacing

### 

*   `str.replace(old, new)` → replaces first occurrence
    
*   `str.replaceAll(old, new)` → replaces all occurrences
    

### 7\. Splitting / Joining

### 

*   `str.split(separator)` → splits into array
    
*   `str.concat(str2)` → joins strings
    

### 8\. Padding / Repeating

### 

*   `str.padStart(targetLength, padString)` → add padding at start
    
*   `str.padEnd(targetLength, padString)` → add padding at end
    
*   `str.repeat(n)` → repeats string n times
    

### 9\. Miscellaneous

### 

*   `str.valueOf()` → returns primitive string value
    
*   `str.toString()` → converts to string
    
*   `str.normalize()` → normalizes Unicode characters
    
*   `str.match(regex)` → returns matches for regex
    
*   `str.search(regex)` → returns index of regex match
    
*   `str.replace(regex, replacement)` → replace using regex
