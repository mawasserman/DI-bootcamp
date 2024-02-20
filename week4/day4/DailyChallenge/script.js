// Instructions
// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
const planetsArr = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
for(let i=0; i < planetsArr.length; i++){
    let div = document.createElement("div");
    div.classList.add("planet");
    div.classList.add(planetsArr[i]);
    div.style.backgroundColor = "#"+i+(i*2)+i;
    document.querySelector("section").appendChild(div);
}

// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).

// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?