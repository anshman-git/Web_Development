// Q1. Write an arrow function named arrayAverage that accepts an array of
// numbers and returns the average of those numbers.
// const arrayAverage = numbers => {
//     if (!numbers.length) return 0;
//     const sum = numbers.reduce((total, num) => total + num, 0);
//     return sum / numbers.length;
// };

// Q2. Write an arrow function named isEven that accepts a single number and
// returns true if the number is even; otherwise, it returns false.
// const isEven = number => number % 2 === 0;

// Q3. What is the output of the following code?
// const object = {
// 	message: "Hello, World!",
// 	logMessage() {
// 		console.log(this.message);
// 	},
// };

// setTimeout(object.logMessage, 1000);

// Q4. What is the output of the following code?
let length = 4;

// function callback() {
// 	console.log(this.length);
// }

// const object2 = {
// 	length: 5,
// 	method(callback) {
// 		callback();
// 	},
// };

// object2.method(callback, 1, 2);

// Q5. Explain why the value of `this` in the callbacks above is not the
// object from which the callback function was originally taken.
// Answer: When a method is passed as a callback, it is called as a plain
// function rather than as a property access on the original object. In
// that case `this` is set by the call site and not bound to the original
// object, so the callback does not receive the original object as its
// receiver unless it is explicitly bound.