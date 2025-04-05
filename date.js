const date = new Date();
console.log(date.getTime().toLocaleString());
console.log(date.toString());
console.log(date.toJSON());
console.log(date.toDateString());
console.log(date.getMinutes());
console.log(date.getUTCDate());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getHours());
console.log(date.getDay());
console.log(date.valueOf());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toUTCString());

console.log(date.toISOString('default', 'en-In',{
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',

}));