function setUsername(username){
    this.username = username;
}

function createUser(username,email,password){
    setUsername.call(this,username);
    this.email = email;
    this.password = password;
}

const User1 = new createUser("subhamay","admin@example.com",12345);
console.log(User1);