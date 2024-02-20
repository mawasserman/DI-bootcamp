// 🌟 Exercise 1 : Users
// Instructions
// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>


// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
// Change each first name of the two <ul>'s to your name. (Hint : use a loop)

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.


// 🌟 Exercise 2 : Users And Style
// Instructions
// <div>Users:</div>
// <ul>
//     <li>John</li>
//     <li>Pete</li>
// </ul>


// Add the code above, to your HTML file

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
// Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
// Change the font size of the whole body.

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).


// 🌟 Exercise 3 : Change The Navbar
// Instructions
// <div id="navBar">
//     <ul>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>


// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).


// Exercise 4 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.





// //const allBooks = [];
// // é uma array de objetos, então sabem que dentro vai ter objetos, cada um com 4 keys...
// //

// const allBooks = [
//     {
//         title: "HP1",
//         author: "JK",
//         image: "" 
//         alreadyRead: true,
//     },
//     {
//         title: "HP2",
//         author: "JK",
//         image: ""
//         alreadyRead: false,
//     }
// ]; 

// const container = document.querySelector(".listBooks");
// const table = document.createElement("table");
// const tr=document.createElement("tr");
// const th1=document.createElement("th");
// const th2=document.createElement("th");
// const th3=document.createElement("th");
// container.append(table);
// table.append(tr);

// th1.innerText="Title";
// th2.innerText="Author";
// th3.innerText="image"

// // for (let book of allBooks){
// //     console.log(element);
// // }
// // // o i de baixo é o indixe... eu to usando todos os objetos que tem na array
// // for(let i=0; i < allBooks.length; i++){
// //     console.log(allBooks[i]);
// // }

// //criando uma row
// for (let element of allBooks) {
//     const bookTr=document.createElement("tr");
//     const td1=document.createElement("td");
//     const td2=document.createElement("td");
//     const td3=document.createElement("td");
//     const img=document.createElement("img");

//     td1.innerText=element.title;
//     td2.innerText=element.author;
//     //td3.innerHTML  pq é uma imagem, ai pode ser link...
//     // ele preferiu fazer da maneira abaixo: criou a const img lá de cima antes
//     img.setAttribute("src", element.image)
//         img.style.width = "100px";
//     td3.append(img)
//     bookTr.append(td1, td2, td3);
//     table.append(bookTr);    
//     if (element.alreadyRead == true){
//         bookTr.style.color="red"
        
//     }

// }