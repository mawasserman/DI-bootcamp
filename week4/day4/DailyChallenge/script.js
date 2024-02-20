// Instructions
// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// // Create an array which value is the planets of the solar system.
// const planetsArr = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];



// // For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// for(let i=0; i < planetsArr.length; i++){
//     let div = document.createElement("div");
//     div.classList.add("planet");
//     div.classList.add(planetsArr[i]);
//     div.style.backgroundColor = "#"+i+(i*2)+i;
//     document.querySelector("section").appendChild(div);
// }

// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).

// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

const planetsArr = [{name:"Mercury", moons: 0 }, {name:"Venus", moons: 0 }, {name:"Earth", moons: 1}, {name:"Mars", moons: 2}, {name:"Jupiter", moons:  95}, {name:"Saturn", moons: 146}, {name:"Uranus", moons: 27}, {name:"Neptune", moons: 14}];


for(let i=0; i < planetsArr.length; i++){
    let div = document.createElement("div");
    div.classList.add("planet");
    div.classList.add(planetsArr[i].name);
    div.style.backgroundColor = "#"+i+(i*2)+i;
    
    for(let j=0; j < planetsArr[i].moons; j++){
        let divMoon = document.createElement("div");
        divMoon.classList.add("moon");
        divMoon.classList.add("moon" + (j+1));
        divMoon.style.backgroundColor = "#"+i+j+(j*2);
        div.appendChild(divMoon);
    }
    document.querySelector("section").appendChild(div);
}