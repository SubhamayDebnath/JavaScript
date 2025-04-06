class User{
    constructor(name){
        this.name = name;
    }
    logMe(){
        return("USERNAME is "+this.name);
    }
}
class Admin extends User{
    constructor(name,email,password){
        super(name);
        this.email = email;
        this.password = password;
    }
    getUser(){
        return(`Username: ${this.name} Email: ${this.email} Password: ${this.password}`);
    }
}

const createOneUser = new User("subhamay");
console.log(createOneUser.logMe());

const createOneUser1 = new Admin("Tom","admin@example.com",12345);
console.log(createOneUser1.getUser()); 
console.log(createOneUser1.name);
console.log(createOneUser1.logMe());