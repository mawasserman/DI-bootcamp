// Instructions
// Prompt the user for several words (separated by commas).
let mySentence = prompt("Write a sentence with the words separeted by commas. Ex. I, like, chocolate")

// Put the words into an array. 
const arrayOfWords = mySentence.split(",")
// Console.log the words one per line, in a rectangular frame as seen below.
arrayOfWords.forEach()
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]

// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.
function sentenceWithFrame(mySentence) {
    const sentenceLength = 
  
    const horizontalLine = '+' + '-'.repeat(maxLength + 2) + '+';
    console.log(horizontalLine);
  
    words.forEach(word => {
      const spaces = ' '.repeat(maxLength - word.length);
      console.log(`| ${word}${spaces} |`);
    });
  
    console.log(horizontalLine);
  }
  
  const userInput = prompt("Enter words separated by commas:");
  const wordsArray = userInput.split(',').map(word => word.trim());
  
  createFrame(wordsArray);