// Conditionals 

// FALSEY

let falseOne = 0;
let falseTwo = ``;
let falseThree;
let falseFour = null;
let falseFive = NaN;
let falseSix = false;

// everything else is TRUTHY

// IF statements (also ELSE IF and ELSE)

let a = 3;

if (a == 0){
    console.log("Success!");
} else if (a != 2) {
    console.log("Not 2");
} else {
    console.log("It must be 2")
}

// TERNARY IF

let b = true;

if(b == true) {
    console.log("b is true");
} else {
    console.log("b is false");
}
b ? console.log("True") : console.log("False");

// Task 4

let age = 50; 

if(age >= 18 && age <= 64) {
    console.log("your age is between 18 and 65")
} else if (age < 18) {
    console.log("you are underage")
} else {
    console.log("your age is not between 18 and 65")
}

age > 51 ? console.log('age is greater than 50') : console.log('age is 50 or under')