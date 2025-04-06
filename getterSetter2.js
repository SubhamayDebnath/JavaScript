// function User(email,password){
//     this._email = email;
//     this._password = password;

//     Object.defineProperty(this,'email',{
//         get: function(){
//             return this._email;
//         },
//         set:function(email){
//             this._email = email
//         }
//     })
// }

// const userOne = new User("admin@example.com","12345");  
// console.log(userOne);
// console.log(userOne.email);

const User = {
    _email: "admin@example.com",
    _password: "12345",
    get email(){
        return this._email;
    },
    set email(email){
        this._email = email;
    }
}

const userOne = Object.create(User);
console.log(userOne.email);
userOne.email= "newemail@gmail.com"
console.log(userOne.email);