// Prompt the user for several words (separated by commas).
let sentence = prompt("Give me several words (separated by commas)")
// Put the words into an array.
let sentenceArray = sentence.split(',');
let newSentence = '**'
// Console.log the words one per line, in a rectangular frame as seen below.
function banner(){
  for (let i=0; i<sentenceArray.length; i++)
  newSentence = newSentence + '*'
}
sentenceArray.forEach(console.log(sentenceArray))
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words


// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.