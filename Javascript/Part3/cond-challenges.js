// Checking if a number is greater than another number: 

let num1 = 11;
let num2 = 9;

/*
console.log("I am regular upper code");
if (num1 > num2) {
    console.log(" num1 is greater than num2");
} else {
    console.log("Nah, num1 is NOT greater");
}

console.log("I am a regular bottom code");
*/

// Checking if a string is equal to another string:

let username = "chai";
let anotherUsername = "mango";

if (username == anotherUsername) {
    // console.log("Pick another username");
} else {
    console.log("You can pick this username");
}

// Checking if a variable is a number or not:

let score = "40";

if (typeof score === "number") {
    console.log("Yep, this is a number");
} else {
    console.log("Nah, it's not a number");
}

// Checking if a Boolean value is true or false:

let isTeaReady = false

if (isTeaReady) {
    console.log("Tea is Ready");
} else {
    // console.log("Tea is NOT ready")
}

// Checking if array is empty or not:

let items =[2];

console.log(items.length);

if (items.length === 0) {
    console.log("Array is empty");
} else {
    console.log("Array is NOT empty");
}