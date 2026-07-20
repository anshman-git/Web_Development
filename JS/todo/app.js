let todo = []

let req = prompt("Please enter your request:");

while (true) {
    if (req == "quit") {
        console.log("quitting app");
    }

    if(req == "list") {
        console.log("------------");
        for(let i=0;i<todo.length;i++) {
            console.log(i,todo[i]);
        }
        console.log("------------");
    } else if (req == "add") {
        
    }
}