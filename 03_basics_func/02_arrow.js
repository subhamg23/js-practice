const user = { 
    username : "Rahul",
    price : 999,
    welcomeMessage : function(){
        return `${this.username}, welcome to the new world`
    }
}

console.log(user.welcomeMessage());
user.username = "Subham"
console.log(user.welcomeMessage());