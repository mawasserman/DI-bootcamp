// Exercise 1 : Change The Article

// // Using a DOM property, retrieve the h1 and console.log it.
// const heading = document.querySelector('h1');
// // or it supposed to be the textContent?
// console.log(heading);

// // Using DOM methods, remove the last paragraph in the <article> tag.
// const lastP = document.querySelector('article p:last-child');
// lastP.remove();

// // Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// const secondHeading = document.querySelector('h2');
// secondHeading.addEventListener('click', changeColor);

// function changeColor(e){
//     e.preventDefault();
//     secondHeading.style.backgroundColor = "red";
// }

// // Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// const thirdHeading = document.querySelector('h3');
// thirdHeading.addEventListener('click', hideIt);

// function hideIt(e){
//     e.preventDefault();
//     thirdHeading.style.display = 'none';
// }

// // Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// const button = document.createElement('button');
// button.innerText = "Bold"
// const article = document.querySelector('article');

// article.appendChild(button);

// button.addEventListener('click', boldAll);

// function boldAll(e){
//     e.preventDefault();
//     article.style.fontWeight = 'bold';
// }

// // BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.
// heading.addEventListener('mouseover', sizeChange);

// function sizeChange(e){
//     e.preventDefault();
//     const sizeRandom = Math.floor(Math.random() * 101);
//     heading.style.fontSize = sizeRandom + 'px';
// }


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
// // Instructions
// // Retrieve the form and console.log it.
// const form = document.querySelector('form');
// console.log(form);

// // Retrieve the inputs by their id and console.log them.
// const fname = document.getElementById('fname');
// const lname = document.getElementById('lname');
// const submit = document.getElementById('submit');

// console.log(fname);
// console.log(lname);
// console.log(submit);

// // Retrieve the inputs by their name attribute and console.log them.
// const inputFirst = document.querySelector('input[name="firstname"]');
// const inputLast = document.querySelector('input[name="lastname"]');

// console.log(inputFirst + inputLast);


// // When the user submits the form (ie. submit event listener)
// // use event.preventDefault(), why ?
// // to prevent the page to refresh at click

// // get the values of the input tags,
// // make sure that they are not empty,
// submit.addEventListener('click', getValues);

// function getValues(e){
//     e.preventDefault();
//     if(fname.value.trim() !== '' && lname.value.trim() !== ''){ 
//        const li1 = document.createElement('li');
//        const li2 = document.createElement('li');
//        const ul = document.createElement('ul.userAnsewer');

//        li1.textContent = fname.value.trim();
//        li2.textContent = lname.value.trim();

//        ul.appendChild(li1);
//        ul.appendChild(li2);
//        document.body.appendChild(ul);
//     } else {
//         alert("You can't have an empty value!")
//     }
// }



// 🌟 Exercise 3 : Transform The Sentence

// // In the JS file:

// // Declare a global variable named allBoldItems.
// const allBoldItems = [];

// // Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
// const strongItem = document.querySelectorAll('strong');

// function getBoldItems(){
//     for(let i = 0; i < strongItem.length; i++){
//         const item = strongItem[i];
//         allBoldItems.push(item.textContent);
//     }
//     console.log(allBoldItems);
// }

// // Create a function called highlight() that changes the color of all the bold text to blue.
// function highlight(){
//     for(let i = 0; i < strongItem.length; i++){
//         const item = strongItem[i];
//         item.style.color = 'blue';
//     }
// }

// // Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
// function returnItemsToDefault(){
//     for(let i = 0; i < strongItem.length; i++){
//         const item = strongItem[i];
//         item.style.color = 'black';
//     } 
// }

// // Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph)
// const paragraph = document.querySelector('p');
// paragraph.addEventListener('mouseover', highlight);

// // and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
// paragraph.addEventListener('mouseout', returnItemsToDefault);

// 🌟 Exercice 4 : Volume Of A Sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere.
const radius = document.getElementById('radius');
const volume = document.getElementById('volume');
const submit = document.getElementById('submit');

submit.addEventListener("click", calculateVolume);

function calculateVolume(e){
    e.preventDefault();
    const radiusNum = Number(radius.value)
    volume.value = (4/3 * (Math.PI * Math.pow(radiusNum, 3)));
}


    

