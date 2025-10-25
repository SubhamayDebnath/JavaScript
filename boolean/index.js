console.log(Boolean());// false
console.log(Boolean('')); // false
console.log(Boolean(' ')); // true
console.log(Boolean('hello')); // true
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean(new Date())); // true
console.log(Boolean(function(){})); // true
console.log(Boolean('0')); // true
console.log(Boolean('false')); // true
console.log(Boolean(!'hello')); // false
console.log(Boolean(!!0)); // false
console.log(true + false); // 1
console.log(!0); //true
console.log(!!0); // false
console.log(false && true); // false
console.log(false && false); // flase
console.log(true && false); // false
console.log(true && true); // true
console.log(false || true); // true
console.log(false || false); ///false
console.log(Boolean(-0)); // false