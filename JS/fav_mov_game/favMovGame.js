let guess = prompt("Guess the movie or type quit to exit:");
let fav="fight club"

while (guess != fav) {
    if(guess == "quit") {
        console.log("You quit");
        break;
    }
    if(guess == fav) {
        console.log("Correct You won");
        break;
    }
    guess = prompt("Wrong!! Guess the movie or type quit to exit:");
}