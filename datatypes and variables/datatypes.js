// typeof is a primitive-level operator — it doesn’t know about subtypes of objects.All arrays, dates, and even null return "object".

console.log(typeof 8); // number
console.log(typeof 'hello'); // string
console.log(typeof true); // boolean
console.log(typeof [1, 2, 3]); // object -- In JavaScript, arrays are a special kind of object — technically, they’re list-like objects with numeric keys (indexes) and a built-in length property.
console.log(typeof { 'name': 5 }); // object
console.log(typeof null); // object
console.log(typeof undefined); //undefined
console.log(typeof Date); // function -- In JavaScript, Date is a built-in constructor function, used to create date objects.
console.log(typeof new Date()); // object -- Now it returns "object" — because new Date() creates a Date instance, not a function.
console.log(typeof NaN); // number
console.log(typeof [1, 2, 3][0]); // number
console.log(typeof { 'name': 5 }.name); // number
console.log(typeof { 'name': 5, 'email': 'subhamay@gmail.com', greet: () => undefined }.greet);//function

console.log(typeof +'10'); //number but convert into positive number
console.log(typeof -'10'); //number but convert into negative number

console.log(typeof +'name'); // number but return NaN
console.log(typeof -'name'); // number but return NaN

console.log(parseInt('12uu')); //convert into number and remove non-numeric 

console.log(typeof +undefined, +undefined); //number but print NaN
console.log(typeof +null, +null); //number but print 0
console.log(typeof +NaN, +NaN); //number but print NaN

console.log(typeof Symbol('hello', 'world')); // Symbol
console.log(Symbol('hello', 'world')); // Symbol(hello)
console.log(100+'2',typeof 100+'2'); // 1002,number2
console.log('2'+1,typeof '2'+ 1); //21 string1