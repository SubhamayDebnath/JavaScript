var num = 200;
console.log(num);
var num = 'hello';
console.log(num);
if (true) {
    var num = false;
    console.log(num);
}

console.log(num);

console.log(`=============== var ================`);


let num1 = 200;
console.log(num1);
num1 = 'hello';
console.log(num1);
if (true) {
    let num1 = false;
    console.log(num1);
}

console.log(num1);

console.log(`=============== let ================`);

let num2 = 200;
console.log(num2);
num2 = 'hello';
console.log(num2);
if (true) {
    let num2 = false;
    console.log(num2);
}

console.log(num2);

console.log(`=============== const ================`);

let a;
console.log(a); //undefined

// const vs let

// let letVar; //in let we can create variable without initial value , it does not throw error;
// const constVar; //in const we need to create variable with initial value , otherwise it will throw error;
//  that is the difference between let and const

const num=10;

const myFunction = (numberPara)=>{
    return numberPara * 2;
}

console.log(myFunction(num));