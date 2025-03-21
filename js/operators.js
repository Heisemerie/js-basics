//OPERATORS: arithmetic, assignment, comparison, logical, bitwise
console.log("OPERATORS");
//Arithmetic operators
let x = 10;
let y = 3;

console.log(x + y); //addition
console.log(x - y); //subtraction
console.log(x * y); //multiplication
console.log(x / y); //division
console.log(x % y); //modulo division
console.log(x ** y); //exponentiation

console.log(++x); //Increment (++)
console.log(x++); //adds one but logs previous value
console.log(x);

console.log(--y); //Decement (--)

//Assignment operators
let a = 10;

a = a + 5;
a += 5; //same as above (addition assignment operator)

a = a * 3;
a *= 3; //multiplication assignment operator
//all arithmetic operators have this combination of assignment operators

//Comparison operators
let b = 1;

console.log(b > 0); //relational operators
console.log(b >= 1);
console.log(b < 1);
console.log(b <= 1);

console.log(b === 1); //equality operators (strict equality operator ensures same type and value)
console.log(b !== 1);

console.log(b == 1); //loose equality operator (ensures same value)

//If a customer has more then 100 points,
//they are a 'gold' customer, otherwise,
//they are a 'silver' customer.
let points = 110;

let level = points > 100 ? "gold" : "silver"; //Ternary operator
console.log(level);

//Logical Operators
//used to make decisions based on multiple conditions (can be used with non-boolean values)
let highIncome = true;
let goodCreditScore = false;

let eligibleForLoan = highIncome && goodCreditScore; //logical AND (&&)
console.log(eligibleForLoan);

meetAnyEligibilityRequirement = highIncome || goodCreditScore; //logical OR (||)
console.log(meetAnyEligibilityRequirement);

let applicationRefused = !eligibleForLoan; //logical NOT (!)
console.log(applicationRefused);

//Falsy values: undefined, null, 0, false, '', NaN
console.log(0 && "hello"); //logical operators with non-booleans
console.log(false || "hi there!" || "hello"); //short circuiting (evaluation stops at second operand)

let userColor = undefined; //real world example
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log(currentColor);

//Bitwise Operators
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

console.log(1 | 2); //Bitwise OR
console.log(1 & 2); //Bitwise AND
