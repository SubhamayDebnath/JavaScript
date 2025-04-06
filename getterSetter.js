class User{
    constructor(name,email,password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email;
    }
    set email(email){
        this._email = email;
    }
    get password(){
        return this._password;
    }
    set password(password){
        this._password = password;
    }
};

const userOne = new User("subhamay", "admin@example.com", "12345");
console.log(userOne);
console.log(userOne.email);
console.log(userOne.password); 