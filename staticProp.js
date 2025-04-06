class User{
    constructor(name){
        this.name= name
    }
    logMe(){
        return(this.name);
    }
    static createId(){
        return(1);
    }
}

const user = new User("Tom");
console.log(user.logMe());
// console.log(user.createId());

class Teacher extends User{
    constructor(name,email){
        super(name);
        this.email = email;
    }
}

const teacher = new Teacher("Tom","admin@example.com");
console.log(teacher.logMe());
console.log(teacher.createId());