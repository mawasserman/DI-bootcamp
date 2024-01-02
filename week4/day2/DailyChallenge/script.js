// Prompt the user for several words (separated by commas).
let sentence = prompt("Give me several words (separated by commas)")
// Put the words into an array.
let sentenceArray = sentence.split(',');
// Console.log the words one per line, in a rectangular frame as seen below.
sentenceArray.forEach(item => console.log(item));
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words


// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.