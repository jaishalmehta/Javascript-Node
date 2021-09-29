// OBJECTS, ARRAYS and JSON

let animal = new Object()

animal["name"] = "Clifford";
animal["type"] = "Dog";
animal["size"] = "Big";

animal.colour = "Red";

console.log(animal)

let vehicle = {
    "type": "Car",
    "Seats" : 5,
    "Wheels" : 4,
};

// OBJECTS can be stored in an ARRAY

let garage = [
    vehicle, 
    { 
        "type": "Bike",
        "Seats" : 1,
        "Wheels" : 2,
    }
]

// Loop through an ARRAY

let x = [1,2,3,4,5];

for (
    let i = 0; i < x.length; i++
) {
    console.log(x[i])
}


for(let i of x) {
    console.log(i)
}

// ARRAY OBJECT METHODS

console.log(x.reverse());

// JSON

let newJOSN = {
    "name" : "Jaishal",
    "age" : 23
}
console.log(newJOSN)

let myName = JSON.parse(`{"name" : "Jaishal"}`);
console.log(myName.name)

let str = JSON.stringify(newJOSN);
console.log(str)

// Task 5

let myArray = [
    "hello", "everyone"
]

console.log(myArray.length)

myArray.push("my", "name", "is", "jaishal")

console.log(myArray)

console.log(myArray.length)

myArray.shift()

console.log(myArray)

for(
    let elements of myArray
) {
    console.log(elements)
}
