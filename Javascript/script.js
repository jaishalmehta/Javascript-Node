// Iteration 

// For Loops 

// create a for loop:
// declaring a variable, setting a condition, declearing a 'step'

for(
    let i = 0; i < 10; i++
) {
    console.log(`i = ${i}`);
};

// While Loops 
// work with booleans
// runs until a condition is no longer true

let condition = true;
let increment = 0;

while(condition) {
    if(increment == 10){
        condition = false;
    }
    console.log(`increment = ${increment}`);
    increment ++;
}

// Do while loop 
// the same as a while loop, but it always runs at least ONCE

let a = false; 

do {
    console.log(`this loop is running`);
} while(a); 

// Switch cases

let num = 2;

switch(num) {
    case 1: 
        console.log(`the number is equal to ${num}`)
        break;
    case 2: 
        console.log(`the number is equal to ${num}`)
        break;
}

// Task 3

for(
    let a = 100; a < 201; a++
) {
    console.log(`a = ${a}`)
}

for(
    let b = 100; b < 201; b++
) {
    if(b % 2 == 0) {
        console.log("-");
    } else {
        console.log("*")
    }
}

for (
        let I = 1; I < 11; I++
    ) {
    for 
    (
        let repetition = 1; repetition < 11; repetition++
        ) {
        console.log(repetition)
    }
};

let weekday = "Friday";

switch(weekday) {
    case "Monday":
        console.log("M");
    case "Tuesday":
        console.log("TU");
    case "Wednesday":
        console.log("W");
    case "Thursday":
        console.log("TH");
    case "Friday":
        console.log("F");
        break;
    case "Saturday":
        console.log("SA");
        break;
    case "Sunday":
        console.log("SU");
        break;
    default:
        console.log("invalid range")
}
