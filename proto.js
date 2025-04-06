// function multiplyByFive(num) {
//     return num * 5;
// }
// multiplyByFive.power = 2;
// console.log(multiplyByFive(5));
// console.log(multiplyByFive.power);
// console.log(multiplyByFive.prototype);



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// this new keyword section


// function createPerson(name, age) {
//     this.name = name;
//     this.age = age;
// }
// createPerson.prototype.sayHello = function() {
//     console.log(`Hello ${this.name}`);
// }
// createPerson.prototype.getData = function() {
//     console.log(`Name: ${this.name} Age: ${this.age}`);
// }

// const userOne = new createPerson("subhamay", 25);
// userOne.getData();
// userOne.sayHello();



// let myName = "  subhamay   ";
// console.log(myName.length);


// let myHeroes = ['superman', 'batman', 'spiderman'];

// let heroPower={
//     superman:"fly",
//     batman:"fight",
//     spiderman:"web",
//     getSuperPower: function(hero){
//         console.log(hero+" can "+this[hero]);
//     }
// }
// heroPower.getSuperPower("superman")



// Object.prototype.subhamay=function(){
//     console.log("subhamay");
// }
// Array.prototype.subhamay2=function(){
//     console.log("subhamay new");
// }
// heroPower.subhamay();
// myHeroes.subhamay();

// heroPower.subhamay2()
// myHeroes.subhamay2()

// const user = {
//     name:"subhamay",
//     age:25
// }
// const teacher ={
//     makeVideo:true
// }
// const teachingSupport = {
//     isAvailable:false
// }

// const TASupport = {
//     makeAssignment: 'JS Assignment',
//     fullTime: true,
//     __proto__:teachingSupport
//     // __proto__:teacher
// }
// teacher.__proto__=TASupport;
// teacher.__proto__ = user
// console.log(teacher);

// Object.setPrototypeOf(TASupport,teacher)
// Object.setPrototypeOf(TASupport,teachingSupport);
// console.log(TASupport);

// Object.setPrototypeOf(teachingSupport,user);
// console.log(TASupport);



// const myStr = " Hello Word   "
String.prototype.trueLen = function(){
    return this.trim().length;
}
// console.log(myStr.trueLen());

// console.log("subhamay".trueLen());