// Exercise 1 : Change The Article

// Using a DOM property, retrieve the h1 and console.log it.
const heading = document.querySelector('h1');
// or it supposed to be the textContent?
console.log(heading);

// Using DOM methods, remove the last paragraph in the <article> tag.
const lastP = document.querySelector('article p:last-child');
lastP.remove();

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const secondHeading = document.querySelector('h2');
secondHeading.addEventListener('click', changeColor);

function changeColor(e){
    e.preventDefault();
    secondHeading.style.backgroundColor = "red";
}

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const thirdHeading = document.querySelector('h3');
thirdHeading.addEventListener('click', hideIt);

function hideIt(e){
    e.preventDefault();
    thirdHeading.style.display = 'none';
}

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const button = document.createElement('button');
button.innerText = "Bold"
const article = document.querySelector('article');

article.appendChild(button);

button.addEventListener('click', boldAll);

function boldAll(e){
    e.preventDefault();
    article.style.fontWeight = 'bold';
}

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.
heading.addEventListener('mouseover', sizeChange);

function sizeChange(e){
    e.preventDefault();
    const sizeRandom = Math.floor(Math.random() * 101);
    heading.style.fontSize = sizeRandom + 'px';
}


// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

// I failed 
// // secondHeading.addEventListener('mouseover', fadeOut);

// // function fadeOut(e){
// //     e.preventDefault();
// //     for(let i = 1; i > 0; i -= 0.1){
// //         secondHeading.style.opacity = i;
// //     }
// // }


// 🌟 Exercise 2 : Work With Forms
// Instructions



// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>


// 🌟 Exercise 3 : Transform The Sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>


// In the JS file:

// Declare a global variable named allBoldItems.

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// Create a function called highlight() that changes the color of all the bold text to blue.

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example


// 🌟 Exercice 4 : Volume Of A Sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
// <!doctype html> 
// <html lang="en"> 
//     <head> 
//         <meta charset="utf-8"> 
//         <title>Volume of a Sphere</title> 
//         <style>  
//             body {
//                 padding-top:30px;
//             } 

//             label,input {
//                 display:block;
//             }  
//         </style> 
//     </head> 
//     <body> 
//         <p>Input radius value and get the volume of a sphere.</p> 
//         <form  id="MyForm"> 
//             <label for="radius">Radius</label><input type="text" name="radius" id="radius" required> 
//             <label for="volume">Volume</label><input type="text" name="volume" id="volume"> 
//             <input type="submit" value="Calculate" id="submit">    
//         </form> 
//     </body> 
// </html> 
