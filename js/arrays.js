//ARRAYS
console.log("ARRAYS");
let numbers = [3, 4];

//Adding Elements
numbers.push(5, 6); //add elements to the END of an array
console.log("Push 5 & 6", numbers);

numbers.unshift(1, 2); //add elements to the BEGINNING of an array
console.log("Unshift 1 & 2", numbers);

numbers.splice(2, 0, "a", "b", 4); //add elements in the MIDDLE of an array
console.log("Splice a, b & 4 from index 2", numbers);

//Finding Elements (Primitives)
console.log("IndexOf 3 starting search from index 3", numbers.indexOf(3, 3)); //returns index of a value or '-1' if it doesn't exist. Second argument is the index from which to begin the search
console.log("lastIndexOf 4", numbers.lastIndexOf(4)); //returns the last index of a value or '-1' if it doesn't exist. Second argument is the index from which to begin the search
console.log("Includes a", numbers.includes("a")); //returns true or false if the array contains the value

//Finding Elements (Refernce types)
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

//use the find method and arrow functions (predicate) to compare by reference
const course1 = courses.find((course) => course.name === "a"); //returns the first element that matches the predicate
console.log("Find course", course1);

const course2 = courses.findIndex((course) => course.name === "a"); //returns the index of the first element that matches the predicate
console.log("Find Index", course2);

//Removing Elements
const lastElement = numbers.pop(); //removes the LAST element and returns it
console.log("Pop", numbers);
console.log("Last element", lastElement);

const firstElement = numbers.shift(); //removes the FIRST element and returns it
console.log("Shift", numbers);
console.log("First element", firstElement);

const numbers5 = [1, 2, 3, 4, 5];
const deletedNumbers = numbers5.splice(2, 1); //removes 1 element starting from index 2 in the MIDDLE of the array
console.log("Splice delete 1 elements starting from index 2", numbers5);

//Emptying an Array
numbers = []; //reassign the old array. The old array is garbage collected if there are no more references to it

numbers.length = 0; //truncates the array and deletes the elements

numbers.splice(0, numbers.length); //removes all elements starting from index 1

while (numbers.length > 0) {
  //use while loop to pop elements (not recommended)
  numbers.pop();
}

//Combinig & Slicing Arrays
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const combinedArray1 = firstArray.concat(secondArray); //combines two arrays
console.log("Combined Array", combinedArray1);

const slicedArray = combinedArray1.slice(3); //slices an array taking two arguments; start and end index. Returns a new identical array with no arguments passed (can be used to copy)
console.log("Slice array", slicedArray);

const combinedArray2 = [...firstArray, ...secondArray]; //use the spread operator to combine arrays
console.log("Combine with Spread operator", combinedArray2);

//Copying an Array
const copyArray = [...combinedArray2]; //use the spread operator to copy an array
console.log("Copy with Spread operator", copyArray);

//Iterating an Array
const numbers2 = [1, 2, 3, 4, 5];

for (const number of numbers2) {
  console.log(number); //using a for...of loop
}

numbers2.forEach((number, index) => console.log(number, index)); //using the foreach method. allows access to index compared to for...of

//Joining Array Elements
const joinedArray = numbers2.join(","); //parametr is a separator
console.log("Join array elements with commas", joinedArray);

//Spitting Strings
const string = "this is my first message";
const splitString = string.split(" "); //returns an array with each string element. Argument is a separator
console.log("Split string by whitespace", splitString); // you can combine the split message using the join method (useful in URLs)

//Sorting an Array
const numbers3 = [5, 4, 3, 2, 1];

const sortedNumbers = numbers3.sort(); //it converts each array element to a string and then sorts them in the array
console.log("Sorted Numbers array", sortedNumbers);

const reversedNumbers = numbers3.reverse(); //it reverses the order of the elements in the array
console.log("Reversed Numbers array", reversedNumbers);

//Sorting an array of Objects
const courses2 = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JavaScript" },
];

courses2.sort((first, second) => {
  //a < b return -1
  //a > b return 1
  //a === b return 0
  const nameFirst = first.name.toUpperCase(); //used to prevent case sensitivity
  const nameSecond = second.name.toUpperCase();

  if (nameFirst < nameSecond) return -1; //comparisons are case sensitve due to ASCII code
  if (nameFirst > nameSecond) return 1;
  return 0;
}); //sort takes and argument which is a function for comparison

console.log("Sorting an Array of Objects", courses2);

//Testing Array Elements
const numbers4 = [5, -4, 3, -2, 1];

const allPositive = numbers4.every((number) => number >= 0); //returns true if EVERY elements match the criteria of the predicate function
console.log("All positive", allPositive);

const somePositive = numbers4.some((number) => number >= 0); //returns true if SOME elements match the criteria of the predicate function
console.log("Some positive", somePositive);

//Filtering Arrays
const onlyPositive = numbers4.filter((number) => number > 0); //loops through the array and passes the eligible elements into a new array
console.log(onlyPositive);

//Mapping an Array
const itemList = onlyPositive.map((n) => "<li>" + n + "</li>"); //map into a HTML tag
const htmlList = itemList.join(""); //join the array returned from mapping with spaces to create the HTML list
console.log("Map", htmlList);

const numberObjects = onlyPositive.map((n) => ({ value: n })); //you can also map into an object
console.log("Map", numberObjects);

//Chaining array methods
const chainedNumberObjects = numbers4
  .filter((n) => n >= 0) //you can chain them because they return arrays
  .map((n) => ({ value: n }));
console.log("Chained Mappaing & Filtering", chainedNumberObjects);

//Reducing an Array
const cartPrices = [50, 75, 103, 37, 56];

const totalPrice = cartPrices.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
); //you can omit the accumulator initialization and it will be set to the first element
console.log("Reduce array", totalPrice);

// Exercises
function arrayFromRange(min, max) {
  const array = [];
  let item = min;
  while (item <= max) {
    array.push(item);
    item += 1;
  }
  return array;
}

const rangeArray = arrayFromRange(-10, -4);
console.log("Array from Range", rangeArray);

function includesElement(array, searchElement) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchElement) return true;
  }
  return false;
}

console.log("Includes Element", includesElement(rangeArray, -1));

function except(array, excluded) {
  const output = [];
  for (const element of array) {
    if (!excluded.includes(element)) output.push(element);
  }
  return output;
}

console.log("Except", except([1, 2, 3, 4, 5, 3, 1], [1, 3, 2]));

function moveElement(array, index, offset) {
  const output = [...array];
  const newPosition = offset + index; //calculate new position

  //check if new position is valid (validation)
  if (newPosition >= output.length || newPosition < 0) {
    console.error("Invalid Offset");
    return;
  }

  const [element] = output.splice(index, 1); //remove element from old position

  output.splice(newPosition, 0, element); //add element in new position
  console.log(output);

  return output;
}

moveElement([1, 2, 3, 4, 5], 3, -2);

function countOccurences(array, element) {
  const count = array.reduce((accumulator, currentValue) => {
    if (currentValue === element) return (accumulator += 1);
    return accumulator;
  }, 0);
  return count;
}

console.log(countOccurences([1, 2, 3, 4, 3, 5, 7, 5, 3, 2, 3, 6, 3, 5], 5));

function getMax(array) {
  if (array.length === 0) return undefined;
  let max = array.reduce((max, item) => (item > max ? item : max), -Infinity);

  return max;
}

console.log(getMax([1, 2, 3, 10, 3, 5, 7, 5, 3, 2, 3, 6, 3, 5]));

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

movies
  .filter(({ year, rating }) => year === 2018 && rating > 4)
  .sort((a, b) => b.rating - a.rating) //sort in reverse order
  .forEach(({ title }) => console.log("Title", title));
