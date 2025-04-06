// const getUsers = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data  = await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// getUsers();

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((data)=> console.log(data))
.catch((error)=>console.log(error))
.finally(()=> console.log("Completed"));