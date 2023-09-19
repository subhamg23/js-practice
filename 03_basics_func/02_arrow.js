const user = { 
    username : "Rahul",
    price : 999,
    welcomeMessage : function(){
        return `${this.username}, welcome to the new world`
    }
}

// console.log(user.welcomeMessage());
user.username = "Subham"
// console.log(user.welcomeMessage());

const addTwoNumbers = (n1,n2) => {
    return n1+n2
}
const addTwoNumbers2 = (n1,n2) => n1+n2 //implicit return

console.log(addTwoNumbers2(56,7));