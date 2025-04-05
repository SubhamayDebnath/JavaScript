// console.log(hello());
// function hello() {
//     return "hello";
// }

// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }

// function addTwoNumber(num1,num2){
//     return num1+num2;
// }
// const result = addTwoNumber(2,3);
// console.log(result);

// function calculateAllNum(...num){
//     return num.reduce((a,b)=>a+b);
// }
// console.log(calculateAllNum(1,2,3,4,5));

// function userInformation({name,age,gender}){
//     console.log(`Name: ${name} Age: ${age} Gender: ${gender}`);
// }

// const user = {
//     name: "John",
//     age: 25,
//     gender: "Male",
// }

// userInformation(user);

// const arrowFunc = (...para) =>{
//     const result = para.reduce((a,b)=>a+b);
//     console.log(`Result: ${result}`);
// }
// arrowFunc(1,2,3,4,5);
// function currentContext(){
//     console.log(this);
// }
// currentContext()


// const arrowFunc=()=>{
//     console.log(this);
// }
// arrowFunc()

// const arrowFunc=(...para) => para


// console.log(arrowFunc(1,2,3,4,5));

// (
//     function(){
//         // console.log(this);
//         console.log("Hello");
//     }
// )()

// const user = {
//     username: "Subhamay",
//     age: 25,
//     welcome: function(){
//         // console.log(`Welcome ${this.username} you are ${this.age} years old`);
//         console.log(this);
//     }

// }

// user.welcome();
// user.username = "John";
// user.welcome();

// function one(){
//     let user="hello";
//     console.log(this.hello);
// }

// one()

// const varOne = function(){
//     console.log(this);
// }
// varOne()

// const varOne = () =>{ 
//     console.log(this);
// }
// varOne()

