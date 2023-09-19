const tinderUser = new Object();

tinderUser.id = "123abc"
tinderUser.name = "Subham"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const ob1 = {x : "1", y : "2"}
const ob2 = {m : "52", n : "32"}

// const ob3 = Object.assign({},ob1,ob2)

const ob3 = {...ob1,...ob2}

// console.log(ob3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


const course ={
    name : "js for beginners",
    courseInstructor : "Subham",
    language : "Hindi"
}

const {courseInstructor} = course

console.log(courseInstructor);