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
var myWatchedSeriesLength = myWatchedSeries.length
console.log(myWatchedSeriesLength)

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory
var myWatchedSeriesSentence = [myWatchedSeries.slice(0,1), myWatchedSeries.slice (2)];
console.log(myWatchedSeriesSentence)

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory
console.log("I watched " + myWatchedSeriesSentence.length + " series: " + myWatchedSeries.slice(0,1) + " and " + myWatchedSeries.slice (2));

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
