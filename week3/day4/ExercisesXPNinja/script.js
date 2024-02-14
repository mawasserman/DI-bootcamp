// // Exercise 1 : Age Difference
// // Instruction
// // Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// // Notes: The dates are given in the format YYYY
// const yearStringA = prompt("Give me the first year (YYYY)");
// const yearStringB = prompt("Give me the second year (YYYY)");
// const yearA = Number(yearStringA);
// const yearB = Number(yearStringB);

// if(yearA > yearB){
//     const bOlder = yearA - yearB; //bOlder is the age B was when A was born
//     const year= yearA + bOlder
//     console.log("The year when the younger one is exactly half the age of the older is " + year);
// }
// else if(yearA < yearB){
//     const aOlder = yearB - yearA; //aOlder is the age A was when B was born
//     const year= yearB + aOlder
//     console.log("The year when the younger one is exactly half the age of the older is " + year);
// }
// else{
//     console.log("You are the same age");
// }



// Exercise 2 : Zip Codes
// Instruction
// Harder exercise
// Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
const zipCodeString = prompt("Please enter your zipcode");
const arrZip = zipCodeString.split("");
const zipCode = Number(zipCodeString);
console.log(zipCode);

// Zip codes consists of 5 numbers
if(arrZip.length == 5){
    if(typeof zipCode !== "number" || zipCode === "NaN"){
    console.log("error not a number");
    }
    else{
        console.log("success");
    }
}
else{
    console.log("error bigger than 5");
}
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length




// Exercise 3 : Secret Word
// Instruction
// Harder exercise
// Hint : Use Regular Expressions

// Prompt the user for a word and save it to a variable.
// Delete all the vowels of the word and console.log the result.
// Bonus: Replace the vowels with another character and console.log the result
// a = 1
// e = 2
// i = 3
// o = 4
// u = 5
