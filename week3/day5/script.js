// // artigo do medium

// let counter = 0;
// function inc() { counter++; }
// for (let i = 0; i < 10; i++, inc());
// console.log(counter); // 10




// Exercise 1
// 1. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

// Sample Output: //"0 is even" //"1 is odd" //"2 is even"
for (let i = 0; i <= 15; i++){
    if (i % 2 ===0) { 
        console.log(i + ' is even')
        }
    else { 
        console.log(i + ' is odd')
        }
}