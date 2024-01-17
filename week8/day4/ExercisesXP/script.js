// Exercise 1 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// My answer: ['bread', "carrot", "potato", 'chicken', "apple", "orange"]
// Right answer: Got right


// ------2------
// const country = "USA";
// console.log([...country]);

// My answer:['USA']
// Right answer: ['U', 'S', 'A'], because the spread extracts individual elements

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

// My answer: [',', ',']
// Right answer: [undefined, undefined]


// 🌟 Exercise 2 : Employees
// Instructions
// Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
const welcomeStudents = users.map(name => `Hello ${name.firstName}`);

console.log(welcomeStudents);
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.
const fullStackResidents = users.filter(name => name.role == 'Full Stack Resident');

console.log(fullStackResidents);

// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
const lastNameFullStackResidents = fullStackResidents.map(name => name.lastName);

console.log(lastNameFullStackResidents);


// 🌟 Exercise 3 : Star Wars
// Instructions
// Using this array 
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.
const sentence = epic.reduce((accumulator, currentValue) => accumulator +  " " + currentValue);

console.log(sentence);

// -------> would it not be better to use join?
const sentence2 = epic.join(" ");
console.log(sentence2);


// 🌟 Exercise 4 : Employees #2
// Instructions
// Using this object:

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
// Using the filter() method, create a new array, containing the students that passed the course.
const passed = students.filter(student => student.isPassed == true);
console.log(passed);

// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
const congratulate = passed.forEach(student => console.log(`Good job ${passed.name}, you passed the course in ${passed.course}`)); 
// is getting undefined 