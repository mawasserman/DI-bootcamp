// exercicios feitos em aula








// filter for all users older than 30
// and store their data in an array
// use Array.filter Array.map Object.keys

const users = {
    user1: { age: 44, name: "picard" },
    user2: { age: 12, name: "sisko" },
    user3: { age: 109, name: "janeway" },
  };

const older = users.filter (users.age >= 30);
console.log(older); // tudo errado... vai ver ele ate explica bem, mas eu não consigo acompanhar não

  /** 
  Results:
  */
//   [
//     {id:'user1',age:44, name: 'picard'},
//     {id:'user3',age:109, name: 'janeway'}
//   ]
  
