
const myArr = [0,1,32,4,51]

// const myArr2 = new Array(1,23,4,5)

// console.log(myArr2);
// myArr2.push(95)
// console.log(myArr2);

console.log("A " ,myArr);
const arr1 = myArr.slice(1,3)
console.log(arr1);

console.log("B " ,myArr);
const arr2 = myArr.splice(1,3)
console.log(arr2);
console.log("C ",myArr );

/*
    slice -> didn't include the range and also dont modify the array
    splice -> include the range and also remove it from the primary array
*/

