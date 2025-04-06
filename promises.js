// const promiseOne = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Async operation 1");
//         resolve();
//     },1000)
// });

// promiseOne.then(()=>{
//     console.log("Promise 1 resolved");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async operation 2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Promise 2 resolved");
// })

// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({
//             name: "subhamay",
//             age: 25
//         })
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({
//                 email:"admin@gmail.com",
//                 password:"12344"
//             });
//         }else{
//             reject("Error");
//         }
//     },1000)
// })
// .then(function(user){
//     return user.email
// })
// .then(function(email){
//     console.log(email);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(function(){
//     console.log("Finally block executed");;
// })

const promiseNew = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                email:"admin@gmail.com",
                password:"12344"
            });
        }else{
            reject("Error");
        }
    },1000)
})

async function consumePromise() {
   try {
    const response = await promiseNew;
    console.log(response);
    
   } catch (error) {
    console.log(error);
   }
}
consumePromise();