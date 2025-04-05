// for(let i = 5 ; i > 0 ; i--){
//     console.log("* ".repeat(i));
// }


// for(const fruit of arr){
//     console.log(fruit);
//     console.log("_");
// }

// const map = new Map();
// map.set('name', 'subhamay');
// map.set('age', 25);
// console.log(map);
// for(const [key,value] of map){
//     console.log(`${key} : ${value}`);
// }

const arr = ['apple', 'pineapple', 'grape', 'banana', 'berry', 'mango', 'starfruit', 'kiwi'];

// arr.forEach((elem,idx,arr)=>{
//     if(elem === 'grape'){
//         return
//     }else{
//         console.log(`${idx} : ${elem} : ${arr.length} : ${arr[idx]}`);
//     }
    
// })

// function printMe(elem){
//     console.log(elem);
// }

// arr.forEach(printMe);

// const programmingLanguages = [
//     { name: 'JavaScript', year: 1995 },
//     { name: 'Python', year: 1991 },
//     { name: 'Java', year: 1995 },
//     { name: 'C++', year: 1983 },
//     { name: 'C', year: 1972 }
// ]

// programmingLanguages.forEach(({name,year})=>{
//     console.log(`${name} was released in ${year}`);
// })

const evenNum = [2,4,6,8,10];

// forEach () method
// evenNum.forEach((item)=>{
//     console.log(item);
// })

// Map() method
// const result = evenNum.map((item)=> item * 2)
// console.log(result);

// Some() method
// const result = evenNum.some((item)=> item == 10);
// console.log(result);

// Every() method
// const result = evenNum.every((item)=> item > 1 && item%2==0 && item < 10)
// console.log(result);

// Filter() method
// const result = evenNum.filter((item)=> item < 6)
// console.log(result);

// Reduce() method
// const result = evenNum.reduce((total,item)=> total - item)
// console.log(result);

// find() method
// const result = evenNum.find((item)=> item < 10 && item > 6)
// console.log(result);

// findIndex() method
// const result = evenNum.findIndex((item)=> item == 10)
// console.log(result);