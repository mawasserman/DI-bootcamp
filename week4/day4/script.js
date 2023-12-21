//const allBooks = [];
// é uma array de objetos, então sabem que dentro vai ter objetos, cada um com 4 keys...
//

const allBooks = [
    {
        title: "HP1",
        author: "JK",
        image: "" 
        alreadyRead: true,
    },
    {
        title: "HP2",
        author: "JK",
        image: ""
        alreadyRead: false,
    }
]; 

const container = document.querySelector(".listBooks");
const table = document.createElement("table");
const tr=document.createElement("tr");
const th1=document.createElement("th");
const th2=document.createElement("th");
const th3=document.createElement("th");
container.append(table);
table.append(tr);

th1.innerText="Title";
th2.innerText="Author";
th3.innerText="image"

// for (let book of allBooks){
//     console.log(element);
// }
// // o i de baixo é o indixe... eu to usando todos os objetos que tem na array
// for(let i=0; i < allBooks.length; i++){
//     console.log(allBooks[i]);
// }

//criando uma row
for (let element of allBooks) {
    const bookTr=document.createElement("tr");
    const td1=document.createElement("td");
    const td2=document.createElement("td");
    const td3=document.createElement("td");
    const img=document.createElement("img");

    td1.innerText=element.title;
    td2.innerText=element.author;
    //td3.innerHTML  pq é uma imagem, ai pode ser link...
    // ele preferiu fazer da maneira abaixo: criou a const img lá de cima antes
    img.setAttribute("src", element.image)
        img.style.width = "100px";
    td3.append(img)
    bookTr.append(td1, td2, td3);
    table.append(bookTr);    
    if (element.alreadyRead == true){
        bookTr.style.color="red"
        
    }

}