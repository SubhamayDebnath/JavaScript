// const str = 'hello world';
// console.log(str[0]); // h
// console.log(str.charAt(6)); // w
// console.log(str.charAt('6')); // w

// const user = new String("Subhamay");
// console.log(user);//[String: 'Subhamay']
// console.log(user.length); //8
// console.log(str);// hello world

const user = 'subhamay';
// console.log(user.length); // 8
// console.log(user.toLowerCase());
// console.log(user.toLocaleLowerCase());
// console.log(user.toUpperCase());
// console.log(user.toLocaleUpperCase());
// console.log(user.trim());
// console.log(user.trimEnd());
// console.log(user.trimStart());
// console.log(user.charAt(1)); // u
// console.log(user.charCodeAt(0)); //Returns the Unicode (UTF-16) code of the character at the given index.
// console.log(user.indexOf('a')); //4
// console.log(user.lastIndexOf('a')); //6
// console.log(user.includes('a')); //true
// console.log(user.includes('z')); //false
// console.log(user.slice(5,8)); // may
// console.log(user.slice(-8,-3)); // subha
// console.log(user.substring(0,5)); // subha split string but not slice
// console.log(user.replace('a','@')); // subh@may replace only first occurance of a in subhamay
// console.log(user.replaceAll('a','*')); // subh*m*y replace all occurance of a in subhamay
// console.log(user.split('a')); //[ 'subh', 'm', 'y' ] split into array of subh,m,y without a
// console.log(user.concat(' is a boy')); //subhamay is a boy
// console.log(user.padStart(20,'&')); //&&&&&&&&&&&&subhamay subhamay length is 8 and padding is 20 so 20-8=12 12 & signs are added to make full length 20
// console.log(user.padEnd(20,'&')); //subhamay&&&&&&&&&&&&& subhamay length is 8 and padding is 20 so 20-8=12 12 & signs are added to make full length 20
// console.log(user.repeat(2)); //subhamaysubhamay
// console.log(user.startsWith("S")); //true check starts with S
// console.log(user.endsWith("y")); //true check ends with y
// console.log(user.includes("a", 5)); //true check includes a from index 5
// console.log(user.includes("a", 5, 10)); //true check includes a from index 5 to 10
// console.log(new String('try')); //[String: 'try']
// console.log(new String('try').valueOf()); // try
// const num=65
// console.log(typeof num.toString()); // string
// console.log('re\u0301sume\u0301'.normalize()); // resume
// console.log(user.match('a'));[ 'a', index: 4, input: 'subhamay', groups: undefined ]
// console.log(user.match('z')); // null
// console.log(user.search('a')); //4
// console.log(user.search('z')); // -1