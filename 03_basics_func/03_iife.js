// Immediately invoked function expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})() ;//FIRST () -> IS FOR FUNCTION NAME AND SECOND ()-> IS FOR FUNCTION EXCECUTION

( () => {
    console.log(`DB CONNECTED tw0`);
} ) ()