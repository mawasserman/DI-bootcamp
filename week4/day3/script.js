// For each of the questions, find 2 WAYS of accessing :

// 1. The div DOM node?
console.log(body.firstElementChild);
// body.children[0]

// 2. The ul DOM node?
// body.lastElementChild
// body.children[1]

// 3. The second li (with Pete)?Accessing the div DOM node:

// CHAT GPT
//  By using document.querySelector('div').
// By using document.getElementsByTagName('div')[0].
// Accessing the ul DOM node:

// By using document.querySelector('ul').
// By using document.getElementsByTagName('ul')[0].
// Accessing the second li (with Pete):

// By using document.querySelectorAll('li')[1].
// By using document.getElementsByTagName('li')[1].