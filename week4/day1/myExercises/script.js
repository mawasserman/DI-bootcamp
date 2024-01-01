// Exercise 1
// 1. Create a structured HTML file linked to a JS file
// 2. Write a Javascript function that takes a parameter: myAge
// // 3. In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.
// function a (myAge){
//     let mumAge = myAge * 2;
//     let dadAge = mumAge *1.2;
//     console.log("My mum is " + mumAge);
//     console.log('My dad is ' + dadAge);
// }

// // 4. Call the function.
// a (34)

// Exercise 2
// 1. Create a structured HTML file linked to a JS file
// 2. Write a Javascript function that takes a parameter: myAge
// 3. In the function, return the age of my mum (my mum is twice my age)
// 4. Call the function
// 5. In the global scope, console.log the result of the function
function a (myAge){
    let mumAge = myAge * 2;
    return mumAge;
}


console.log(a (34))