//OBJECTS
console.log("OBJECTS");
// they are used to group related variables & functions that operate on them
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

circle.draw();

//Factory functions
//use camel notation for naming
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log("Circle 1: ", circle1);

//Constructor functions
//use Pascal notation
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle2 = new Circle(2); // the new operator creates an empty object, sets 'this' to point to the empty object and returns the object
console.log("Circle 2: ", circle2);

//Objects are dynamic (ie properties and methods can be added and deleted after creation)

//Every object in JS has a property called 'constructor' that references the function that was used to create the object

let d = {}; //internally is: 'let d = new Object()' (ie 'Object()' is the inbuilt constructor use to create object literals)

//Other inbuilt constructors;
new Object(); //but we create objects
new String(); // but we use: '',"",``
new Boolean(); // but we use: true, false
new Number(); // but we use: 1, 2, 3, ...
new Function(); //but we create functions

//Functions are objects in JS
console.log("Circle.name: ", Circle.name); //name property returns the name of the function
console.log("Circle.length: ", Circle.length); //length property returns number of arguments
console.log("Circle.constructor: ", Circle.constructor); //the constructor property of a function references an inbuilt 'Function()' constructor used to create functions
Circle.call({}, 1); // same as 'new Cirlce(1)'
Circle.apply({}, [1, 2, 3]); // same as 'call' but takes an array of arguments if the function takes multiple arguments

//Primitives are copied by value and Reference types are copied by reference

//Enumerating the properties of an Object
for (const key in circle1) {
  console.log("for...in", key); //Simplest way to enumerate the properties of an object is with the for...in loop
}

for (const key of Object.keys(circle1)) {
  console.log("for..of with Object.keys()", key); // Object.keys() returns a string array of the object's keys which can be iterated over
}

for (const entry of Object.entries(circle1)) {
  console.log("for...in with Object.entries()", entry); // Object.entries() returns each key-value pair as an array (ie [key, value])
}

if ("radius" in circle1) console.log("yes it has a radius"); //the 'in' operator is used to check whether a given object has a certain property or method

//Cloning an Object
const circle3 = {};
const circle4 = {};

//Old method
for (const key in circle1) {
  circle3[key] = circle1[key];
}

Object.assign(circle4, circle1); //copies the second or more objects into the first object and returns the result

const circle5 = { ...circle1 }; //using the spread operator

console.log("copy with for...in", circle3);
console.log("copy with Object.assign()", circle4);
console.log("copy with spread operator", circle5);

//the JS engine has a Garbage collector, it finds unused variables or constants and deallocates them from memory

//Other built-in objects in JS
Math.LN10; //math object. Contains static properties and methods for mathematical constants and functions respectively

const message = "hi"; //String primitive
const message1 = new String("hello"); //String object

message.length; //when you use the dot notation on the string primitive, JS engine internally wraps it in a string object

//Object literals: {}
//Boolean lietrals: true, false
//String literals: '', ""
//Template literals: ``

const now = new Date(); //date constructor
const date1 = new Date("May 11 2018 09:00");
const date2 = new Date(2018, 4, 11, 9);

now.setFullYear(2017); //date objects have get, set and to methods

//Exercises Objects
const address = { street: "Umoji", city: "Enugu", zipCode: "048150" };

function showAddress(address) {
  for (const key in address) {
    console.log(key, address[key]);
  }
}

showAddress(address);

function addressObj(street, city, zipCode) {
  return { street, city, zipCode };
}

function AddressObj(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address1 = new AddressObj("a", "b", "c");
let address2 = new AddressObj("a", "b", "d");
let address3 = address1;

function areEqual(object1, object2) {
  let equal = true;
  for (const key in object1) {
    if (object1[key] === object2[key]) {
      equal = equal && true;
    } else {
      equal = equal && false;
    }
  }
  return equal;
}

function areSame(object1, object2) {
  return object1 === object2;
}

console.log("Are equal: ", areEqual(address1, address2));
console.log("Are same: ", areSame(address1, address2));

const post1 = {
  title: "Hello",
  body: "Hi there!",
  author: "John",
  views: 5,
  comments: [
    { author: "Lizzy", body: "Hiii" },
    { author: "James", body: "How are you?" },
  ],
  isLive: true,
};
console.log("Post1:", post1);

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let post2 = new Post("hello", "hi there", "John");
console.log("Post2:", post2);

const PriceRanges = [
  { label: "$", tooltip: "Inexpensive", min: 50, max: 100 },
  { label: "$$", tooltip: "Moderate", min: 101, max: 200 },
  { label: "$$$", tooltip: "Pricey", min: 201, max: 300 },
];
