// Qs1.Create a new input and but to n element on the page using Java Script only. Set the text of button to “Clickme”; 
// Qs2. Add following attributes to the element:- Change placeholder value of input to “username”- Change the id of button to “btn” 
// Qs1 & Qs2: Create input and button elements
let input = document.createElement("input");
input.placeholder = "username";

let button = document.createElement("button");
button.textContent = "Click me";
button.id = "btn";

document.body.appendChild(input);
document.body.appendChild(button);

// Qs3. Access the btn using the query Selector and button id . Change the button backgroundcolor to blue and text color to white.
let btn = document.querySelector("#btn");
btn.style.backgroundColor = "blue";
btn.style.color = "white";

// Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined. Change its color to purple.
let h1 = document.createElement("h1");
h1.textContent = "DOM Practice";
h1.style.textDecoration = "underline";
h1.style.color = "purple";
document.body.appendChild(h1);

// Qs5. Create a p tag on the page and set it s text to “Apna College Delta Practice”, where Delta is bold.
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.body.appendChild(p);