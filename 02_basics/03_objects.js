
const mySym = Symbol("key1")



const myObj = {
    name : "Subham",
    city : "kolkata",
    email : "subham@google.com",
    isLoggedIn : false,
    [mySym] : "key2"

}

console.log(myObj.email)
console.log(myObj["email"]);
console.log(myObj[mySym]);