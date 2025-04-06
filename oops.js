// Parts of OOPs in js
// Object literal

// - Constructor function
// - Class  
// - Prototype
// - Instance

/* ================================================
*/

// 4 pillar

// Encapsulation
// Abstraction
// Inheritance
// Polymorphism

/* ================================================
*/


function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello ${this.name}`);
    }
    this.getData = function() {
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
}

const userOne = new User("subhamay", 25);
const userTwo = new User("Amit", 27);
console.log(userOne);
console.log(userTwo);
userOne.sayHello();
userTwo.getData();
