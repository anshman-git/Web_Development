// 1.Write a Js program to delete all occurances of element num in a given Array.
let arr = [1,2,3,4,5,6,5,3,1];
let num = 1;

for (let i=0;i<arr.length; i++) {
    if ( arr[i] == num) {
        arr.splice(i,1);
    }
}

console.log(arr);
// 2. write a js program to find the no of digit in a Number
let n = 123;
while( n != 0) {
    n /= 10;
}
// 3. Write a js program to find the sum of digit in a Number.
let n = 123;
let sum = 0;

while( n != 0) {
    sum += n%10;
    n /= 10;
}
// 4. Print the factorial of a number.
let n = 4;
let fac = 1;

for (let i=1;i++) {
    fac *= i;
}

console.assert(sum);
// 5. Find the largest number in an array with only positive number.
 let arr = [2,4,3,5,10,4,3,2,];
 let large = 0;
 for (let i=0;i<arr.length;i++) {
    
    if (large < arr[i]){
       large = arr[i];
    }
}
console.log(large);