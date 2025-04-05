const obj ={
    "name": "John",
    "age": 30,
    "city": "New York",
    "hobbies": ["reading", "swimming", "cycling"],
    "address": {
        "street": "123 Main St",
        "apartment": 4,
        "country": "USA"
    }
}
// console.log(obj);
// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj.hobbies);
// console.log(obj.hobbies[1]);
// console.log(obj.address);
// console.log(obj.address.country);

// const mySymbol = Symbol("mySymbol");
// obj[mySymbol] = "mySymbolValue";
// // console.log(typeof mySymbol);
// console.log(obj[mySymbol]);
// Object.freeze(obj);
// obj['name'] = 'John Cena'
// console.log(obj['name']);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// for (const [key, value] of Object.entries(obj)) {
//     console.log(`${key}: ${value}`);
// }


// for (const key of Object.keys(obj)) {
//     console.log(`${key}`);
// }

// for (const value of Object.values(obj)) {
//     console.log(`${value}`);
// }

// const objOfFun = {
//     "name": "John",
//     "fun1": function () {
//         console.log("fun1");
//     }
//     ,
//     "fun2": function (e) {
//         console.log(`fun2 ${e}`);
//     }
//     ,greeting: function () {
//         console.log(`Hello ${this.name}`);
//     }
// }
// objOfFun.fun1();
// objOfFun.fun2('subhamay');
// objOfFun.greeting();

// console.log(obj);
// const newObj = {};
// newObj['name'] = 'John';
// newObj['age'] = 30;
// console.log(newObj);

// const obj1={1:"one",2:"two",3:"three",4:"four",5:"five"};
// const obj2 ={6:"six",7:"seven",8:"eight",9:"nine",10:"ten"};
// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);  

// // console.log(Object.entries(obj3));
// console.log(Object.isFrozen(obj3));
// console.log(Object.isSealed(obj3));
// console.log(Object.is(obj3));
// const people = [
//     {
//       name: "Subhamay",
//       age: 24,
//       city: "Siliguri",
//       profession: "Web Developer"
//     },
//     {
//       name: "Amit",
//       age: 27,
//       city: "Kolkata",
//       profession: "Software Engineer"
//     },
//     {
//       name: "Priya",
//       age: 23,
//       city: "Delhi",
//       profession: "Graphic Designer"
//     },
//     {
//       name: "Ankita",
//       age: 25,
//       city: "Mumbai",
//       profession: "Data Analyst"
//     }
//   ];
  
// const peopleCopy = JSON.parse(JSON.stringify(people));

// const result = peopleCopy.map(person => person.name);
// console.log(result);