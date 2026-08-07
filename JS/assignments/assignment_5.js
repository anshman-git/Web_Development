// 1. Check a program that generates a random number representing a dice. 
let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

// 2. Create an object representing a car that stores the following properties for the car name, model, color 
const car = {
    name : "Mercedes",
    model : "Mercedes Benz",
    color : "black",
};
console.log(car.name)

// 3. Create an object Person with their name age and city 
// edit their city's original value to change it to "New York".
// Add a new property country and set it to the United states .
const Person = {
    name:"lucifuge",
    age: "not known",
    city:"hell",
};
Person.city = "delhi";
Person.country = "India";
console.log(Person);