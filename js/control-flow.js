//CONTROL FLOW
console.log("CONTROL FLOW");
//Conditionals (if...else & switch...case)
//if...else
let hour = 14;

if (hour >= 6 && hour < 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

//switch...case
let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest user");
    break;
  case "moderator":
    console.log("Moderator user");
    break;

  default:
    console.log("Unknown user");
    break;
}

//Loops (for, while, do...while, for...in & for...of)
//for loop
for (let i = 1; i <= 5; i++) {
  // console.log("Hello world!", i);
  if (i % 2 !== 0) console.log("Odd for", i);
}

//while loop
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log("Odd while", i);
  i++;
}

//do...while loop
let j = 0;
do {
  if (j % 2 !== 0) console.log("Odd do...while", j);
  j++;
} while (j <= 5);

//for...in loop (used with objects)
const human = { name: "John", age: 25 };
for (const key in human) {
  console.log(key, person[key]);
}

//for...of loop (used with iterables such as arrays and maps)
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}

//break and continue
let k = 0;
while (k <= 10) {
  if (k === 5) break; //jumps out of the loop
  console.log("break", k);
  k++;
}

while (k <= 10) {
  if (k % 2 === 0) {
    k++;
    continue; //jumps to the next iteration
  }
  console.log("continue", k);
  k++;
}

// Exercises Control flow
function max(a, b) {
  return a > b ? a : b;
}

let maxNum = max(3, 4);
console.log(maxNum);

function isLandscape(width, height) {
  return width > height;
}

let picOrientation = isLandscape(600, 400);
console.log(picOrientation);

function fizzBuzz(input) {
  if (typeof input !== "number") return "Not a number";
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Fizz";
  return input;
}
const output = fizzBuzz(15);
console.log(output);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License suspended");
  else console.log("Points", points);
}
checkSpeed(135);

function showNumbers(limit) {
  for (let i = 0; i < limit; i++) {
    i % 2 === 0 ? console.log(i, "EVEN") : console.log(i, "ODD");
  }
}
showNumbers(12);

function countTruthy(array) {
  let i = 0;
  for (const index of array) {
    if (array[index]) i++;
  }
  return i;
}

const arr = [0, 1, 2, 3, 4];
const truthy = countTruthy(arr);
console.log(truthy);

function showProperties(object) {
  for (const key in object) {
    if (typeof object[key] === "string") {
      console.log(key, object[key]);
    }
  }
}

const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};
showProperties(movie);

function sum(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
  }
  console.log(sum);
}

sum(10);

function calculateGrade(marks) {
  const averageScore = calculateAverage(marks);

  if (averageScore < 60) return "F";
  if (averageScore < 70) return "D";
  if (averageScore < 80) return "C";
  if (averageScore < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let total = 0;
  let average;

  for (const value of array) {
    total += value;
  }

  return total / array.length;
}

const marks = [80, 80, 50];
console.log(calculateGrade(marks));

function showStars(rows) {
  let stars = "";
  for (let index = 0; index < rows; index++) {
    stars += "*";
    console.log(stars);
  }
}

showStars(10);

function showPrimes(limit) {
  for (let number = 2; number < limit; number++) {
    if (checkPrime(number)) console.log(number);
  }
}

function checkPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) return false;
  }

  return true;
}

showPrimes(10);
