console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
const name = {
    first: 'subhamay',
}

console.log(Object.getOwnPropertyDescriptor(name, 'first'));
name.first = 'Tom'
console.log(Object.getOwnPropertyDescriptor(name, 'first'));
Object.defineProperty(name, 'first', {
    value: 'Subhamay',
    writable: false ,
    configurable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(name, 'first'));
name.first = 'Tom'
console.log(name.first);