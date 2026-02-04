// Number 

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance.valueOf());

// console.log(typeof balance);
// console.log(typeof anotherBalance);

// boolean 
let isActive = true 

let isReallyActive = new Boolean(true) // not recommended


// null and undefined 

let firstname = null;
let lastname = undefined;

// console.log(firstname);
// console.log(lastname);


// String

let myString = "hello"
let myStringOne = "Hola"
let username = "Anuj"

let oldGreet = myString + " " + "hitesh";
console.log(oldGreet);

let greetMessage = `Hello ${username} !`;
let demoOne = `Value is ${3 * 3}`;
console.log(demoOne);

// Symbols 

let sm1 = Symbol("Anuj");
let sm2 = Symbol("Anuj");

console.log(sm1 == sm2)