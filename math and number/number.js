const num = 100;
const num2 = new Number('234.5678');
console.log(num); // 100
console.log(num2); // [Number: 100]
console.log(parseInt(num2)); //100
console.log(isFinite(Infinity)); // false
console.log(isFinite(num)); // true
console.log(isNaN(undefined));  // true
console.log(isNaN('hello')); // true
console.log(isFinite('hello')); //false
console.log(num2.toFixed(2)); //234.56
console.log(num2.toPrecision(1)); //2e+2
console.log(0/0); // NaN
console.log(1/0); // Infinity
console.log(-1/0); // -Infinity

console.log(Number.isInteger(num2)); //false
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324
console.log(Number.EPSILON);//2.220446049250313e-16
console.log('8' * '5'); // 40


console.log(num.toLocaleString('en-US')); //100 returns string with locale en-US

console.log(num.toLocaleString('hi-IN')); // 100  returns string with locale hi-IN 

console.log(num.toLocaleString('hi-IN', {style: 'currency', currency: 'INR'})); // 100  returns string with locale hi-IN and currency INR