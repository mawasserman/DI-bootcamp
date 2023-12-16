// Exercise 1: Your Favorite Food

// Instructions
// Store your favorite food into a variable.
var favFood = "Pizza";

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
var favMeal = "second breakfast"
// I am some kind of hobbit...

// Console.log I eat <favorite food> at every <favorite meal>
console.log("I eat " + favFood + " at every " +favMeal);

// Exercise 2 : Series

// Instructions
// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
var myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory
var myWatchedSeriesSentence = [myWatchedSeries.slice(0,1), myWatchedSeries.slice (2)];
console.log(myWatchedSeriesSentence);

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory
console.log("I watched " + myWatchedSeriesSentence.length + " series: " + myWatchedSeries.slice(0,1) + " and " + myWatchedSeries.slice (2));

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries[2] = "friends";
console.log(myWatchedSeries);

// Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("scrubs");
console.log(myWatchedSeries);

// Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift("brooklyn 99");
console.log(myWatchedSeries);

// Delete the series “black mirror”.
var myWatchedSeriesNoMirror = [myWatchedSeries.slice(0,1), myWatchedSeries.slice (2)];
console.log(myWatchedSeriesNoMirror);

// Console.log the third letter of the series “money heist”.
console.log(myWatchedSeriesNoMirror[1][0][2]);

// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeriesNoMirror);

// Exercise 3 : The Temperature Converter

// Instructions
// Store a celsius temperature into a variable.
var celcius = 37;

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
console.log(celcius+ "°C is " + ((celcius/5)*9)+32 + "°F."); 

// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32


