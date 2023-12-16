/*
// Conditionals

// Exercise 1
// Make a keyless car!

// This car will only let you drive if you are over 18. Make it do the following:

// Using prompt() and alert(), ask a user for their age.
let age = prompt("How old are you?")

// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
if (age < 18){
    alert("Sorry, you are too young to drive this car. Poweroff");
}

// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
else if (age == 18){
   alert("Congratulations on your first year of driving. Enjoy the ride!"); 
}

// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"
else {
    alert("Powering On. Enjoy the ride!");
}
*/


// Introduction to objects
// Exercise 1
// Create a stuctured html file linked to a JS file

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
let person = { 
    username:"John",
    password: "dkjlsfhn",
};

// 2. Create an array which contains the object you have made above and name the array "database".
let database=[person]

console.log(database[0].username);
console.log(database[1].username);

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

let newsfeed = [
    { username: "Dani", timeline: "1997-2023"},
    { username: "Sarah", timeline: "1997-2023"},
    { username: "Greg", timeline: "1997-2023"},
]