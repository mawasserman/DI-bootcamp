// Exercise 1
// Create a new HTML file

// Create a banner saying "The sales end in 10min ! " . Style the banner and make it visible to the user after 5 sec.
function showBanner (){
    document.getElementById("banner").style.display = "block"; // eu faço aparecer pq no HTML tá com o setting de display=none, então eu aqui to mudando o display para um valor valido que faz ele aparecer
}

setTimeout(showBanner, 5000)

// Exercise 2
// Use the same code as before but create a countdown in the banner.

// ... "The sales end in 10sec ! "

// ... "The sales end in 9sec ! "

// // etc ... until 0
// // MEUUUU!!
// let number10 = document.getElementById("number").innerText
// let myInterval =  setInterval(function countdown (){ // ELE NÃO PRECISA DE LOOPING NEM NADA PQ SETINTERVAL VAI REPETIR ATE O CLEAR
//         number10 = Number(number10) -1;
//         document.getElementById("number").innerText = number10;
//     }, 1000) //DANI COLOCOU ESS DEPOIS DO MEU IF E TIROU O ELSE

// if (Number(number10) > 0){
//     myInterval
// }
// else {
//     clearInterval(myInterval)
// }

// // If you need help for this exercise, look at the 1st video of this tutorial

// Dani me dando uma moral
let number10 = document.getElementById("number").innerText;
let myInterval = setInterval(function countdown() {
    number10 = Number(number10) - 1;
    document.getElementById("number").innerText = number10;
    if (Number(number10) <= 0) {
        clearInterval(myInterval);
    }
}, 1000);