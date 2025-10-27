// WAP to remove i^th character of a string.
// function removeChar(str,index){
//     if(index < 0 || index > (str.length - 1)){
//         return -1
//     }
//     return str.slice(0,index) + str.slice(index+1);
// }
// console.log(removeChar('hello',-5));



//  WAP to calculate the length of a string, avoid space.
// function stringLenWithoutSpace(str){
//     if(typeof(str) !== 'string' || str.length === 0){
//         return -1;
//     }
//     let len = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === ' '){
//             continue
//         }
//         len+=1
//     }
//     return len
// }
// console.log(stringLenWithoutSpace(''))



// WAP to print even length words in a string.
// function evenLen(str){
//     if(typeof(str) !== 'string' || str.length === 0) return -1;
//     const strArray = str.split(' ');
//     const result = [];
//     for (const word of strArray){
//         if(word.length % 2 == 0) result.push(word)
//     }
//     return result;
// }
// console.log(evenLen('I am hello world'));

// // Write a program uppercase Half String.
// function uppercaseHalfString(str){
//     if(typeof(str) !== 'string' || str.length === 0) return -1
//     const halIndex = parseInt(str.length / 2);
//     return str.slice(0 , halIndex+1 ).toUpperCase() + str.slice(halIndex + 1)
// }
// console.log(uppercaseHalfString('helloworld'));


//  Write a program to capitalize the first and last character of each word in a string
// function customCapitalize(str){
//     if(typeof(str) !== 'string' || str.length === 0) return -1
//     // return str[0].toUpperCase() + str.slice(1)
//     let result = str[0].toUpperCase();
//     for(let i = 1; i < str.length; i++){
//         result += str[i]
//     }
//     return result
// }
// console.log(customCapitalize('hello'));

// Write a program to accept the strings which contain all vowels
// function checkStr(str){
//     if(typeof(str) !== 'string' || str.length === 0) return -1
//     for(const ch of str.toLowerCase()){
//         if(!'aeiou'.includes(ch)) return false;
//     }
//     return true
// }
// console.log(checkStr('aei'));


// Write a program to count the Number of matching characters in a pair of string

// function matchingOPair(str1,str2){
//     if([str1,str2].some((a)=> !a || typeof(a) !== 'string' || a.length === 0)) return -1
//     let total = 0;
//     let prev = []
//     for(const ch of str1.toLowerCase()){
//         if(str2.toLowerCase().includes(ch) && !prev.includes(ch)){
//             prev.push(ch)
//             total+=1
//         }
//     }
//     return total
// }
// console.log(matchingOPair('app','alpp'));

// function matchingOPair(str1,str2){
//     if([str1,str2].some((a)=> !a || typeof(a) !== 'string' || a.length === 0)) return -1
//     let total = 0;
//     let prev = new Set();
//     for(const ch of str1.toLowerCase()){
//         if(str2.toLowerCase().includes(ch) && !prev.has(ch)){
//             prev.add(ch)
//             total+=1
//         }
//     }
//     return total
// }
// console.log(matchingOPair('app','alpp'));