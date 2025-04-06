// class User{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     sayHello(){
//         return(`Hello ${this.name}`);
//     }
//     getData(){
//         return (`Name: ${this.name} Age: ${this.age}`);
//     }
// }
// const userOne = new User("subhamay", 25);
// console.log(userOne.sayHello());
// console.log(userOne.getData());

// or

// function User(name, age){
//     this.name = name;
//     this.age = age;
//     this.sayHello = function(){
//         return(`Hello ${this.name}`);
//     }
//     this.getData = function(){
//         return (`Name: ${this.name} Age: ${this.age}`);
//     }
// }
// const userTwo = new User("subhamay", 26);
// console.log(userTwo.sayHello());
// console.log(userTwo.getData());

// or

// function User(name, age){
//     this.name = name;
//     this.age = age;
// }
// User.prototype.sayHello = function(){
//     return(`Hello ${this.name}`);
// }
// User.prototype.getData = function(){
//     return (`Name: ${this.name} Age: ${this.age}`);
// }
// const userThree = new User("subhamay", 27);
// console.log(userThree.sayHello());
// console.log(userThree.getData());

// console.log("sub".getData());