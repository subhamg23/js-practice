// const coding = ["cpp", "js", "py", "ruby", "swift"]

// coding.forEach((items) => {
//     console.log(items);
// })


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myNewNums = myNums.filter((items) => items > 4)
// const myNewNums1 = myNums.filter((items) => {
//     return items > 5
// })

// console.log(myNewNums1);
// console.log(myNewNums);


let myNums = [1,2,3]

let myTotal = myNums.reduce(function(accm,cuurVal){
    console.log(`accm : ${accm} and currval : ${cuurVal}`);
    return accm + cuurVal
},0)

console.log(myTotal);