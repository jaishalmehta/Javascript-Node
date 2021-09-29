// this is a simple console logging statement
console.log("Hello World!");

// different types of console logging 

const message = "This is a message"; 

console.log(message);

console.info(message);

console.warn(message);

console.error(message);

// to make your console log look unique you can insert HTML styling 

console.log(`%c` + message, `color: black; background-color: white; font-size: 20px; padding: 5px`)

// Task 1 

const firstName = "Jaishal";
const secondName = "Mehta";
const myLocation = "London";
const starSign = "Libra";

console.log(firstName);
console.log(secondName);
console.log(myLocation);
console.log(starSign);

console.log(`%c` + "Hi - My name is " + firstName + " " + secondName + " and I live in " + myLocation, `color: orange; background-color: black;  font-weight: bold; font-size: 20px; padding: 10px`)


