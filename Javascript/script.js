// Data Types

let aBoolean = true;
let aNumber = 4;
let aString = "this is a string";
let aBigInt = 99999999999999n;
let aSymbol = Symbol(`description of symbol`);
let aNull = null;
let anUndefined; 

console.log(undefined);
console.log(typeof(undefined));

let myObject;

console.log(myObject);

myObject = {
    key : `value`,
    age : 23,
    height : 4.11,
    name: `Jaishal`
}

console.log(myObject)

// Task 2

let totalMoney = 4000; 
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar 

console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`)