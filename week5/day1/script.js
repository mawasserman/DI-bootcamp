// Exercise 1
// Create a structured HTML file, and add the code below in the body. OK

// In a JS file, write a JavaScript function to add rows to a table. Use the code below as a base
// function insertRow() {
//     // vai pegar os elementos da tabela
//     let table = document.getElementById('sampleTable');
//     // vai criar agora uma nova linha, que é o que a gente quer..
//     let newRow = table.insertRow();
//     //criar as celular para a nova row... só o espaço pelo que eu entendi
//     let cell1 = newRow.insertCell(0)
// }

// const i = row
// const j = cell
// ('button').onclick = insertRow() {
//    for(i=) 
    //add row;
// };

// solução do chat gpt

// function insertRow() {
//     // Get the table element
//     var table = document.getElementById('sampleTable');
  
//     // Create a new row
//     var newRow = table.insertRow();
  
//     // Create cells for the new row
//     var cell1 = newRow.insertCell(0);
//     var cell2 = newRow.insertCell(1);
  
//     // Set cell values
//     cell1.innerHTML = 'New Row Cell 1';
//     cell2.innerHTML = 'New Row Cell 2';
//   }

//solução do David..
// ele usou o .createElement('tr')

//solução do Ziv

// function insertRow() {
//     const table = document.getElementById('sampleTable');
//     const tbody = table.firstElementChild;
//     const row = tbody.lastElementChild;
//     const new_row = row.cloneNode(true); // ao inves de criar um elemento a gente pode clonar ele e todos os sub-children.. é uma outra solução....
//     table.appendChild(new_row);
// }

// Zvi disse que é sempre bom procurar outra maneira de fazer as coisas...
