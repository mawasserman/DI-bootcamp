// Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
const sum = (a, b) => a+b;


// 🌟 Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
function gramDec(kg) {
    return kg*1000;
}
gramDec(2);
// Then, use function expression and invoke it.
let gramExp = function (kg){
    return kg*1000;
}
gramExp(3);
// Write in a one line comment, the difference between function declaration and function expression.
//Answer: Function expression is an anonymous function.
//Extra to the answer: gramDec is the name of the function, gramExp is the name of the variable.

// Finally, use a one line arrow function and invoke it.
let gramArrow = (kg) => kg*1000;


// 🌟 Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.

const person = (function (numberChildren, partnerName, gps, profession){
    return `You will be a ${profession} in ${gps}, and married to ${partnerName} with ${numberChildren} kids.`
})(2, 'Thiago', 'Petach Tikva', 'geologist')


// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
const text = document.getElementById("exerc3");
text.innerText = person;


// 🌟 Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
(function (userName){
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.    
    const profile = document.createElement("div");
    document.body.appendChild(profile);
    profile.innerText = userName;
    const picture = document.createElement("img");
    picture.src = "https://variety.com/wp-content/uploads/2018/09/johnny-english-strikes-again.jpg";
    picture.style.width = "200px";
    profile.appendChild(picture);
})('John');


// 🌟 Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
function makeJuice(s){
    // The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
    function addIngredients(a, b, c){
        const paragrafo = document.createElement("p");
        paragrafo.innerText = `The client wants a ${s} juice, containing ${a}, ${b}, ${c}.`;
        document.body.appendChild(paragrafo);
    }
    // Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
    addIngredients('abacaxi', 'banana', 'caju');// Part II:
// In the makeJuice function, create an empty array named ingredients.
    const ingredients = []
    function displayJuice (){
        
    }
}
makeJuice('small');






// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.