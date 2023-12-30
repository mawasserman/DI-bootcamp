let css = document.querySelector("h3"); // step 1
let color1 = document.querySelector(".color1"); //1
let color2 = document.querySelector(".color2"); //1
let body = document.getElementById("gradient"); // pq a cor está aplicada no body, ai cria a variavel pra poder mudar ela usando dom

function setGradient(){ 
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";"; //step 5
} // step 4
color1.addEventListener("input", setGradient)
 // console.log(color1.value)}) // step 2
// console.log as cores enquanto eu tô passando em cima delas para decidir ainda// step 3

color2.addEventListener("input", setGradient) //nãp pode colocar o () pq o addEventListener ja vai executar a função automaticamente daria erro
// function (){
    // console.log(color2.value) })//2
//      body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// });
   

// quer mudar a cor de fundo para as cores escolhidas

//addEvent mantem o css no arquivo css.. mas poderia fazer adicionando oniput = "setGradient" na tag do input... a diferença é que ta adicionando ao HTML e limita ele


//como pegar ele pra usar agora --- step 5 que tá lá em cima