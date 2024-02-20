// // 🌟 Exercise 1 : Users
// // Instructions

// // Using Javascript:
// // Retrieve the div and console.log it
// let divDom = document.getElementsByTagName("div")[0];
// console.log(divDom);
// // Change the name “Pete” to “Richard”.
// document.querySelector("ul").lastElementChild.textContent = "Richard";
// // Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
// let sarah = document.getElementsByTagName("ul")[1].children[1]
// document.getElementsByTagName("ul")[1].removeChild(sarah);
// // Change each first name of the two <ul>'s to your name. (Hint : use a loop)
// let i = 0
// for(i=0; i<=1; i++){
//     let ul = document.getElementsByTagName("ul")[i].firstElementChild
//     ul.textContent = "Marcella";
// }

// // Bonus - Using Javascript:
// // Add a class called student_list to both of the <ul>'s.
// let j = 0
// for(j=0; j<=1; j++){
//     let ulNewClass = document.getElementsByTagName("ul")[j].classList.add("student_list");
// }

// // Add the classes university and attendance to the first <ul>.
// document.querySelector("ul").classList.add("university", "attendance");


// // 🌟 Exercise 2 : Users And Style
// // Instructions

// // Using Javascript:
// // Add a “light blue” background color and some padding to the <div>.
// let div = document.querySelector("div")
// div.style.backgroundColor = "lightblue";
// div.style.padding = "30px";
// // Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
// document.querySelector("li").style.display = "none";
// // Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
// document.querySelector("ul").lastElementChild.style.border = "solid red"
// // Change the font size of the whole body.
// document.body.style.fontSize = "30px";

// // Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
// if(div.style.backgroundColor = "lightblue"){
//     alert(`Hello ${document.querySelector("li").textContent} and ${document.querySelector("ul").lastElementChild.textContent}`);}

// // 🌟 Exercise 3 : Change The Navbar
// // Instructions

// // Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// document.querySelector("#navBar").setAttribute("id", "socialNetworkNavigation");

// // We are going to add a new <li> to the <ul>.
// // First, create a new <li> tag (use the createElement method).
// let newLi = document.createElement("li");
// // Create a new text node with “Logout” as its specified text.
// let logoutNode = document.createTextNode("Logout");
// // Append the text node to the newly created list node (<li>).
// newLi.appendChild(logoutNode);

// // Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
// let ul = document.querySelector("div ul");
// ul.appendChild(newLi);

// // Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
// console.log(ul.firstElementChild.textContent);
// console.log(ul.lastElementChild.textContent);




// Exercise 4 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
const allBooks = [
    {title: "Crazy Rich Asians", author: "Kevin Kwan", image: "https://m.media-amazon.com/images/I/41Jlnc1LTQL._SY445_SX342_.jpg", alreadyRead: true},
    {title: "Rich People Problems", author: "Kevin Kwan", image: "https://m.media-amazon.com/images/I/71B9B5pqnML._SY342_.jpg", alreadyRead: false}
];

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
const table = document.createElement("table");

const tableRow1 = document.createElement("tr");
const title1 = document.createElement("td");
const author1 = document.createElement("td");
const imgCel1 = document.createElement("td");
const img1 = document.createElement("img");

const tableRow2 = document.createElement("tr");
const title2 = document.createElement("td");
const author2 = document.createElement("td");
const imgCel2 = document.createElement("td");
const img2 = document.createElement("img");

// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
title1.innerText = allBooks[0].title;
author1.innerText = allBooks[0].author;
img1.setAttribute("src", allBooks[0].image);
img1.setAttribute("width", "100px");

title2.innerText = allBooks[1].title;
author2.innerText = allBooks[1].author;
img2.setAttribute("src", allBooks[1].image);
img2.setAttribute("width", "100px");

tableRow1.appendChild(title1);
tableRow1.appendChild(author1);
imgCel1.appendChild(img1);
tableRow1.appendChild(imgCel1);
table.appendChild(tableRow1);

tableRow2.appendChild(title2);
tableRow2.appendChild(author2);
imgCel2.appendChild(img2);
tableRow2.appendChild(imgCel2);
table.appendChild(tableRow2);

document.querySelector("div").appendChild(table);

// If the book is already read. Set the color of the book’s details to red.
for(let i=0; i<= 1; i++){
    if(allBooks[i].alreadyRead == true){
        if(i==0){
            title1.style.color = "red";
            author1.style.color = "red";
        }else if(i==1){
            title2.style.color = "red";
            author2.style.color = "red";
        }
    }
}
