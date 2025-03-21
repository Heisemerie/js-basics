// FUNCTIONS
console.log("FUNCTIONS");
//function Declaration
function walk(params) {
  console.log("walking...");
}

//Anonymous function Expression
let run = function (params) {
  console.log("running...");
};

//Named function Expression
let jog = function jog(params) {
  console.log("jogging...");
};
let move = run;
run();
move();

//function declarations are hoisted while function expressions are not. They cannot be used before they are defined.

//the arguments object in functions contains all the arguments passed to a function

//the rest operator takes multiple arguments and puts them in an array (this allows to use array methods eg reduce). It must be the last parameter in a function that it is why it is called rest
function sum1(...args) {
  return args.reduce((total, b) => (total += b));
}

console.log("Rest parameter", sum1(1, 2, 3, 4, 5));

//Default Parameters
function interest(princpal, rate = 3.5, years = 5) {
  // you must give default parameters after one is passed for a parameter that is not last
  return ((princpal * rate) / 100) * years;
}

console.log("Interest", interest(1000));

//Getters and Setters
const person2 = {
  firstName: "Chiemerie",
  lastName: "Mbah",
  get fullName() {
    return `${person2.firstName} ${person2.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log("No method", `${person2.firstName} ${person2.lastName}`);
// console.log("No getter/setter", person2.fullName()); //problems: read-only, method call '()'

person2.fullName = "James Bond"; //setters => change (mutate) properties
console.log("Getter", person2.fullName); //getters => access properties. Allows property syntax (ie no braces '()')

//Try and Catch (error handling)
const person3 = {
  firstName: "Chiemerie",
  lastName: "Mbah",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string!"); //use to ensure the correct shape (type) for incoming data. use at beginning of the function (defensive programming)

    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter a first and last name"); //used to ensure that user enters first and last name

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

//an error is a plain JS object, but when you throw it, it becomes an exception

try {
  //used to catch the exception and display an error to the user. NB; Wrap the statement that 'can' throw the exception
  person3.fullName = "James Bond";
} catch (error) {
  alert(error);
}

console.log(person3);

//Local vs Global scope
// the scope of a variable or constant determines where that value is accessible
{
  const message = "hi"; //has block/local scope. Block can be a function or control flow block
}

const message2 = "hello"; //has global scope. Avoid global variables as they can be accidentally changed by other functions which can cause bugs

//Let vs Var
function greet() {
  var message3 = "hi"; //var has function scope
}

//var => function-scoped
//ES6 (ES2015): let, const => block-scoped

var color1 = "red"; //global var variables are attached to the 'window' object which can cause overrides with libraries. Functions are also added to the window object when defined globally and not in modules

//The 'This' keyword
//'this' references the object that is executing the current function
const video = {
  title: "Game of thrones",
  play() {
    console.log("video", this); // in a method => 'this' references object
  },
};
video.play(); //logs the video object

function playVideo(params) {
  console.log("Function", this); // in a function => 'this' references the global object (window(browsers), global(node))
}
playVideo();

function Video(title) {
  this.title = title;
  console.log("new Video", this);
}
const v = new Video("Lord of the Rings"); //the new operator creates an empty object and sets this in the constructor function to point to the new object

const video2 = {
  title: "Transformers",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log("Video2 this forEach argument", this.title, tag); //references the window object if 'this' argument is not passed to the forEach method
    }, this);
  },
};
video2.showTags();

//Changing the value of 'this' (3 methods)
const video3 = {
  title: "John Wick",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this;
    this.tags.forEach(function (tag) {
      console.log("Video3 self technique", self.title, tag); //references the video3 object because 'self' is defined outside the callback function's scope. Don't use it
    });
  },
};
video3.showTags();

function playVideos(a, b) {
  console.log(a, b, this);
}
playVideos.call({ name: "Ejike" }, "Call", "method"); //call lets you attach the object to the function. Takes multiple arguments individually
playVideos.apply({ name: "Ejike" }, ["Apply", "method"]); //call lets you attach the object to the function. Takes multiple arguments as an array
playVideos.bind({ name: "Ejike" }, "Bind", "method")(); //returns a new function and sets this to point to the function permanently. Takes multiple arguments individually

const video4 = {
  title: "James Bond",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log("Video4 bind method", this.title, tag);
      }.bind(this) //bind it to the showTags method permanently because we're not in callback function scope
    );
  },
};
video4.showTags();

const video5 = {
  title: "James Bond",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log("Arrow function", this.title, tag); // arrow functions inherit this from the containing function
    });
  },
};
video5.showTags();

//Exercises
function sum2(...params) {
  if (params.length === 1 && Array.isArray(params[0])) params = [...params[0]]; //check if the argument has one item and the item is an array
  return params.reduce((sum, a) => (sum += a));
}

console.log(sum2([1, 2, 3, 4, 5, 6, 7])); //rest converts the array to an array of arrays

const circle6 = {
  radius: 0,
  get area() {
    return Math.PI * this.radius * this.radius; //area is a read-only property
  },
};

circle6.radius = 5;
console.log(circle6.area);

function countOccurences2(array, element) {
  if (!Array.isArray(array)) throw new Error("Not an array");

  const count = array.reduce((accumulator, currentValue) => {
    if (currentValue === element) return (accumulator += 1);
    return accumulator;
  }, 0);
  return count;
}

try {
  const numbersArray = [1, 2, 3, 4, 3, 5, 7, 5, 3, 2, 3, 6, 3, 5];
  const count = countOccurences2(true, 5); //this line throws the exception
  console.log("Count", count);
} catch (error) {
  console.log(error);
}
