//this is my first HTML Javascript code!
console.log("hello world");

console.log("VARIABLES & CONSTANTS"); //VARIABLES & CONSTANTS
let firstName = "Ejike";
let lastName = "Mbah";
console.log(firstName, lastName);
//cannot be a reserved keyword
//should be meaningful
//cannot start with a number
//cannot contain a space or hyphen (use camel case)
//are case sensitive

const interestRate = 0.3;
// interestRate = 1 will cause an error
console.log(interestRate);

//PRIMITIVE DATATYPES & DYNAMIC TYPING
console.log("PRIMITIVE DATATYPES & DYNAMIC TYPING");
let name = "Mosh"; //string literal
let age = 30; //number literal
let isApproved = true; //boolean literal
let height = undefined; //default value of variables
let weight = null; //use to explicitly clear the value of a variable

//REFERENCE DATATYPES
let person = { name: "John", age: 29 }; //Objects
console.log(person);

person.name = "James"; //Dot notation
console.log(person.name);

person["age"] = 34; //Bracket notation
console.log(person["age"]);

let selectedColors = ["red", "blue"]; //Arrays
selectedColors[2] = 1; //JS arrays are dynamic (ie length and type of variables of arrays can change at runtime)
console.log(selectedColors);
console.log(selectedColors[0]);

//Functions
//performing a task
function greet(name, lastName) {
  //name is a parameter
  console.log("hello " + name + " " + lastName);
}

greet("John", "Smith"); //John is an argument

//calculating a value
function square(number) {
  return number * number;
}

let number = square(2);
console.log(number);
