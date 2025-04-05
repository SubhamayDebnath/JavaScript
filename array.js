const arr = ['apple', 'pineapple', 'grape', 'banana', 'berry', 'mango', 'starfruit', 'kiwi'];
console.log(arr);
console.log(arr.length);
console.log(arr[3]);
console.log(arr[0]);
console.log(arr[arr.length - 1]);

const newArr = arr;
console.log(newArr);
newArr.shift()
console.log(newArr);
console.log(arr);

console.log(arr.pop());
console.log(arr);
console.log(arr.push('watermelon'));
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.unshift('guava'));
console.log(arr);
console.log(arr.shift('grape'));
console.log(arr);
console.log(arr.includes('guava'));
console.log(arr.includes('grape'));
console.log(arr.indexOf('grape'));
console.log(arr.indexOf('watermelon'));
console.log(arr.findIndex((grape) => grape === 'grape'));
console.log(arr.find((grape) => grape === 'grape'));
console.log(arr.filter((grape) => grape === 'grape'));
console.log(arr.filter((grape) => grape !== 'grape'));
console.log(arr.filter((grape) => grape === 'grape'));
console.log(arr.filter((grape) => grape === 'grape'));
console.log(arr.map(e=> e));
console.log(arr.map(e=> e.toUpperCase()));
console.log(arr.slice(2, 5));
console.log(arr.splice(2, 5));
arr.forEach((e)=>{
    console.log(e);
})

console.log(arr.sort());
console.log(arr.sort((a, b) => a.length - b.length));
console.log(arr.join('->'));
console.log(arr.at(2));
console.log(arr.at(-2));
// const arr2 =arr.copyWithin();
// console.log(arr2);
const list = arr.entries();

for ( let x  of list) {
    console.log(x);
}
console.log([...arr.entries()]);
console.log([...arr.keys()]);

console.log(arr.fill('kiwi', 2, 4));
const testArr= [1,[2.3,4.5],3];
console.log(testArr.flat());
console.log(testArr.flatMap(e=>e));
console.log(arr.reduce((a, b) => a + b));
console.log(arr.reduce((a, b) => a + b, 10));
console.log(Array.isArray(arr));
console.log(Array.from('subhamay'));
console.log(Array.from({
    name: 'subhamay',
}));

console.log(Array.of(1, 2, 3));
console.log(arr.some(e => e === 'apple'));
;

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
