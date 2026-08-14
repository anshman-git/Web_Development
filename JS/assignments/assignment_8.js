// Qs1. Square and sum the array elements using the arrow function and then find the average of the array.
const arr1 = [1, 2, 3, 4, 5];
const sumOfSquares = arr1.reduce((sum, num) => sum + num * num, 0);
const average = sumOfSquares / arr1.length;
console.log("Qs1 - Sum of squares:", sumOfSquares, "Average:", average);

// Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.
const arr2 = [1, 2, 3, 4, 5];
const arr2Mapped = arr2.map(num => num + 5);
console.log("Qs2 - Array with +5:", arr2Mapped);

// Qs3. Create a new array whose elements are in uppercase of words present in the original array.
const arr3 = ["hello", "world", "javascript"];
const arr3Uppercase = arr3.map(word => word.toUpperCase());
console.log("Qs3 - Uppercase array:", arr3Uppercase);

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.
const doubleAndReturnArgs = (arr, ...args) => {
  return [...arr, ...args.map(arg => arg * 2)];
};
console.log("Qs4 - Result:", doubleAndReturnArgs([1, 2], 3, 4, 5));

// Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object
const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};
console.log("Qs5 - Merged object:", mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));